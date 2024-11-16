document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href; // Используем window.location.href для перехода на другую страницу
        });
    });

    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Аккаунт успешно создан!');
    });
});