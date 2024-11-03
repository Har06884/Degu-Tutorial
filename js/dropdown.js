// JavaScript for dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var dropdownBtn = document.getElementById('galleryDropdownBtn');
    var dropdownContent = document.getElementById('galleryDropdownContent');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-btn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
