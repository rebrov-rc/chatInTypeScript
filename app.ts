const container: HTMLElement = document.querySelector('.center-wrap') as HTMLElement;
// ===================================================
// const 
// ===================================================
let timeOfDate: any = new Date();
let hours: number = timeOfDate.getHours();
let min: number = timeOfDate.getMinutes();

let timeN:  number | string = hours + ':' + min;
// console.log(timeN);
// ==================================================

const iUp: {time: number | string, name: string, message: string}[] = [
    {time: timeN, name: 'Tom', message: 'Hi, jkldd hfjk jd bc' },
    {time: timeN, name: 'Tima', message: 'Hi, jkldfkmdlfkgdflgd hfjk jd bc' },
    {time: timeN, name: 'John', message: 'Hi, jkldd hfjk jd bc' },
    {time: timeN, name: 'Kat', message: 'Hi, jkldd hfjk jd bc' },
    {time: timeN, name: 'Krice', message: 'Hi, jkldd hfjk jd bc' },
    {time: timeN, name: 'Face', message: 'Hi, jkldd hfjk jd bc' }
];


for (let i = 0; i < iUp.length; i++ ) {

    console.log(iUp[i].name);
    // const wrapForMessage: HTMLElement = document.createElement('div');
    container.innerHTML = container.innerHTML + `<div class='mainWrap'><div class='time'>${iUp[i].time}</div>
    <div ><div>${iUp[i].name}</div><div>${iUp[i].message}</div></div>
    </div>`;
}

let main: HTMLElement = document.querySelectorAll('.mainWrap');
let tm: HTMLElement = document.querySelectorAll('.time');
for(let n = 0; n < main.length; n++){
    main[n].style.width = '500px';
    main[n].style.display = 'flex';
    main[n].style.border = 'solid 1.5px';
    tm[n].style.display = 'flex';
    tm[n].style.justifyContent = 'center';
    tm[n].style.alignItems = 'center';
}