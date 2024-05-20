button.addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("hide");
});

function handleResize() {
    const menu = document.querySelector("#menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }
  

// Function to handle viewing the image
function viewHandler(event) {
    const clickedElement = event.target;
    if (clickedElement.tagName === 'IMG') {
        const src = clickedElement.src;
        const alt = clickedElement.alt;
        const newSrc = src.replace('-sm', '-full'); // Adjust according to your image naming convention
        
        // Debugging logs
        console.log("Original Src: ", src);
        console.log("New Src: ", newSrc);

        const modalHTML = viewerTemplate(newSrc, alt);

        document.body.insertAdjacentHTML('afterbegin', modalHTML);

        document.querySelector('.close-viewer').addEventListener('click', closeViewer);
    }
}

// Function to close the viewer
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}

// Add event listener to the gallery
document.querySelector('.gallery').addEventListener('click', viewHandler);