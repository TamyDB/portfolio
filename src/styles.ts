import styled, { createGlobalStyle } from 'styled-components'

const estiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    padding-top: 80px;

  }
`
export default estiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
    border-radius: 50%;
  }
`
