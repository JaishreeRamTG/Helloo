<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Background and Social Buttons</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* Full-screen neon gradient background */
    body, html {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;
      font-family: 'Roboto', sans-serif;
    }

    /* Neon color-changing background */
    .neon-background {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(45deg, #ff00c3, #00c3ff, #ff00ff, #ffff00);
      background-size: 400% 400%;
      animation: gradientShift 5s ease infinite;
      z-index: -1;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Position for buttons */
    .social-buttons {
      position: fixed;
      bottom: 20px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      z-index: 100;
    }

    .social-button {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 30px;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      transition: background 0.3s ease;
      max-width: 180px;
      justify-content: center;
    }

    .social-button:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .social-button img {
      width: 30px;
      height: 30px;
      margin-right: 8px;
      transition: transform 0.3s ease;
    }

    .social-button:hover img {
      transform: scale(1.2);
    }

    /* Modal content */
    .social-modal {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 10px;
      color: white;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
      z-index: 101;
      width: 250px; /* Shortened modal width */
      text-align: center; /* Center modal content */
    }

    .social-modal a {
      display: block;
      padding: 8px;
      color: #fff;
      text-decoration: none;
      margin-bottom: 8px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      text-align: center;
      transition: background 0.3s;
    }

    .social-modal a:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    /* Close button style */
    .close-btn {
      margin-top: 10px;
      padding: 8px 15px;
      background-color: #ff00c3;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s;
    }

    .close-btn:hover {
      background-color: #c300a0;
    }
  </style>
</head>
<body>

  <div class="neon-background"></div>

  <div class="social-buttons">
    <a href="javascript:void(0);" class="social-button" onclick="toggleModal('instagram-modal')">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Instagram">
      Instagram
    </a>
    <a href="javascript:void(0);" class="social-button" onclick="toggleModal('whatsapp-modal')">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
      WhatsApp
    </a>
    <a href="javascript:void(0);" class="social-button" onclick="toggleModal('telegram-modal')">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" alt="Telegram">
      Telegram
    </a>
  </div>

  <!-- Instagram Modal -->
  <div id="instagram-modal" class="social-modal">
    <a href="https://www.instagram.com/mysticxditor" target="_blank">Instagram</a>
    <a href="https://www.instagram.com/mysticxditor/stories" target="_blank">Stories</a>
    <button class="close-btn" onclick="closeModal('instagram-modal')">Close</button>
  </div>

  <!-- WhatsApp Modal -->
  <div id="whatsapp-modal" class="social-modal">
    <a href="https://wa.me/message/HTK2K4ZKFVQCD1" target="_blank">Chat</a>
    <a href="https://web.whatsapp.com" target="_blank">WhatsApp Web</a>
    <button class="close-btn" onclick="closeModal('whatsapp-modal')">Close</button>
  </div>

  <!-- Telegram Modal -->
  <div id="telegram-modal" class="social-modal">
    <a href="https://t.me/mysticxditor" target="_blank">Channel</a>
    <a href="https://web.telegram.org" target="_blank">Telegram Web</a>
    <button class="close-btn" onclick="closeModal('telegram-modal')">Close</button>
  </div>

  <script>
    // Function to toggle the visibility of the modal
    function toggleModal(modalId) {
      var modal = document.getElementById(modalId);
      // Hide all modals first
      document.querySelectorAll('.social-modal').forEach(function(modal) {
        modal.style.display = 'none';
      });
      // Toggle the selected modal
      if (modal.style.display === 'block') {
        modal.style.display = 'none';
      } else {
        modal.style.display = 'block';
      }
    }

    // Function to close the modal when clicking on "Close"
    function closeModal(modalId) {
      document.getElementById(modalId).style.display = 'none';
    }
  </script>

</body>
</html>