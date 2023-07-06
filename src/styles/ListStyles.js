import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Añadido para distribuir los elementos horizontalmente */
  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
