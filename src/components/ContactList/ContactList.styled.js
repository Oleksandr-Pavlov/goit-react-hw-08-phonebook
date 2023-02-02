import styled from 'styled-components';

export const Box = styled.ul`
  margin-top: 15px;
  padding: 0px;
  width: 400px;
`;

export const Contact = styled.li`
  &:not(:first-child) {
    border-top: 1px solid gray;
  }
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 2px solid yellowgreen;
  border-radius: 5px;
  transition: all 200ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: yellowgreen;
    color: white;
  }
`;
