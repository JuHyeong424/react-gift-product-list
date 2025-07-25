import styled from '@emotion/styled';

export const SenderWrapper = styled.div`
    margin: 10px 0;
    padding: 15px 15px 20px 15px;
    background-color: ${({ theme }) => theme.colors.gray00};
`

export const Title = styled.p`
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 15px;
`

export const SendInfo = styled.p`
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.gray500};
    font-size: 13px;
`

export const SendError = styled.p`
    padding-left: 10px;
    color: ${({ theme }) => theme.colors.red700};
    font-size: 13px;
`

export const SenderInput = styled.input<{ isActive: boolean }>`
    width: 100%;
    height: 45px;
    border: 1px solid ${({ theme, isActive }) => isActive? theme.colors.red700 : theme.colors.gray500};
    border-radius: 5px;
    font-size: 17px;
    padding: 14px;
    margin: 0 5px 10px 5px;

    ::placeholder {
        color: ${({ theme }) => theme.colors.gray500};
    }
`

