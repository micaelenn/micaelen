import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  a {  
    svg {
      color: ${colors.dark};
      height: 22px;
      width: 22px;
    }
  }
`
