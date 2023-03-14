
// bold-italic-underline
document.getElementById('bold-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('bold-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextShapeFromId(id);
});
document.getElementById('italic-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('italic-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextShapeFromId(id);
});
document.getElementById('underline-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('underline-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextShapeFromId(id);
    // console.log('underline clicked');
});


// alignment
document.getElementById('left-align-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('left-align-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextAlignmentFromId(id);
});
document.getElementById('right-align-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('right-align-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextAlignmentFromId(id);
});
document.getElementById('center-align-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('center-align-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextAlignmentFromId(id);
});
document.getElementById('justify-align-btn').addEventListener('click', function () {
    const btnClicked = document.getElementById('justify-align-btn');
    const id = btnClicked.id;
    toggleFocus(id);
    changeTextAlignmentFromId(id);
});

//  //////--------   functions: using classList to add properties and tailwind    ------////////////////


function changeTextShapeFromId(id) {
    if (id === 'bold-btn') {
        if (document.getElementById('text-field').classList.contains('font-bold')) {
            document.getElementById('text-field').classList.remove('font-bold');
        }
        else {
            document.getElementById('text-field').classList.add('font-bold');
        }
    }
    else if (id === 'italic-btn') {
        if (document.getElementById('text-field').classList.contains('italic')) {
            document.getElementById('text-field').classList.remove('italic');
        }
        else {
            document.getElementById('text-field').classList.add('italic');
        }

    }
    else if (id == 'underline-btn') {
        if (document.getElementById('text-field').classList.contains('underline')) {
            document.getElementById('text-field').classList.remove('underline');
        }
        else {
            document.getElementById('text-field').classList.add('underline');
        }
    }
}

// using style to set properties.. plain css properties
function changeTextAlignmentFromId(id) {
    if (id === 'left-align-btn') {

        document.getElementById('text-field').style.textAlign = 'left';
    }
    else if (id === 'right-align-btn') {

        document.getElementById('text-field').style.textAlign = 'right';
    }
    else if (id == 'center-align-btn') {

        document.getElementById('text-field').style.textAlign = 'center';
    }
    else if (id == 'justify-align-btn') {
        document.getElementById('text-field').style.textAlign = 'justify';
    }

}


function toggleFocus(id) {
    const button = document.getElementById(id);
    button.classList.toggle('outline-none');
    button.classList.toggle('focus:outline-white');
}

// font size and color

document.getElementById('text-size').addEventListener('input', function () {
    const size = parseInt(document.getElementById('text-size').value);
    document.getElementById('text-field').style.fontSize = 16 + size + 'px';
});

document.getElementById('color').addEventListener('input', function () {
    const textColor = document.getElementById('color');
    document.getElementById('text-field').style.color = textColor.value;
});

