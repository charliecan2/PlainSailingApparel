import React from 'react';
import { useSelector } from 'react-redux'
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionsOverviewContainer } from './CollectionsOverview.styles'

function CollectionsOverview() {

    const collections = useSelector(selectCollections)

    return (
        <CollectionsOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps })=> {
                    return <CollectionPreview key={id} {...otherCollectionProps}/>
                })
            }
        </CollectionsOverviewContainer>
    )
}

export default CollectionsOverview
