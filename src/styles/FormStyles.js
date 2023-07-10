import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  height: 20px;
  line-height: 28px;
  padding: 0 1rem;
  margin-top: 15px;
  width: 85%;
  padding-left: 2.5rem;
  border: 1px solid transparent;
  border-radius: 85px;
  outline: none;
  background-color: #D9E8D8;
  color: #0d0c22;
  box-shadow: 0 0 5px #C1D9BF, 0 0 0 5px #f5f5f5eb;
  transition: .3s ease;

  &::placeholder {
  color: #777;
`;

export const StyledButton = styled.button`
  padding: 8px 12px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
