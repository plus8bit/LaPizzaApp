
function something(){
    
    let x = window.localStorage.getItem('n');
    
    window.localStorage.setItem('n', 777);

    alert(x);
}

