
//PopUp Modal Sccript
const popupMsg = document.querySelector('.modal-container');
const closePopupMsg = document.querySelector('.modal-content span');

window.addEventListener('load',function(e){
popupMsg.classList.add('show-modal-content');
popupMsg.childNodes[1].classList.add('show-modal-content')
})

closePopupMsg.addEventListener('click',function(){
popupMsg.classList.remove('show-modal-content');
popupMsg.childNodes[1].classList.remove('show-modal-content')
})