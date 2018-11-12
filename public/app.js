
function something(){
    
    let x = window.localStorage.getItem('nn');

    x = x * 1 + 1;
    
    window.localStorage.setItem('nn', x);

    alert(x);
}

function add_to_card(id) {
    alert("You added pizza with id: " + id);
}