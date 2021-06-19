import React from 'react'
import { 
    CollectionPreviewContainer, 
    CollectionTitle, 
    PreviewContainer 
} from './CollectionPreview.styles'

import CollectionItem from '../CollectionItem/CollectionItem';

function CollectionPreview({title, items}) {
    return (
        <CollectionPreviewContainer>
            <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
            <PreviewContainer>
                {items
                .filter((item, idx) => idx < 4)
                .map((item) => {
                    return <CollectionItem key={item.id} item={item} />
                })
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;
