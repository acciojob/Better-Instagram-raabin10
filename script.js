document.addEventListener('DOMContentLoaded', function () {
    let dragged;

    document.addEventListener('dragstart', function (event) {
        dragged = event.target;
        event.dataTransfer.setData('text/plain', ''); // for Firefox compatibility
    });

    document.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    document.addEventListener('drop', function (event) {
        event.preventDefault();

        if (event.target.classList.contains('draggable')) {
            const target = event.target;

            // Swap the background images
            const temp = target.style.backgroundImage;
            target.style.backgroundImage = dragged.style.backgroundImage;
            dragged.style.backgroundImage = temp;
        }
    });
});
