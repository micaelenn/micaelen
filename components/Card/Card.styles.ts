import styled from 'styled-components'
import { colors, fontFamilies } from '@/styles/variables'

export const Component = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 700px;
    position: relative;

    a {
        position: absolute;
        height: 100%;
        opacity: 0;
        width: 100%;
    }

    &:hover,
    &:focus,
    &:focus-within {
        h2 {
            color: ${colors.dark};
        }
    }
`

export const Title = styled.div`
    h2 {
        color: ${colors.primary};
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
        transition: all 0.2s ease 0s;
    }

    p {
        background-color: ${colors.light};
        border-radius: 2px;
        color: ${colors.dark};
        display: inline-block;
        font-family: ${fontFamilies.secondary};
        font-size: 14px;
        padding: 0 5px;
        text-align: center;
    }
`