import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const PrincipalTitle = styled.header`
  margin: 8px 0 0 30px;
  line-height: 20px;
  font-size: 20px;
`;

export const BoxTitle = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin: 10px 0;
  background-color: #eeedf1;
`;

export const SearchTitle = styled.h2`
  font-family: "Helvetica";
  padding-left: 35px;
  font-size: 30px;
  margin: 20px 0;
`;

export const Article = styled.article`
  width: 75%;
  display: block;
  margin: auto;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.h3`
  text-transform: capitalize;
  border-bottom: 5px solid orange;
  font-size: 15px;
  display: inline-block;
`;

export const PaginationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const LimitProductPage = styled.select`
  padding: 7px;
  border-radius: 5px;
  color: gray;
  height: 35px;
`;
