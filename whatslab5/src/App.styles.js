import styled from "styled-components";

export const MensagemItem = styled.li`
  
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  border: 1px solid black;
  
  max-width: 20%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;

  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  -webkit-box-pack: end;
  
  
  
  div:nth-child(2) {
    color: blue;
    padding-left:15px;
    
  }
`;

export const Formulario = styled.div`


border: 2px solid black;
border-radius: 10px;
padding: 16px;
display: grid;
grid-template-columns: 1fr 5fr 1fr;
align-items: flex-end;
justify-content: flex-end;
column-gap: 20px;
margin: 20px;

`

export const Container = styled.div`

border: 2px solid black;
border-radius: 10px;
padding: 10px;
margin: 16px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

`
export const CampoMensagem = styled.div`
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    padding: 20px;
    
`
