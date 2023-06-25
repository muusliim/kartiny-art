const modals = () => {

    let btnPressed;
    
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              gift = document.querySelector('.fixed-gift'),
              scroll = calcScroll();

        trigger.forEach (item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (destroy) {
                    item.remove();
                }

                btnPressed = true;

                windows.forEach(item => {
                    item.style.display='none';
                });

                modal.style.display = 'block';
                modal.classList.add('animated', 'fadeIn');

                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                gift.style.marginRight = `${scroll - 0.5}px`;
                
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display='none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
            gift.style.marginRight = `0px`;

        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display='none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                gift.style.marginRight = `0px`;

            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = 'block'; 
                document.body.style.overflow = 'hidden';

                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            
            }
        }, time);
    }

    function calcScroll() {
        let divScroll = document.createElement('div');
        divScroll.style.cssText = "width: 50px; overflow-y: scroll; visibility: hidden;";
        document.body.append(divScroll);
        let scrollWidth = divScroll.offsetWidth - divScroll.clientWidth;
        divScroll.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                document.querySelector(selector).click();
            }
        });
    }


    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByTime('.popup-consultation', 6000000);
    openByScroll('.fixed-gift');

};

export default modals;