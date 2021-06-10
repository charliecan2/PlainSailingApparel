import React from 'react';
import { useSelector } from 'react-redux'
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import './CollectionsOverview.scss'

function CollectionsOverview() {

    const collections = useSelector(selectCollections)

    return (
        <div className='collectionsOverview'>
            {
                collections.map(({id, ...otherCollectionProps })=> {
                    return <CollectionPreview key={id} {...otherCollectionProps}/>
                })
            }
        </div>
    )
}

export default CollectionsOverview
