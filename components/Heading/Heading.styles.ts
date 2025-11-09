import styled from 'styled-components'
import { colors, medias } from '@/styles/variables'

export const Component = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-bottom: 70px;

  img {
    filter: grayscale(100%);
    object-fit: cover;
    width: 120px;
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }

  time {
    color: ${colors.dark};
    font-size: 13px;
  }
`

