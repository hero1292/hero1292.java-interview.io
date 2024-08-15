document.addEventListener('DOMContentLoaded', function() {
    fetch('/templates/layout.html')
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            const header = tempDiv.querySelector('#header').innerHTML;
            document.querySelector('#header-placeholder').innerHTML = header;

            const footer = tempDiv.querySelector('#footer').innerHTML;
            document.querySelector('#footer-placeholder').innerHTML = footer;
        });
});
