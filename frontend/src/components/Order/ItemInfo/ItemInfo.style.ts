import styled from '@emotion/styled';

export const ItemWrapper = styled.div`
  margin: 10px 0;
  padding: 15px 15px 20px 15px;
  background-color: ${({ theme }) => theme.colors.gray00};
`;

export const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 15px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0;
`;
