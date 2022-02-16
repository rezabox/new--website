var header=document.querySelector('.indecator').children;
var ul=document.querySelector('.items').children;
for(let i = 0; i < header.length; i++){
    header[i].onclick = function(){
        for(let x = 0; x < header.length; x++){
            header[x].classList.remove('active');
        }
        header[i].classList.add('active');
        const display= this.getAttribute('data-filter');
        for(let z = 0; z < ul.length; z++){
            ul[z].style.display = 'none';

            if(ul[z].getAttribute('data-category') == display || display == 'all'){
                ul[z].style.display = 'block';
            }
        }
    }
}



