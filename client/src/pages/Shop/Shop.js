import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../collection/Collection';

function Shop({match}) {
    console.log(match)
    return (
        <div className="shopPage">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}

export default Shop
