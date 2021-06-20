import styled, { css } from 'styled-components'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const RemoveButton = styled.div`
    margin-right: 70px;
    cursor: pointer;
`

export const TextContainer = styled.span`
    width: 30%;

    ${props => props.quantity && 
    css`
    display: flex;

    span {
        margin: 0 10px;
    }
    
    div {
        cursor: pointer;
    }
    `
    }
`;