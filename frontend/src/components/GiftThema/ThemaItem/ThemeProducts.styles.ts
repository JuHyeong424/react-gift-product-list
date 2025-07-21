import styled from '@emotion/styled';

export const ThemeProductsWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.gray00};
    padding: 0 20px;
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const ProductsLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0;
`;

export const ProductsError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0;
`;