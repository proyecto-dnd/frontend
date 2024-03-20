import React from "react";
import styles from "./Spells.module.css";
import EquipmentColumn from "./components/EquipmentColumn/EquipmentColumn";
import CardItem from "./components/CardItem/CardItem";
import SpellBook from "@/components/icons/SpellBook";
import AvailableSpells from "./components/AvailableSpells/AvailableSpells";

const spells = [
  {
    title: "Oración de curación",
    level: 2,
    category: "evocación",
    content: {
      "Tiempo de lanzamiento": "10 minutos",
      Alcance: "30 pies",
      Duración: "instantánea",
      Descripción:
        "Hasta seis criaturas de tu elección, que puedas ver dentro del alcance, recuperan cada una, Puntos de Golpe igual a 2d8 + tú modificador de característica para lanzamiento de conjuros. Este conjuro no tiene efecto en muertos vivientes ni constructos. A niveles superiores. Cuando lanzas este hechizo usando un espacio de conjuros de nivel 3 o superior, la curación se incrementa en 1d8 por cada nivel de espacio de conjuros por encima de nivel 2.",
    },
  },
  {
    title: "Oración de curación",
    level: 2,
    category: "evocación",
    content: {
      "Tiempo de lanzamiento": "10 minutos",
      Alcance: "30 pies",
      Duración: "instantánea",
      Descripción:
        "Hasta seis criaturas de tu elección, que puedas ver dentro del alcance, recuperan cada una, Puntos de Golpe igual a 2d8 + tú modificador de característica para lanzamiento de conjuros. Este conjuro no tiene efecto en muertos vivientes ni constructos. A niveles superiores. Cuando lanzas este hechizo usando un espacio de conjuros de nivel 3 o superior, la curación se incrementa en 1d8 por cada nivel de espacio de conjuros por encima de nivel 2.",
    },
  },
  {
    title: "Oración de curación",
    level: 2,
    category: "evocación",
    content: {
      "Tiempo de lanzamiento": "10 minutos",
      Alcance: "30 pies",
      Duración: "instantánea",
      Descripción:
        "Hasta seis criaturas de tu elección, que puedas ver dentro del alcance, recuperan cada una, Puntos de Golpe igual a 2d8 + tú modificador de característica para lanzamiento de conjuros. Este conjuro no tiene efecto en muertos vivientes ni constructos. A niveles superiores. Cuando lanzas este hechizo usando un espacio de conjuros de nivel 3 o superior, la curación se incrementa en 1d8 por cada nivel de espacio de conjuros por encima de nivel 2.",
    },
  },
];

const Spells = () => {
  return (
    <section className={styles.spells}>
      <div className={styles.topInfo}>
        <div className={styles.topInfoBox}>
          <span>Aptitud mágica</span>
          <h4>Inteligencia</h4>
        </div>
        <div className={styles.topInfoBox}>
          <span>Tirada de salvacíon</span>
          <h4>13</h4>
        </div>
        <div className={styles.topInfoBox}>
          <span>Bonus de ataque</span>
          <h4>+5</h4>
        </div>
      </div>
      <div className={styles.columns}>
        <EquipmentColumn title="Mis conjuros" add={false}>
          {spells.map((item, index) => (
            <CardItem
              key={item.title + index}
              title={item.title}
              subtitle={`Nivel ${item.level}, ${item.category}`}
              icon={<SpellBook size={42} className={styles.cardIcon} />}
              edit
              equip={false}
              add={false}
              content={item.content}
            />
          ))}
        </EquipmentColumn>
        <div className={styles.line}></div>
        <AvailableSpells spells={spells} />
      </div>
    </section>
  );
};

export default Spells;
