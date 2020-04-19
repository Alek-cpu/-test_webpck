const dragNDrop = () => {
    const cardContainer = document.querySelector('.drag-drop-wrapper');
    const cards = document.querySelectorAll('.event-wrap');
    const cells = document.querySelectorAll('.card');
    const basket = document.querySelectorAll('.drag-drop-wrapper > .card > .event-wrap > .identical-inner > .status-event > .edit-control > .deleted');



    function removeCard () {
        for ( let i = 0; i < basket.length; i++ ) {
            for (let j = 0; j < cards.length; j++) {
                cells[i].addEventListener('click', function (e) {
                    if ( i == j ) {
                        cards[j].remove();
                    }
                })
            }
        }
    }
    removeCard();

}
dragNDrop();

// THIS_THIS






