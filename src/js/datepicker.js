//DOM переменные
const datePicker = document.querySelector('.calendar');
const dateElement = document.querySelector('.nameMonthWrapper');
const mthElements = document.querySelector('.nameMonth');
const nextMthElement = document.querySelector('.rightArrow');
const preMthElement = document.querySelector('.leftArrow');
const daysElements = document.querySelector('.days');

//Переменная массив - месец
const months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];

//метод принимающий дату
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mthElements.textContent = months[month] + ' ' + year;
countDayMonth();


//Слушатель событий - calendar
datePicker.addEventListener('click', toggleDatePicker);
nextMthElement.addEventListener('click', toggleNextMonth);
preMthElement.addEventListener('click', togglePreMonth);

//function
function toggleDatePicker (e) {
    console.log(e.path);
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
    let countDays = 31;

    if (month == 1) {
        countDays = 28;
    }

    for ( let i = 0; i < countDays; i++ ) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i + 1;

        if ( selectedDay == (i + 1) && selectedYear == year && selectedMonth == month ) {
            dayElement.classList.add('blue');
        }


        daysElements.appendChild(dayElement);
    }

}


// function checkEventPathClass(path, selector) {
//     for (let i = 0; i < path; i++) {
//         if ( path[i].classList && path[i].classList.contains(selector) ) {
//             return true;
//         }
//     }
//     return false;
// }