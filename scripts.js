
const popup = document.getElementById('popup');
let member = "";
let group = "";

//document.addEventListener( "DOMContentLoaded", fetchData, false );

async function fetchMemberData() {
    const res = await fetch("https://raw.githubusercontent.com/qwdsx/reportingtool/main/groups.json");
    const memberData = await res.json();
    appendMemberDataToArchive(memberData);
    appendDataToArchive(memberData);
}

fetchMemberData();

function appendMemberDataToArchive(memberData) {
    let list = document.getElementById('member-list-archive');
    let li = document.createElement('li');
    for (let i = 0; i < memberData.groups.length; i++) {
        for (let j = 0; j < memberData.groups[i].members.length; j++) {
            li.innerHTML = memberData.groups[i].members[j].name;
            list.appendChild(li);
        }
    };
};

function appendDataToArchive(data) {
    let list = document.getElementById('group-list-archive');
    for (let i = 0; i < data.groups.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = data.groups[i].name;
        list.appendChild(li);
    }

    list.childNodes.forEach((item) => {
        item.addEventListener('click', () => {
            let list2 = document.getElementById('member-list-archive');
            
            while (list2.firstChild) {
                list2.removeChild(list2.firstChild);
            }

            const findCorrectGroup = data.groups.find(e => e.name === item.innerHTML);

            for (let i = 0; i < findCorrectGroup.members.length; i++) {
                let li = document.createElement('li');
                li.innerHTML = findCorrectGroup.members[i].name;
                list2.appendChild(li);
            }

            list2.childNodes.forEach((item) => {
                item.addEventListener('click', () => {
                    member = item.innerHTML;
                    document.getElementById('month-archive').style.display = "block";
                })
            })

            document.getElementById('header-table-archive').getElementsByTagName('h1')[0].innerHTML = item.innerHTML;
            document.getElementById('table-main-archive').style.display = "flex";
        })
    })
    
}

function appendMemberDataToIndex(memberData) {
    var table = document.getElementById('data-output');
    for (let i = 0; i < memberData.length; i++) {
        //loop to go through memberdata and append members to table
        //checkboxes could also be set here?
        
    };
};

document.querySelectorAll('.month-block').forEach((item) => {
    item.addEventListener('click', () => {
        popup.style.display = "block";
        document.getElementById('popup-month').innerHTML = item.innerHTML;
        document.getElementById('popup-member').innerHTML = member;
    })
})

document.getElementById('popup-close').onclick = () => {
    popup.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}

document.getElementById('save').onclick = () => {
    popupSave.style.display = "block";
}

document.getElementById('cancel').onclick = () => {
    popupCancel.style.display = "block";
}
