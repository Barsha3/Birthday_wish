const messages = [
    "Happy Birthday, [Name]! 🎉",
    "You're an amazing friend! 🎂",
    "Here’s to many more fun moments together! 🎈",
    "Wishing you all the best today and always! 🎁"
];

const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentIndex = 0;
const messageBox = document.getElementById('message-box');
const imageBox = document.getElementById('image-box');
const nextBtn = document.getElementById('next-btn');
const bgMusic = document.getElementById('bg-music');
const musicControl = document.getElementById('music-control');

messageBox.textContent = messages[currentIndex];
imageBox.src = images[currentIndex];

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < messages.length) {
        messageBox.textContent = messages[currentIndex];
        imageBox.src = images[currentIndex];
        imageBox.classList.add('show');
    } else {
        messageBox.textContent = "That's all! Have a great day! 🎉";
        imageBox.classList.add('hidden');
        nextBtn.disabled = true;
        nextBtn.textContent = "End";
    }
});

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicControl.textContent = "Pause Music";
    } else {
        bgMusic.pause();
        musicControl.textContent = "Play Music";
    }
}
