const elementWrapper = document.querySelector('.wrapper')
const elementsText = [...document.querySelectorAll('.text')]

function onClick(element) {
	element.classList.add('hide');
};

function onKeydown(e) {
    if(e.code === 'Space') {
        elementWrapper.textContent = '';
    }
};

function addClicks(arrayElements, functionClick) {
    arrayElements.forEach((item) => {
        item.addEventListener('click', (e) => {
            functionClick(e.target);
        });
    })
};

window.addEventListener('load', () => {
    addClicks(elementsText, onClick);
    
    document.addEventListener('keydown', onKeydown);
});
