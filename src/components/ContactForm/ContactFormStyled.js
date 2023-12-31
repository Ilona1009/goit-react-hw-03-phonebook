import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;
export const LabelStyled = styled.label`
  margin-bottom: 7px;
  font-weight: bold;
`;

export const InputStyled = styled(Field)`
  margin-bottom: 7px;
  padding: 2px 7px;

  height: 30px;
  border-style: none;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);
`;

export const ButtonAddContactStyled = styled.button`
  width: 250px;
  height: 30px;

  padding: 7px;
  margin: 10px;

  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;

  border-radius: 5px;
  background: #deb887;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    font-size: 15px;
  }

  &:active {
    background: #d2b48c;
    box-shadow: inset 6px 6px 12px rgba(0, 0, 0, 0.1);
  }
`;
export const Error = styled(ErrorMessage)`
  color: red;
`;
