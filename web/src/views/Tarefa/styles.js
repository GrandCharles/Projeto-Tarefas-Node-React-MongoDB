import styled from 'styled-components';

// Recebe uma div de styled
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`

export const TypeIcons = styled.div`
    width: 100%;
    margin-top: 1px;
    display: flex;
    justify-content: center;

    img {
        width: 50px;
        height: 50px;
        margin: 12px;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
        }
    }

    .inativo {
        opacity: 0.5;
    }

    button {
        border: none;
        background: none;
    }

    li { 
        list-style-type: none; 
    }
`

export const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    span {
        color: #707070;
        margin: 5px 0;
    }

    input  {
        font-size: 16px;
        padding: 10 px;
        border: none;
        border-bottom: 1px solid #EE6B26;
    }

    img {
        width: 15px;
        height: 15px;
        position: relative;
        left: 90%;
        bottom: 20px;
    }

`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    textarea {
        font-size: 16px;
        border: 2px solid #EE6B26;
    }

`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        font-size: 18px;
        color: #20295f;
        border: none;
        background: none;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.7;
    }

    div {
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Save = styled.div`
    width: 100%;

    button {
        width: 100%;
        background: #EE6B26;
        color: #FFF;
        border: none;
        font-size: 18px;
        font-weight: bold;
        padding: 8px;
        border-radius: 20px;
        cursor: pointer;
    }

    &:hover{
        opacity: 0.7;
    }
`

