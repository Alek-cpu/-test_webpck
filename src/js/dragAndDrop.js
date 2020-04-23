const dragNDrop = () => {
    const wrap = document.querySelectorAll('.card');
    const cards = document.querySelectorAll('.card');
    const baskets = document.querySelectorAll('.deleted');

    function removeCard () {
        cards.forEach((card, j) => {
            baskets.forEach((basket, i) => {
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