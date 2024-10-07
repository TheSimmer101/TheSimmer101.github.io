document.addEventListener('mousemove', function(e) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000); // Adjust the timeout to control how long the stars stay visible
});