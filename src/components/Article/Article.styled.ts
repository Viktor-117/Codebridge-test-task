import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Img = styled.img`
  display: block;
  width: 1440px;
  height: 245px;
  object-fit: cover;
`;

export const Header = styled.h1`
  display: block;
  margin-top: 0;
  margin-bottom: 50px;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 24px;
  line-height: 1.2;
`;

export const Text = styled.p`
  display: block;
  margin: 0;
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;

export const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 35px 75px 50px 75px;
  transform: translate(75px, -75px);
  width: 1290px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

export const Box = styled.div`
  position: relative;
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const Wrap = styled.div`
  /* background-color: #e5e5e5; */
`;

export const Button = styled(NavLink)`
  height: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: -55px;
  text-decoration: none;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5%;
  color: #363636;
  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 12px;
  height: 10px;
  margin-right: 6px;
`;
