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
`;

export const ProductInfo = styled.div`
  width: 68%;
  display: flex;
  justify-content: space-between;
`;

export const ProductBoxText = styled.div`
  align-self: center;
  margin-left: 20px;
`;

export const ProductName = styled.h4`
  margin: 0;
`;

export const ProducType = styled.p`
  margin: 0;
  font-size: 11px;
  color: gray;
`;

export const ProductPrice = styled.p`
  align-self: center;
  margin: 0 20px 0 0;
`;

export const DiscountPrice = styled.span`
  color: gray;
`;