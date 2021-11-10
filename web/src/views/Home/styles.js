import styled from 'styled-components';


// Recebe uma div de styled
export const Container = styled.div`
    width: 100%;
`

export const FilterArea= styled.div`
    width: 100%;
    margin-top: 10px;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    button {
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
        text-decoration: none;
        color: #000;
    }
`

export const Titulo = styled.div`
    width: 100%;
    border-bottom: 2px solid #20295F;
    text-align: center;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;

    h3 {
        color: #20295F;
        position: relative;
        margin-bottom: -5px;
        top: 5px;
        background: #FFF;
        padding: 0 10px;
    }
`
   

