import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

//     // btn.addEventListener('click', () => {
//     //     cards.forEach(card => {
//     //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
//     //         card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
//     //     });
//     //     btn.remove();
//     // });

    btn.addEventListener('click', function() {
        getResource('http://localhost:3000/styles')
        .then(res => createCards(res))
        .catch(() => failCards());

        this.remove();
    }); 


    function failCards() {
        const failDiv = document.createElement('div');
        failDiv.classList.add('status');
        failDiv.textContent = `Произошла ошибка :( 
                                Повторите позже`;
                                
        failDiv.style.cssText = 'width: 330px; text-align: center; font-size:220%; color:red; margin:0 auto';
        document.querySelector(wrapper).append(failDiv);

    }


    function createCards(response) {
        response.forEach(({src, title, link}) => {
            const card = document.createElement('div');
            card.classList.add('animated', 'fadeInDown', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                    <div class="styles-block">
                        <img src=${src} alt"style">
                        <h4>${title}</h4>
                        <a href="${link}">Подробнее</a> 
                    </div>`;

            document.querySelector(wrapper).append(card);
        });
    }
};



export default showMoreStyles;