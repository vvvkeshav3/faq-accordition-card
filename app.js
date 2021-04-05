function clickedFunction(event){ 
    const element = event.target.parentElement.parentElement.parentElement;
    const extras = document.querySelectorAll('.extra');
    const lis = document.querySelectorAll('ul ul li:first-of-type');
    for(let li of lis){
        if(li!=element.children[0]){
            li.classList.remove('bold');
        }
    }

    for(let li of extras){
        if(li!=element.children[1]){
            li.classList.remove('display');
        }
    }
    element.children[1].classList.toggle('display');
    element.children[0].classList.toggle('bold');
}