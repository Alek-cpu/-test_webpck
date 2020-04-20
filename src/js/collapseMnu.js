const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.toggle-wrap .toggle');
const svgColor = document.querySelector('.toggle .fil__svg');
const profileMnuItem = document.querySelector('nav.mnu');
const items = profileMnuItem.querySelectorAll('nav.mnu > a > div.mnu-item > div.mnu-item__name');
const profileContainer = document.querySelector('div.sidebar-container');
const SetItems = profileContainer.querySelectorAll('.setItem > .mnu-item > .mnu-item__name');
const profileInfoDiv = document.querySelector('.profile-block');
const profileInfoElem = profileInfoDiv.querySelectorAll('.profile-block > .profileTxtElem');
const containerSwitch = document.querySelector('.container');
const sidebarInner = document.querySelector('.profile, .mnu-item');
const shortName = document.querySelector('div.name span.kit');
const sidebarInnerCheck = document.querySelector('.sidebar-name-inner');

toggleSidebar.addEventListener('click', toggleChecked);

function toggleChecked (e) {

    svgColor.classList.toggle( 'checkedToggle');
    sidebar.classList.toggle('goSidebar');

    items.forEach((elem) => {
        elem.classList.toggle('profileMnuItem');
    });

    SetItems.forEach((elemSetItem) => {
        elemSetItem.classList.toggle('profileMnuItem');
    });
    profileInfoElem.forEach((txtElem) => {
        txtElem.classList.toggle('profileMnuItem');
    });

    containerSwitch.classList.toggle('containerToggle');
    sidebarInner.classList.toggle('sidebarInner');
    shortName.classList.toggle('clearkit');
    sidebarInnerCheck.classList.toggle('sidebarInnerCheck');
}