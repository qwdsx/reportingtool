
const popup = document.getElementById('popup');
let member = "";
let group = "";

//document.addEventListener( "DOMContentLoaded", fetchData, false );

async function fetchMemberData() {
    const res = await fetch("https://raw.githubusercontent.com/qwdsx/reportingtool/main/groups.json");
    const memberData = await res.json();
    appendDataToArchive(memberData);
}

fetchMemberData();

function appendDataToArchive(data) {
    let list = document.getElementById('group-list-archive');
    for (let i = 0; i < data.groups.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = data.groups[i].name;
        list.appendChild(li);
    }

    list.childNodes.forEach((item) => {
        item.addEventListener('click', () => {

            list.childNodes.forEach((item2) => {
                if (item2.style === undefined) return;
                item2.style.backgroundColor = "transparent";
            })
            
            item.style.backgroundColor = "#d1d5db";

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
                    list2.childNodes.forEach((item2) => {
                        if (item2.style === undefined) return;
                        item2.style.backgroundColor = "transparent";
                    })
                    
                    item.style.backgroundColor = "#d1d5db";
                    member = item.innerHTML;
                    document.getElementById('month-archive').style.display = "block";
                })
            })

            document.getElementById('header-table-archive').getElementsByTagName('h1')[0].innerHTML = item.innerHTML;
            document.getElementById('table-main-archive').style.display = "flex";
        })
    })
    
}

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