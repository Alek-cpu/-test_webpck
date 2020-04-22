const datePicker = document.querySelector('.calendar');
const dateElement = document.querySelector('.nameMonthWrapper');
const mthElements = document.querySelector('.nameMonth');
const nextMthElement = document.querySelector('.rightArrow');
const preMthElement = document.querySelector('.leftArrow');
const daysElements = document.querySelector('.days');

const months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

const selectedDay = day;
const selectedMonth = month;
const selectedYear = year;

mthElements.textContent = months[month] + ' ' + year;
countDayMonth();

datePicker.addEventListener('click', toggleDatePicker);
nextMthElement.addEventListener('click', toggleNextMonth);
preMthElement.addEventListener('click', togglePreMonth);

function toggleDatePicker (e) {
    dateElement.classList.toggle( 'active');
}

function toggleNextMonth (e) {
    month++;
    if ( month > 11 ) {
        month = 0;
        year++;
    }
    mthElements.textContent = months[month] + ' ' + year;
    countDayMonth();
}

function togglePreMonth (e) {
    month--;
    if ( month < 0 ) {
        month = 11;
        year--;
    }
    mthElements.textContent = months[month] + ' ' + year;
    countDayMonth();
}

function countDayMonth (e) {
    daysElements.innerHTML = '';
    let i = 0;
    let countDays = 31;

    if (month % 2 !== 0 ) {
        countDays = 30;
    }
    if (month === 1) countDays = 28;
    if (month === 11) countDays = 31;


    while ( i < countDays) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i + 1;

        if ( selectedDay === (i + 1) && selectedYear === year && selectedMonth === month ) {
            dayElement.classList.add('blue');
        }
        daysElements.appendChild(dayElement);
        i++;
    }
}