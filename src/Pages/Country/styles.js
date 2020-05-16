import styled from "styled-components"


export const Container = styled.div`
    width: 1000px;
    height: 500px;
    padding: 20px;
    margin: 80px auto;
    background-color: #fff;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    align-items: center;
   

    a{
        text-decoration: none;
    }

    h1{
        font-size: 48px;
        text-decoration: none;
        color: #000;
    }

   p{
       margin-top: 20px;
       font-weight: 100;
   }

`

export const Text = styled.section`
     
    margin-top: 50px;
    margin-left: 30px;
    text-align: center;

    h1{
        font-size: 34px;
        margin-top: 20px;
        
    }
    
    h1.red{
        color: red;
    }
    
    h1.green{
        color: #7dd221;
    }
    
    h1.darkGrey{
        color: darkgrey;
    }

`