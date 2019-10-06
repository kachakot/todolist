import styled, { css } from 'styled-components'

export enum kinds {
    add = 'add',
    remove = 'remove',
    edit = 'edit',
}

export interface ButtonStyledProps {
    kind?: keyof typeof kinds
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    display: inline-flex;
    justify-content: center;
    font-size: 16px;
    border: 0;

    ${({ kind }) => kind === kinds.add && css `
        background: green;
        padding: 10px 20px;
    `}

    ${({ kind }) => kind === kinds.remove && css`
        background: red;
        padding: 5px;
    `}

    ${({ kind }) => kind === kinds.edit && css`
        background: blue;
        padding: 5px;
    `}
`
