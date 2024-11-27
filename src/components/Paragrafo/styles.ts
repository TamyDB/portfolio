import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(Props) => Props.fontSize || 14}px;
  color: ${(props) => (props.tipo === 'principal' ? '#282A35' : '#949494')};
  line-height: 22px;
`
