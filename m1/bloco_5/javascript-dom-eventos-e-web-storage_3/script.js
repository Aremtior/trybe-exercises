function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDays = document.getElementById('days');
  for (let i = 0; i < dezDaysList.length; i++) {
    const day = dezDaysList[i];
    const monthListItem = document.createElement('li');
    monthListItem.innerHTML = day;
    monthListItem.className = 'day';
    
    if (day == 24 || day == 25 || day == 31) {
      monthListItem.className += ' holiday';
    }
    
    if (day == 4 || day == 11 || day == 18 || day == 25) {
      monthListItem.className += ' friday';
    }
    
    monthDays.appendChild(monthListItem);
  }
}

createDays();

function holidaysNFridays(txtBtn) {
  btnsCtn = document.querySelector('.buttons-container');
  btnHolidays = document.createElement('button');
  btnHolidays.innerHTML = txtBtn;
  if (txtBtn == 'Feriados') {
    btnHolidays.id = 'btn-holiday';
  } else {
    btnHolidays.id = 'btn-friday';
  }
  
  btnsCtn.appendChild(btnHolidays);
}

holidaysNFridays('Feriados');
holidaysNFridays('Sexta-feira');

function bgHolidays() {
  let holidays = document.querySelectorAll('.holiday');
  if (clickAgain) {
    for (const holiday of holidays) {
      holiday.style.backgroundColor = 'lightgray';
    }
    clickAgain = false;
  } else {
    for (const holiday of holidays) {
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    }
    clickAgain = true;
  }
}
let btnHoliday = document.getElementById('btn-holiday');
btnHoliday.addEventListener('click', bgHolidays);
let clickAgain = true;

function fridays() {
  let fridaysDays = document.querySelectorAll('.friday');
  if (clickFri) {
    for (const friday of fridaysDays) {
      fridaysOfDec.push(friday.innerHTML);
      friday.innerHTML = 'Sexta-feira';
    }
    clickFri = false;
  } else {
    fridaysOfDecCount = 0;
    for (const friday of fridaysDays) {
      friday.innerHTML = fridaysOfDec[fridaysOfDecCount];
      fridaysOfDecCount++;
    }
    fridaysOfDec = [];
    clickFri = true;
  }
}
let btnFriday = document.getElementById('btn-friday');
btnFriday.addEventListener('click', fridays);
let clickFri = true;
let fridaysOfDec = [];

function zoom(eventTarget) {
  let targetDay = eventTarget.target;
  targetDay.style.fontSize = '40px';
}
function zoomLeave(eventTarget) {
  let targetDay = eventTarget.target;
  targetDay.style.fontSize = '20px';
}
let dayZoom = document.getElementsByClassName('day');
for (const day of dayZoom) {
  day.addEventListener('mouseover', zoom);
  day.addEventListener('mouseleave', zoomLeave);
}

function addTask(task) {
  let myTasks = document.querySelector('.my-tasks');
  let taskItem = document.createElement('span');
  taskItem.innerHTML = task;
  myTasks.appendChild(taskItem);
}
addTask("Study English <br>");
addTask("Study Sanskrit");