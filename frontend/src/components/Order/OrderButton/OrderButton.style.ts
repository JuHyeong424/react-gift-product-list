import styled from '@emotion/styled';

export const PriceButton = styled.button`
    display: flex;
    width: 100%;
    max-width: 500px;
    background-color: ${({ theme }) => theme.semantic.brand.kakaoYellow};
    border: none;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    box-sizing: border-box;
`
