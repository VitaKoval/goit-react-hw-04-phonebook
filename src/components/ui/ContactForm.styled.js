import styled from '@emotion/styled';

export const FormForAddContact = styled.form`
display: flex;
flex-direction: column;
`
export const Label = styled.label`
margin-bottom: 7px;
font-weight: bold;
`
export const Input = styled.input`
margin-bottom: 7px;
padding: 2px 7px;

height: 30px;
border-style: none;
box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);
`

export const ButtomAddContact = styled.button`
width: 250px;
height: 30px;

  padding: 7px;
  margin: 10px auto;
 
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;

   border-radius: 5px;
   background: #DEB887;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    font-size: 15px;
  }

  &:active {
    background: #D2B48C;
     box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.1);
  }
`