
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
          const data = e.dataTransfer.getData('text/html');
          const dropTarget = e.target;
          const dropTargetIndex = Array.from(images).indexOf(dropTarget);

          if (draggedImageIndex === dropTargetIndex) return;

          const temp = images[draggedImageIndex].innerHTML;
          images[draggedImageIndex].innerHTML = images[dropTargetIndex].innerHTML;
          images[dropTargetIndex].innerHTML = temp;

          images[draggedImageIndex].id = `div${dropTargetIndex + 1}`;
          images[dropTargetIndex].id = `div${draggedImageIndex + 1}`;
        });
      });
  