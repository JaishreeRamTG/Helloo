<?php

// Directory where files will be stored
$uploadDirectory = "uploads/";

// Create the directory if it doesn't exist
if (!is_dir($uploadDirectory)) {
    mkdir($uploadDirectory, 0777, true);
}

// Initialize response
$response = ['success' => false, 'files' => []];

// Check if files are uploaded
if (isset($_FILES['files'])) {
    $files = $_FILES['files'];
    $uploadedFiles = [];

    // Loop through each uploaded file
    for ($i = 0; $i < count($files['name']); $i++) {
        $fileName = basename($files['name'][$i]);
        $fileTmpName = $files['tmp_name'][$i];
        $filePath = $uploadDirectory . $fileName;

        // Check for upload errors
        if ($files['error'][$i] !== UPLOAD_ERR_OK) {
            $response['error'] = "Error uploading file: " . $files['name'][$i] . ". Code: " . $files['error'][$i];
            echo json_encode($response);
            exit;
        }

        // Check if the file is an image or video (optional)
        $fileType = mime_content_type($fileTmpName);
        if (in_array($fileType, ['image/jpeg', 'image/png', 'video/mp4', 'video/avi', 'video/mkv'])) {
            // Move the uploaded file to the target directory
            if (move_uploaded_file($fileTmpName, $filePath)) {
                $uploadedFiles[] = $fileName;
            } else {
                $response['error'] = "Failed to move file: " . $files['name'][$i];
                echo json_encode($response);
                exit;
            }
        } else {
            $response['error'] = "Invalid file type: " . $files['name'][$i];
            echo json_encode($response);
            exit;
        }
    }

    // If files were uploaded successfully, send back the success response
    if (count($uploadedFiles) > 0) {
        $response['success'] = true;
        // Construct URLs with 'uploads/' prefix
        foreach ($uploadedFiles as $file) {
            $response['files'][] = $_SERVER['HTTP_HOST'] . '/' . $uploadDirectory . $file;
        }
    } else {
        $response['error'] = "No files were uploaded.";
    }
} else {
    $response['error'] = "No files received.";
}

// Return response as JSON
echo json_encode($response);
?>