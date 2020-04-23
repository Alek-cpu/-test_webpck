    const cards = document.querySelectorAll('.card');
    const cell = document.querySelector('.drag-drop-wrapper');
    let buf;

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
        if (this.firstChild){
            this.before(buf)
        }
        else if (this === cell.lastChild){
            this.after(buf)
        }
        else if (buf === cell.lastChild){
            this.before(buf)
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


