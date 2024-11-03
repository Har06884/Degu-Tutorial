document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion');
    
    // Open the first accordion by default
    acc[0].classList.add('active');
    var firstPanel = acc[0].nextElementSibling;
    firstPanel.style.display = 'block';

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    }
});
