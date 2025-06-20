// Mobile navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

function toggleNav() {
    navMenu.classList.toggle('hidden');
}

navToggle.addEventListener('click', toggleNav);

// Skills slider drag functionality
const track = document.getElementById('skillsTrack');
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
    isDown = true;
    track.style.animationPlayState = 'paused';
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
    isDown = false;
    track.style.animationPlayState = 'running';
});

track.addEventListener('mouseup', () => {
    isDown = false;
    track.style.animationPlayState = 'running';
});

track.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile devices
track.addEventListener('touchstart', (e) => {
    isDown = true;
    track.style.animationPlayState = 'paused';
    startX = e.touches[0].pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
});

track.addEventListener('touchend', () => {
    isDown = false;
    track.style.animationPlayState = 'running';
});

track.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
}); 