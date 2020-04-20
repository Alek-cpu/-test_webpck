const dragNDrop = () => {
    const cards = document.querySelectorAll('.card');
    const baskets = document.querySelectorAll('.deleted');

    function removeCard () {
        baskets.forEach((basket, i) => {
            cards.forEach((card, j) => {
                basket.addEventListener('click', function (e)  {
                    if ( i === j ) {
                        cards[i].remove();
                    }
                });
            });
        });
    }
    removeCard();
}
dragNDrop();