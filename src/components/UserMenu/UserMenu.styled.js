import styled from 'styled-components';

export const UserNav = styled.div`
  display: flex;
  align-items: baseline;
  height: 25px;
  margin-left: auto;
`;

export const Btn = styled.button`
  margin-left: 15px;
  border: 2px solid yellowgreen;
  border-radius: 5px;
  height: 25px;
  transition: all 200ms linear;

  &:hover {
    transform: scale(1.1);
    background-color: yellowgreen;
    color: white;
  }
`;

export const P = styled.p`
  margin: 0;
`;
