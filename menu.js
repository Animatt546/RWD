const kropki = document.getElementsByClassName('nav-menu');
const pola = document.getElementsByClassName('poster');
for(let i=0; i<kropki.length;i++){
    kropki[i].addEventListener('click', function(){
        for(pole of pola) {
            if(i==0){
                pole.classList.remove('hidden')
            }
            else{
                if(kropki[i].id == pole.getAttribute('data-category')){
                    pole.classList.remove('hidden')
                }
                else{
                    pole.classList.add('hidden')
    
                }
            }
        };
    });
};