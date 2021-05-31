import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { useDispatch } from 'react-redux'
import './CollectionItem.scss';
import { addCartItem } from '../../redux/cart/cartSlice';

function CollectionItem({ item }) {
    const dispatch = useDispatch();

    const { name, price, imageUrl} = item;

    return (
        <div className='collectionItem'>
            <div className='image' 
            style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collectionFooter'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addCartItem(item))} inverted>Add to Cart</CustomButton>
        </div>
    )
}

export default CollectionItem;
