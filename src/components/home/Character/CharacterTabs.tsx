import Stats from './tabs/Stats'
import Background from './tabs/Background'
import Equipment from './tabs/Equipment'
import Spells from './tabs/Spells'
import Traits from './tabs/Traits'
import MultiTab from '@/components/common/tabs/MultiTab'
import ChartBar from '@/components/icons/stats/ChartBar'
import Book from '@/components/icons/stats/Book'
import Sword from '@/components/icons/stats/Sword'
import Wand from '@/components/icons/stats/Wand'
import Sparkles from '@/components/icons/stats/Sparkles'
 
const CharacterTabs = () => {

  const tabs: Tab[] = [
    { name: 'background', label: 'Trasfondo', icon: <Book />, component: <Background /> },
    { name: 'stats', label: 'Estadísticas', icon: <ChartBar />, component: <Stats /> },
    { name: 'equipment', label: 'Equipo', icon: <Sword />, component: <Equipment /> },
    { name: 'spells', label: 'Conjuros', icon: <Wand />, component: <Spells /> },
    { name: 'traits', label: 'Rasgos', icon: <Sparkles />, component: <Traits /> }
  ]

  return (
    <MultiTab tabs={tabs} />
  )
}

export default CharacterTabs