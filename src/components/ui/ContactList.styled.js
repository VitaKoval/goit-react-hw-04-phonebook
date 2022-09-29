import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

list-style: none;
margin: 0;
padding: 0;
`

export const Item = styled.li`
display: flex;
align-items: center;
justify-content: center;

width: 300px;
height: 30px;

padding: 5px 5px 5px 10px;
margin-bottom: 10px;

background-color:rgba(255, 255, 255, 0.3);
border-radius: 5px;
box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);
`
export const ContactName = styled.span`
margin-right: 7px;
font-weight: bold;
`

export const ButtonDelete = styled.button`
display: flex;
align-items: center;
justify-content: center;

border: none;
border-radius: 5px;
background-color: rgba(222, 184, 135, 0.5);
padding: 4px;
margin-left: auto;
`