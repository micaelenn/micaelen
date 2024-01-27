import styled from 'styled-components'
import { colors, medias, fontFamilies } from '@/styles/variables'

export const Component = styled.div`
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    height: 20px;

    li {
      font-size: 16px;
      
      a {
        font-family: ${fontFamilies.secondary};
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
      }
    }
  }
`
