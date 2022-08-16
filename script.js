'use strict';

window.onload = function(){
    alert("Hi! I'm a Poet Modal Window🥰. Have fun reading");
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseMoal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);


btnCloseMoal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});