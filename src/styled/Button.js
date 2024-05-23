import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 18px;
  min-width: 220px;
  border: none;
  background: whitesmoke;
  border-radius: 5px;
  border: 2.3px solid black;
  color: black;
  font-weight: bolder;
  font-size: 16px;
  transition: 0.5s background ease-in;

  &:hover {
    background: #000000;
    color: white;
    cursor: pointer;
    box-shadow: inset 1px 1px 1px 1px #4f4d50, inset -1px -1px 1px 1px #569bdf;
    font-weight: bolder;
    transition: 0.5s background ease-in;
  }

  @media (max-width: 768px) {
    min-width: 180px;
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    min-width: 140px;
    font-size: 12px;
    padding: 6px 14px;
  }
`;

export const BlackButton = styled(Button)`
  background: black;
  border-radius: 5px;
  border: 2.3px solid white;
  color: white;

  &:hover {
    border: 3px solid black;
    box-shadow: inset 1px 1px 1px 1px #4f4d50, inset -1px -1px 1px 1px #569bdf;
    background: white;
    color: black;
  }
`;
