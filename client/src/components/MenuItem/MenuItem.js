import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
    MenuItemContainer, 
    BackgroundImage,
    ContentContainer,
    TitleContainer,
    SubtitleContainer
 } from './MenuItem.styles'

function MenuItem({title, imageUrl, size, history, linkUrl, match}) {
    return (
        <MenuItemContainer className={`${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage 
            className='backgroundImage' 
            imageUrl={imageUrl}
            />
            <ContentContainer>
                <TitleContainer>{title}</TitleContainer>
                <SubtitleContainer className='content'>Shop Now</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);
