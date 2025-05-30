import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Josué Rogério</Titulo>
      <Paragrafo tipo='secundario' fontSize={16}>josue-rgt</Paragrafo>
      <Descricao tipo='principal' fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
