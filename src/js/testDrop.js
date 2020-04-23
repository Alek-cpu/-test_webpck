    const cards = document.querySelectorAll('.card');
    const cell = document.querySelector('.drag-drop-wrapper');
    let buf;
    let keys = Object.keys(cards); //получаем ключи объекта в виде массива
    console.log(cards[keys[0]]); // первый элемент
    console.log(cards[keys[keys.length - 1]]); //последний элемент

    const dragStart = function () {
        buf = this;
        setTimeout(() => {
            this.classList.add('hide');
        }, 0);
    };

    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (e) {
        e.preventDefault();
    };

    const dragDrop = function () {
        console.log('droped');

            if ( this === cards[keys[0]] ) {
                this.before(buf);
            }
            else {
                this.after(buf);
            }

    };

    cards.forEach((card, i) => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
        card.addEventListener('dragover', dragOver);
        card.addEventListener('drop', dragDrop);
        card.addEventListener('dragover', dragOver);
    });


