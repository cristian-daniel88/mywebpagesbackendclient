import styled from "styled-components";


export const FormContainer =  styled.div`


width: 50%;
margin: auto;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
position: relative;


  
@media only screen and (max-width: 600px) {
 width: 100%;
}
`

export const Form = styled.form`
width: auto;
height: auto;
background: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 5px;
padding: 20px;

opacity: 1;


position: absolute;



`

export const FormBack = styled.form`
width: 50%;
height: 50%;
position: absolute;
background: black;

`

export const Input = styled.input`
outline: none;
border-radius: 5px;
background: white;
padding: 0 5px;
color: #1c4239;


&:hover , &:focus{
    background: #d6a6d6;
}

`

export const Label = styled.label`
width: 100%;
text-align: center;
margin-bottom: 20px;
color: #1c4239;
`

export const Button = styled.button`

background: transparent;
border: none;
font-size: 2em;
margin-bottom: 20px;
border: solid 1px rgb(52 27 92 / 82%);
border-radius: 5px;
cursor: pointer;
margin-top: 50px;
padding: 0 20px;
color: #1c4239;
&:hover {
    background: #d6a6d6;
}

`
