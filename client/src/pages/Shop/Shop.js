import React, { useState } from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

function Shop() {
    const [shopData] = useState(SHOP_DATA);

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
