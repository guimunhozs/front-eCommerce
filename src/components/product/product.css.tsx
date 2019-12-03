import styled from "styled-components";


export const ProductBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #EEEDF1;
  display: flex;
`;

export const ImageBox = styled.div`
  width: 32%;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    margin-top: 10px;
    display: block;
  }
`;

export const ProductInfo = styled.div`
  width: 68%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: block;
  }
`;

export const ProductBoxText = styled.div`
  align-self: center;
  margin-left: 20px;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const ProductName = styled.h4`
  margin: 0;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const ProducType = styled.p`
  margin: 0;
  font-size: 11px;
  color: gray;
`;

export const ProductPrice = styled.p`
  align-self: center;
  margin: 0 20px 0 0;

  @media (max-width: 500px) {
    justify-content: center;
    display: flex;
    font-size: 13px;
    margin-top: 5px;
  }
`;

export const DiscountPrice = styled.span`
  color: gray;
`;