import styled from "styled-components";

export const Button = styled.button`
  font-family: Montserrat;
  color: #363636;
  background-color: transparent;
  border: none;
  font-weight: 700;
  font-size: 16;
  line-height: 1.5;
  padding: 25px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
`;

export const Arrow = styled.img`
  width: 12px;
  height: 10px;
  margin-left: 6px;
`;

export const DateText = styled.p`
  display: inline-block;
  color: #868686;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const DateImg = styled.img`
  display: inline;
  width: 13.5px;
  height: 13.5px;
  margin-right: 9px;
`;
