
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
    popupSave.style.display = "block";
    setTimeout(() => {
        popupSave.style.display = "none";
    }, 3000);
}

document.getElementById('cancel').onclick = () => {
    popupCancel.style.display = "block";
}

async function fetchMemberData() {
    const res = await fetch("https://raw.githubusercontent.com/qwdsx/reportingtool/main/groups.json");
    const memberData = await res.json();
    appendDataToArchive(memberData);
}

fetchMemberData();

function appendDataToArchive(data) {
    let list = document.getElementById('group-list-index');
    for (let i = 0; i < data.groups.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = data.groups[i].name;
        list.appendChild(li);
    }

    list.childNodes.forEach((item) => {
        item.addEventListener('click', () => {
            document.getElementById('buttons-row-index').style.display = "block";
            list.childNodes.forEach((item2) => {
                if (item2.style === undefined) return;
                item2.style.backgroundColor = "transparent";
            })
            
            item.style.backgroundColor = "#d1d5db";

            let list2 = document.getElementById('data-output');
            
            while (list2.firstChild) {
                list2.removeChild(list2.firstChild);
            }

            const findCorrectGroup = data.groups.find(e => e.name === item.innerHTML);

            for (let i = 0; i < findCorrectGroup.members.length; i++) {
                let tr = document.createElement('tr');
                tr.innerHTML = findCorrectGroup.members[i].name;

                let tdsl = document.createElement('td');
                let inputsl = document.createElement('input');
                inputsl.setAttribute('class', 'selectall');
                inputsl.setAttribute('type', 'checkbox');
                inputsl.setAttribute('name', 'selectall');
                tdsl.appendChild(inputsl);
                tr.appendChild(tdsl);

                inputsl.addEventListener('click', () => {
                    document.getElementsByName(findCorrectGroup.members[i].name).forEach((item) => {
                        if (item.checked === false && inputsl.checked == true) {
                            item.checked = true;
                        } else if (item.checked === true && inputsl.checked == false) {
                            item.checked = false;
                        }
                    })
                })

                for (let j = 0; j < 7; j++) {
                    let td = document.createElement('td');
                    let input = document.createElement('input');
                    input.setAttribute('type', 'checkbox');
                    input.setAttribute('name', findCorrectGroup.members[i].name);
                    td.appendChild(input);
                    tr.appendChild(td);
                }

                list2.appendChild(tr);                
            }

            document.getElementById('header1-table-index').getElementsByTagName('h1')[0].innerHTML = item.innerHTML;
            document.getElementById('checkbox-table').style.display = "block";
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
