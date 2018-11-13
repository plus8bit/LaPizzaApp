
function something(){
    
    var x = window.localStorage.getItem('nn');

    x = x * 1 + 1;
    
    window.localStorage.setItem('nn', x);

    alert(x);
}

function add_to_cart(id){

    var key = 'product_' + id;

    var x = window.localStorage.getItem(key);
    x = x * 1 + 1;
    window.localStorage.setItem(key, x);

    //show number of items in the cart
    alert('Items in your cart: ' + number_of_items());
}

function number_of_items() {
    var cnt = 0;

    for(var i = 0; i < window.localStorage.length; i++){

        var key = window.localStorage.key(i); // get key
        var value = window.localStorage.getItem(key); // get value
    
        if(key.indexOf('product_') == 0){
            cnt = cnt + value * 1;
        }
        
    }
    return cnt;
    
}