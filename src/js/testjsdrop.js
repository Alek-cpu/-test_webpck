const dDrope = () => {
    const cards = document.querySelectorAll('.event-wrap');
    const cells = document.querySelectorAll('.card');

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');
        }, 0)
    };

    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (e) {
        console.log('over');
        let cellWrap;
        // cellWrap.append();

            e.preventDefault();
    };

    const dragEnter = function () {
        console.log('enter');
        // this.classList.add('hovered');
        //при входе на ячейку наша
        //карточка, на которую наводим переходит в буфер
        //ячейка очищается, карточка, которую держим встает в переменную
        //прошлой карточки, а предыдущая ячейка принимает
        //значение ушедшей с прежнего места карточки
    };

    const dragLeave = function () {
        console.log('leave');
        this.classList.remove('hovered');
    };



    const dragDrop = function () {
        console.log('drop');
        setTimeout(() => {
            this.classList.remove('hide');
        }, 0)

        this.append(cards[0]);//ячейки принимает в себя
    };


    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });



    cards.forEach((card) => {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });
 }
 dDrope();
