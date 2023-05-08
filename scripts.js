
const popup = document.getElementById('popup');
const memberListArchive = document.getElementById('member-list-archive').childNodes;
const groupListArchive = document.getElementById('group-list-archive').childNodes;
const memberListIndex = document.getElementById('member-list-archive').childNodes;
const groupListIndex = document.getElementById('group-list-archive').childNodes;
let member = "";
let group = "";
const cancel = document.getElementById('cancel');
const save = document.getElementById('save');

//document.addEventListener( "DOMContentLoaded", fetchData, false );

async function fetchMemberData() {
    const res = await fetch("https://raw.githubusercontent.com/qwdsx/reportingtool/main/test.json");
    const memberData = await res.json();
    console.log(memberData);
    appendMemberDataToArchive(memberData);
}

fetchMemberData();

function appendMemberDataToArchive(memberData) {
    var list = document.getElementById('member-list-archive');
    for (let i = 0; i < memberData.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = memberData[i].name;
        list.appendChild(li);
    };
};

function appendMemberDataToIndex(memberData) {
    var table = document.getElementById('data-output');
    for (let i = 0; i < memberData.length; i++) {
        //loop to go through memberdata and append members to table
        //checkboxes could also be set here?
        
    };
};

memberListArchive.forEach((item) => {
    item.addEventListener('click', () => {
        member = item.innerHTML;
        document.getElementById('month-archive').style.display = "block";
    })
})

groupListArchive.forEach((item) => {
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

// fetch("test.json")
// .then(function(response) {
//     return response.json();
// })
// .then(function(members) {
//     appendData(members);
// })
// .catch(function(err) {
//     console.log('error: ' + err);
// });


