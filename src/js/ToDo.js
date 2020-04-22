const mainCheckbox = document.querySelector('#checkbox');
const childCheckbox = document.querySelectorAll('.chield');
const listInfo = document.querySelectorAll('.hideElement');
const listInfoHide = document.querySelectorAll('.hide');
const selectedInfo = document.querySelector('.selectedInfo');
let countChecked = 0;

const checkAllSelected = (e) => {
    countChecked = 0;
    if (mainCheckbox.checked) {
        childCheckbox.forEach((checkbox) => {
            checkbox.checked = true;
            countChecked++;
        });
        console.log(countChecked);
    }
    else {
        childCheckbox.forEach((checkbox) => {
            checkbox.checked = false;
            countChecked = 0;
        });
        console.log(countChecked);
    }
    selectedInfo.innerHTML = `${countChecked} selected`;
    hideElements();
};

const checkboxSelect = function () {
    if (this.checked) {
        countChecked++;
    } else {
        countChecked--;
    }
    selectedInfo.innerHTML = `${countChecked} selected`;
    hideElements();
};

const hideElements = function () {
    listInfo.forEach((element) => {

        if (countChecked) {
            element.classList.add('hide');
            listInfoHide.forEach((elementhide) => {
                elementhide.classList.remove('hide');
            });
        }
        else {
            element.classList.remove('hide');
            listInfoHide.forEach((elementhide) => {
                elementhide.classList.add('hide');
            });
        }

    });
}

childCheckbox.forEach((checkbox, i) => {
    checkbox.addEventListener('change', checkboxSelect);
});

mainCheckbox.addEventListener('change', checkAllSelected);