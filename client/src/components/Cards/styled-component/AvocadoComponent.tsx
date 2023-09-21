import styled from 'styled-components';

export const AvocadoComponent = styled.div`
    min-width: 230px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    box-shadow: 0 0 6px #00000069;
    padding: 8px;
    flex-grow: 1;
    flex: 1;
    max-width: 300px;
    transition: 200ms ease-in;
    &:hover {
        transition: 100ms ease-out;
        transform: translateY(-5px);
        box-shadow: 0 0 6px #000000a1;
        z-index: 1;
    }
    .avocado__bottom {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        align-items: center;
        .avocado__text-price {
            font-weight: bold;
        }
    }
    button {
        border: none;
        background: transparent;
        display: inline-flex;
        width: 30px;
        height: 30px;
        background: #1fc6b2;
        border-radius: 500px;
        display: grid;
        place-content: center;
        color: #252525;
        cursor: pointer;
    }
`;
