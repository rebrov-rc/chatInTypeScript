var container = document.querySelector('.center-wrap');
// ===================================================
// const 
// ===================================================
var timeOfDate = new Date();
var hours = timeOfDate.getHours();
var min = timeOfDate.getMinutes();
var timeN = hours + ':' + min;
// console.log(timeN);
// ==================================================
var iUp = [
    { time: timeN, name: 'Tom', message: 'Hi, jkldd hfjk jd bc' },
    { time: timeN, name: 'Tima', message: 'Hi, jkldfkmdlfkgdflgd hfjk jd bc' },
    { time: timeN, name: 'John', message: 'Hi, jkldd hfjk jd bc' },
    { time: timeN, name: 'Kat', message: 'Hi, jkldd hfjk jd bc' },
    { time: timeN, name: 'Krice', message: 'Hi, jkldd hfjk jd bc' },
    { time: timeN, name: 'Face', message: 'Hi, jkldd hfjk jd bc' }
];
for (var i = 0; i < iUp.length; i++) {
    console.log(iUp[i].name);
    // const wrapForMessage: HTMLElement = document.createElement('div');
    container.innerHTML = container.innerHTML + ("<div class='mainWrap'><div class='time'>" + iUp[i].time + "</div>\n    <div ><div>" + iUp[i].name + "</div><div>" + iUp[i].message + "</div></div>\n    </div>");
}
var main = document.querySelectorAll('.mainWrap');
var tm = document.querySelectorAll('.time');
for (var n = 0; n < main.length; n++) {
    main[n].style.width = '500px';
    main[n].style.display = 'flex';
    main[n].style.border = 'solid 1.5px';
    tm[n].style.display = 'flex';
    tm[n].style.justifyContent = 'center';
    tm[n].style.alignItems = 'center';
}
