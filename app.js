const elements = {
    sideMenu: document.querySelector("aside"),
    profileBtn: document.querySelector("#profile-btn"),
    themeToggler: document.querySelector(".theme-toggler"),
    nextDay: document.getElementById('nextDay'),
    prevDay: document.getElementById('prevDay'),
    header: document.querySelector('header'),
    tableBody: document.querySelector('table tbody'),
    timetableHeading: document.querySelector('.timetable div h2')
};
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const daysData = { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
elements.profileBtn.onclick = () => elements.sideMenu.classList.toggle('active');
window.onscroll = () => {
    elements.sideMenu.classList.remove('active');
    elements.header.classList.toggle('active', window.scrollY > 0);
};
elements.themeToggler.onclick = () => {
    document.body.classList.toggle('dark-theme');
    elements.themeToggler.querySelectorAll('span').forEach(span => span.classList.toggle('active'));
};
const setData = (day) => {
    elements.tableBody.innerHTML = '';
    elements.timetableHeading.textContent = dayList[day];
    daysData[dayList[day]].forEach(sub => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${sub.time}</td>
            <td>${sub.roomNumber}</td>
            <td>${sub.subject}</td>
            <td>${sub.type}</td>
        `;
        elements.tableBody.appendChild(tr);
    });
};
let day = new Date().getDay();
const timeTableAll = () => {
    document.getElementById('timetable').classList.toggle('active');
    setData(day);
    elements.timetableHeading.textContent = "Today's Timetable";
};
elements.nextDay.onclick = () => {
    day = day < 6 ? day + 1 : 0;
    setData(day);
};
elements.prevDay.onclick = () => {
    day = day > 0 ? day - 1 : 6;
    setData(day);
};
setData(day);
elements.timetableHeading.textContent = "Today's Timetable";
