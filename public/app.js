
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
    update_orders();
}

function update_orders() {
    var orders = get_orders();
    $('#orders_input').val(orders);
    
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


function get_orders() {
    var orders = '';

    for(var i = 0; i < window.localStorage.length; i++){

        var key = window.localStorage.key(i); // get key
        var value = window.localStorage.getItem(key); // get value
    
        if(key.indexOf('product_') == 0){
            
            orders += key + '=' + value + ',';
        }
        
    }
    return orders;
    
}