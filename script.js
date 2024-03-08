const images = document.querySelectorAll('.image');

let draggedImage;
let draggedImageIndex;

images.forEach((image, index) => {
  image.addEventListener('dragstart', (e) => {
    draggedImage = e.target;
    draggedImageIndex = index;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();
    const dropTargetIndex = Array.from(images).indexOf(e.target);

    if (draggedImageIndex === dropTargetIndex) return;

    [images[draggedImageIndex].innerHTML, images[dropTargetIndex].innerHTML] = [
      images[dropTargetIndex].innerHTML,
      images[draggedImageIndex].innerHTML,
    ];

    [images[draggedImageIndex].id, images[dropTargetIndex].id] = [
      `div${dropTargetIndex + 1}`,
      `div${draggedImageIndex + 1}`,
    ];
  });
});
