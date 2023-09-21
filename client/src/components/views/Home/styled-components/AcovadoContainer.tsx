import styled from 'styled-components';
export const AvocadoContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    max-width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        padding: 0 40px;
        padding: 0 10vw;
    }
`;
