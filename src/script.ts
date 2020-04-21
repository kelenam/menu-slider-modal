const toggle: any = document.getElementById('toggle');
const modal: any = document.getElementById('modal');
const closeState: any = document.getElementById('closeState');
const openState: any = document.getElementById('openState'); 

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav'); 
});

openState.addEventListener('click', () => 
    modal.classList.add('show-modal')
);

closeState.addEventListener('click', () => 
    modal.classList.remove('show-modal')
);

window.addEventListener('click', e => 
    e.target === modal ? modal.classList.remove('show-modal') : false
)
