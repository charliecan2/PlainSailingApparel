import React from 'react';
import { useDispatch } from 'react-redux'
import {
    CollectionItemContainer,
    ImageContainer,
    CustomButtonContainer,
    CollectionFooter,
    NameContainer,
    PriceContainer
} from './CollectionItem.styles'
import { addCartItem } from '../../redux/cart/cartSlice';

function CollectionItem({ item }) {
    const dispatch = useDispatch();

    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <ImageContainer className='image' imageUrl={imageUrl}/>
            <CollectionFooter>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooter>
            <CustomButtonContainer className="customButton" onClick={() => dispatch(addCartItem(item))} inverted>Add to Cart</CustomButtonContainer>
        </CollectionItemContainer>
    )
}

export default CollectionItem;
