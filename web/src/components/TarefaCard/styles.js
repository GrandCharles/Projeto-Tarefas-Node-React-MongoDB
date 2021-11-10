import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 160px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;   
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: ${props => props.concluido ? 0.5 : 1};

    img {
        width: 50px;
        height: 55px;
    }

    &:hover {
        opacity: 0.5;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BottonCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #EE6B26;
        font-weight: bold;
        font-size: 12px;
    }

    span {
        color: #707070;
        font-weight: bold;
        font-size: 12px;
    }
`

