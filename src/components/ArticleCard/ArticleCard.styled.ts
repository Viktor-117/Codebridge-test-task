import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-family: Montserrat;
  color: #363636;
  font-weight: 700;
  font-size: 16;
  line-height: 1.5;
  padding-left: 25px;
  padding-bottom: 25px;
  text-decoration: none;
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
