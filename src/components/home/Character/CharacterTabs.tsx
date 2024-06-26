import Stats from "./tabs/Stats";
import Background from "./tabs/Background";
import Equipment from "./tabs/Equipment";
import Spells from "./tabs/Spells";
import Traits from "./tabs/Traits";
import MultiTab from "@/components/common/tabs/MultiTab";
import ChartBar from "@/components/icons/stats/ChartBar";
import Book from "@/components/icons/stats/Book";
import Sword from "@/components/icons/stats/Sword";
import Wand from "@/components/icons/stats/Wand";
import Sparkles from "@/components/icons/stats/Sparkles";
import { CharacterProps } from "./Character";

const CharacterTabs: React.FC<CharacterProps> = ({ characterData }) => {
  const tabs: Tab[] = [
    {
      name: "stats",
      label: "Estadísticas",
      icon: <ChartBar />,
      component: (
        <Stats
          str={characterData.str}
          dex={characterData.dex}
          int={characterData.int}
          con={characterData.con}
          wiz={characterData.wiz}
          cha={characterData.cha}
          speed={characterData.speed}
          hitpoints={characterData.hitpoints}
          hitdice={characterData.hitdice}
          languages={characterData.background.languages}
          bonus={characterData.class.proficiency_bonus}
          armor={characterData.class.armor_proficiencies}
          weapon={characterData.class.weapon_proficiencies}
          tool={characterData.class.tool_proficiencies}
        />
      ),
    },
    {
      name: "background",
      label: "Trasfondo",
      icon: <Book />,
      component: (
        <Background
          name={characterData.background.name}
          age={characterData.age}
          hair={characterData.hair}
          eyes={characterData.eyes}
          skin={characterData.skin}
          height={characterData.height}
          weight={characterData.weight}
          alignment={characterData.alignment}
          story={characterData.story}
          ideals={characterData.background.ideals}
          flaws={characterData.background.flaws}
          personality_traits={characterData.background.personality_traits}
          trait={characterData.background.trait}
          bond={characterData.background.bond}
        />
      ),
    },
    {
      name: "equipment",
      label: "Equipo",
      icon: <Sword />,
      component: (
        <Equipment
          items={characterData.items}
          weapons={characterData.weapons}
          armors={characterData.armor}
          maxWeight={characterData.str * 15}
          characterId={characterData.characterid}
        />
      ),
    },
    {
      name: "traits",
      label: "Rasgos",
      icon: <Sparkles />,
      component: <Traits characterid={characterData.characterid} />,
    },
  ];

  if (characterData.class.name !== "barbarian") {
    tabs.push({
      name: "spells",
      label: "Conjuros",
      icon: <Wand />,
      component: (
        <Spells
          characterid={characterData.characterid}
          classId={characterData.class.class_id}
          characterClass={characterData.class}
          str={characterData.str}
          dex={characterData.dex}
          int={characterData.int}
          con={characterData.con}
          wiz={characterData.wiz}
          cha={characterData.cha}
        />
      ),
    });
  }

  return <MultiTab tabs={tabs} />;
};

export default CharacterTabs;
