import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  transform: translate(-30px, 14px) scale(0.75);
  height: 0;
`;

export const Input = styled.input`
  border: 2px solid yellowgreen;
  margin: 10px 0;
  padding: 10px;
  padding-top: 20px;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 12px;
  margin-top: 10px;
  border: 2px solid yellowgreen;
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;
  transition: all 200ms linear;

  &:hover {
    transform: scale(1.05);
    background-color: yellowgreen;
    color: white;
  }
`;
