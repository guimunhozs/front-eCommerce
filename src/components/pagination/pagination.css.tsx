import styled from "styled-components";

export const PaginationBox = styled.p`
  display: flex;
  align-items: center;
`;

export const ButtonPage = styled.button`
  background: none;
  border: none;
  color: gray;
  padding: 3px 10px;
  cursor: pointer;
  @media (max-width: 500px) {
    padding: 8px;
  }
`;

export const ButtonPageSelected = styled.button`
  background: none;
  color: gray;
  padding: 3px 10px;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 4px;
  @media (max-width: 500px) {
    padding: 8px;
  }
`;
