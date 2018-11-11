
function something(){
    
    let x = window.localStorage.getItem('nn');

    x = x * 1 + 1;
    
    window.localStorage.setItem('nn', x);

    alert(x);
}

