import styled from '@emotion/styled';

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.spacing5};
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
    margin: 20px 0 20px 12px;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

export const MoreButton = styled.button`
    width: 480px;
    height: 45px;
    display: block;
    margin: 20px auto 0;
    padding: ${({ theme }) => `${theme.spacing.spacing2} ${theme.spacing.spacing6}`};
    background-color: ${({ theme }) => theme.colors.gray00};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 12px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`;
