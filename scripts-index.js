
const popupSave = document.getElementById('popup-save');
const popupCancel = document.getElementById('popup-cancel');
const cancel = document.getElementById('cancel');
const save = document.getElementById('save');

document.getElementById('popup-ok').onclick = () => {
    popupSave.style.display = "none";
}

document.getElementById('ok-cancel-no').onclick = () => {
    popupCancel.style.display = "none";
}

document.getElementById('ok-cancel-yes').onclick = () => {
    popupCancel.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == popupSave) {
        popupSave.style.display = "none";
    }

    if (e.target == popupCancel) {
        popupCancel.style.display = "none";
    }
}

document.getElementById('save').onclick = () => {
    console.log(popupSave);
    popupSave.style.display = "block";
    setTimeout(() => {
        popupSave.style.display = "none";
    }, 3000)
}

document.getElementById('cancel').onclick = () => {
    popupCancel.style.display = "block";
}