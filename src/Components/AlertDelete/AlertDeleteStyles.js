import styled from "styled-components";


export const DeleteContainer = styled.div`
width: 100%;
height: 100vh;
position: fixed;
background: rgb(52 27 92 / 12%);

left: 0;
display: ${(props) => (props.deleted ? 'flex' :'none')  };
justify-content: center;
align-items: center;
top: 0;


`

export const DeleteBox = styled.div`
width: 50%;
background: #ffffff;
border: solid 2px black;
border-radius: 5px;
padding: 20px;
@media only screen and (max-width: 600px) {
  width: 90%;
}

`;

export const DeleteMessage = styled.div`
text-align: center;
font-size: 1.5em;
margin-bottom:  60px;
`;


export const ContainerButton = styled.div`
display: flex;
justify-content: space-around;

`

export const ButtonDelete = styled.button`
background: transparent;
border: none;
font-size: 2em;
margin-bottom: 20px;
border: solid 1px rgb(52 27 92 / 82%);
border-radius: 5px;
cursor: pointer;
padding: 0 20px;
&:hover {
    background: #d6a6d6;
}

`