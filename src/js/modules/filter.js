const filter = () => {
    const menu = document.querySelector('.portfolio-menu'), 
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType.length) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    items.forEach(item => {
        item.addEventListener('click', (e) => {
            const selector = wrapper.querySelectorAll(`.${e.target.classList[0]}`);
            typeFilter(selector);
        });
    });


    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active')); 
            target.classList.add('active');
        }
    });


};

export default filter;