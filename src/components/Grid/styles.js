import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background: rgb(15,0,36);
  background: linear-gradient(90deg, rgba(15,0,36,1) 29%, rgba(9,121,77,1) 45%, rgba(0,212,255,1) 100%);
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  color:white;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
