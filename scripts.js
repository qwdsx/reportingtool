
const popup = document.getElementById('popup');
const memberList = document.getElementById('member-list-archive').childNodes;
const groupList = document.getElementById('group-list-archive').childNodes;
let member = "";
let group = "";

memberList.forEach((item) => {
    item.addEventListener('click', () => {
        member = item.innerHTML;
        document.getElementById('month-archive').style.display = "block";
    })
})

groupList.forEach((item) => {
    item.addEventListener('click', () => {
        document.getElementById('header-table-archive').getElementsByTagName('h1')[0].innerHTML = item.innerHTML;
        document.getElementById('table-main-archive').style.display = "flex";
    })
})

document.querySelectorAll('.month-block').forEach((item) => {
    item.addEventListener('click', () => {
        popup.style.display = "block";
        document.getElementById('popup-month').innerHTML = item.innerHTML;
        document.getElementById('popup-member').innerHTML = member;
    })
})

window.onclick = (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}

document.getElementById('popup-close').onclick = () => {
    popup.style.display = "none";
}