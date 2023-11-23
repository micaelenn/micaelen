import styled from 'styled-components'
import { colors, fontFamilies, medias } from '@/styles/variables'

export const Component = styled.section`

`

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media(min-width: ${medias.medium}) {
    flex-direction: row;
    justify-content: space-between;
  }

  p {
    color: ${colors.black};
    font-size: 18px;
    margin-bottom: 30px;
  }

  img {
    border-radius: 100%;
    border: 4px solid ${colors.black};
    height: 250px;
    width: 250px;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 60px;

  h1 {
    color: ${colors.black};
    font-family: ${fontFamilies.secondary};
    font-size: 32px;
  }

  svg {
    fill: ${colors.black};
  }
`