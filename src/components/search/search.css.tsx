import styled from "styled-components";

export const SearchSection = styled.div`
  position: relative;
`;

export const SearchIcon = styled.i`
  font-size: 12px !important;
  color: black;
  position: absolute;
  top: 15px;
  left: 25px;
`;

export const SearchCancel = styled.button`
  font-size: 12px !important;
  color: black;
  position: absolute;
  top: 15px;
  right: 35px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 20px;
  margin: 10px 30px 0 10px;
  border-radius: 10px;
  border: 1px grey solid;
  padding: 0px 40px;
  @media (max-width: 500px) {
    width: 70px;
  }
`;
