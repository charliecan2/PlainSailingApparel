import React from 'react';
import { useSelector } from 'react-redux'

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import { selectCollections } from '../../redux/shop/shop.selectors';

function Shop() {
    
    const shopData = useSelector(selectCollections);

    return (
        <div className="shopPage">
            {
                shopData.map(({id, ...otherCollectionProps })=> {
                    return <CollectionPreview key={id} {...otherCollectionProps}/>
                })
            }
        </div>
    )
}

export default Shop
