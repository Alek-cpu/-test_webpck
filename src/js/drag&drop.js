const dragNDrop = () => {
    const cardContainer = document.querySelector('.drag-drop-wrapper');
    const cards = cardContainer.querySelectorAll('.drag-drop-wrapper > .card');
    const statusEvent = document.querySelector('.drag-drop-wrapper');
    const cells = statusEvent.querySelectorAll('.drag-drop-wrapper > .card > .event-wrap > .identical-inner > .status-event > .edit-control > .deleted');



    function removeCard () {
        for ( let i = 0; i < cards.length; i++ ) {
            for (let j = 0; j < cells.length; j++) {
                cells[i].addEventListener('click', function (e) {
                    if ( i == j ) {
                        cards[i].remove();
                    }
                })
            }
        }
    }
    removeCard();

}
dragNDrop();

// THIS_THIS






