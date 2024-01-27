import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.section`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    a {
        background: none;
        color: ${colors.primary};
        font-family: ${fontFamilies.primary};
        font-size: 32px;
        font-weight: 900;
        text-decoration: none;
    }

    h1 {
        &::before {
            content: ' ~ ';
            color: ${colors.gray};
            margin-left: 10px;
        }
    }
`
