import styled from "styled-components"

export const Header = styled.div`
    margin: 30px auto ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 48px;
        margin: 10px auto 20px;
    }

    input{
        width: 731px;
        border-radius: 10px;
        border: 0;
        padding: 13px 10px;
        margin-top: 30px;
    
    }
    `
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;

`



export const Button = styled.button`
    height: 110px;
    width: 306px;
    padding: 20px;
    background-color: #fff;
    margin-top: 50px;
    border: 0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 50px;


    :hover{
        background-color: rgb(167, 167, 167);
        
    }

    .Brazil{
        background: green;
    }
`

export const Loading = styled.div`
    margin: auto;
    font-size: 48px;
    font-weight: bold;

`

export const Error = styled.div`

    margin: 30px auto;

    h1{
        font-size: 48px;
        
    }

`