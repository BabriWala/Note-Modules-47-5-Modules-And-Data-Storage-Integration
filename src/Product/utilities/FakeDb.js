
const addToDb = (id) => {

    let shoppingCart = {};

    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    
    // else{
    //     shoppingCart = {}
    // }


    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

/*     if(localStorage.getItem(id) !== null){
        const value = localStorage.getItem(id);
        // console.log(value)
        const stringToNumber = parseInt(value);
        console.log(stringToNumber);
        localStorage.setItem(id, stringToNumber + 1)
    }
    else{
        localStorage.setItem(id, 1)
    } */
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shoppingCart');
    const shoppingCart = JSON.parse(storedCart);
    if(storedCart){
        if(id in shoppingCart){
            delete shoppingCart[id];
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

        }
    }
}


const deleteShoppingCart = () =>{
    localStorage.removeItem('shoppingCart');
}

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}


export {addToDb, removeFromDb, deleteShoppingCart, getTotalPrice as getTotal};