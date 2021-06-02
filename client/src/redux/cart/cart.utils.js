export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItems => cartItems.id === cartItemToAdd.id
    )

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const filteredItems = (cartItems, cartItemToDelete) => {
    return cartItems.filter(
        cartItem => cartItem.id !== cartItemToDelete
    )
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingcartItem = cartItems.find(
        cartItems => cartItems.id === cartItemToRemove.id
    )

    if (existingcartItem.quantity === 1){
        return cartItems.filter(
            cartItem => cartItem.id !== cartItemToRemove.id
        )
    }

    return cartItems.map(
        cartItem => cartItem.id === cartItemToRemove.id ?
        { ...cartItem, quantity: cartItem.quantity - 1} :
        cartItem
    )
}