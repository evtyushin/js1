document.addEventListener('DOMContentLoaded', function() {
    // Анимация при наведении мыши
    let jumbotrons = document.querySelectorAll('.jumbotron');
    jumbotrons.forEach(function(jumbotron) {
        jumbotron.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#e9ecef';
        });
        jumbotron.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });

    // Анимация при нажатии клавиши
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            jumbotrons.forEach(function(jumbotron) {
                jumbotron.style.backgroundColor = '#d4edda';
            });
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            jumbotrons.forEach(function(jumbotron) {
                jumbotron.style.backgroundColor = '';
            });
        }
    });
});
