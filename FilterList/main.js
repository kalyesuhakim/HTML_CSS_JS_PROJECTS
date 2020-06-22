
const search = document.querySelector('.search');

search.addEventListener('keyup',filterNames);

function filterNames(){
    const sarchValue = document.querySelector('.search').value.toUpperCase();
    const ul = document.querySelector('.collection');
    const li = ul.querySelectorAll('li.item')

    for(let i = 0; i < li.length; i++){
        const a = li[i].getElementsByTagName('a')[0];

        if(a.innerHTML.toUpperCase().indexOf(sarchValue) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }

}
