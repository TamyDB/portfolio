import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'
const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Rafael Tamy</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        tamydb
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Alterar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
