const stars = document.getElementById('stars');

for (var i = 0; i < 3000; i++) {
    var star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDelay = Math.random() * 5 + 's';
    var size = Math.random() * 2 + 'px';
    star.style.width = size;
    star.style.height = size;
    stars.appendChild(star);
}