const canvas = document.getElementById('canvas');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');

let isDrawing = false;

for (let i = 0; i < 256; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');

    pixel.addEventListener('mousedown', function () {
        pixel.style.backgroundColor = colorPicker.value;
    });

    pixel.addEventListener('mouseenter', function () {
        if (isDrawing === true) {
            pixel.style.backgroundColor = colorPicker.value;
        }
    });

    canvas.appendChild(pixel);
}

canvas.addEventListener('mousedown', function () {
    isDrawing = true;
});

canvas.addEventListener('mouseup', function () {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', function () {
    isDrawing = false;
});

clearBtn.addEventListener('click', function () {
    const allPixels = document.querySelectorAll('.pixel');

    allPixels.forEach(function (pixel) {
        pixel.style.backgroundColor = 'white';
    });
});