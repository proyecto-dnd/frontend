import React from "react";
import EquipmentColumn from "./components/EquipmentColumn/EquipmentColumn";
import styles from "./Equipment.module.css";
import CardItem from "./components/CardItem/CardItem";
import Stiletto from "@/components/icons/Stiletto";

const weapons = [
  {
    title: "Filo Nocturno",
    subtitle: "Daga",
    content: {
      Categoría: "armac c/c simples",
      Alcance: "20/60",
      Precio: "2 piezas de oro",
      Peso: "1lb",
      Daño: "1d4",
      "Daño crítico": "2d4",
      "Daño versátil": "1d8",
      Propiedades: "arrojadiza, ligera, sutil",
      Descripción:
        "daga elegante y letal, hoja oscura con línea de plata, ideal para combate furtivo y potencia habilidades sigilosas con aura mágica de sombras.",
    },
  },
  {
    title: "Filo Nocturno",
    subtitle: "Daga",
    content: {
      Categoría: "armac c/c simples",
      Alcance: "20/60",
      Precio: "2 piezas de oro",
      Peso: "1lb",
      Daño: "1d4",
      "Daño crítico": "2d4",
      "Daño versátil": "1d8",
      Propiedades: "arrojadiza, ligera, sutil",
      Descripción:
        "daga elegante y letal, hoja oscura con línea de plata, ideal para combate furtivo y potencia habilidades sigilosas con aura mágica de sombras.",
    },
  },
  {
    title: "Filo Nocturno",
    subtitle: "Daga",
    content: {
      Categoría: "armac c/c simples",
      Alcance: "20/60",
      Precio: "2 piezas de oro",
      Peso: "1lb",
      Daño: "1d4",
      "Daño crítico": "2d4",
      "Daño versátil": "1d8",
      Propiedades: "arrojadiza, ligera, sutil",
      Descripción:
        "daga elegante y letal, hoja oscura con línea de plata, ideal para combate furtivo y potencia habilidades sigilosas con aura mágica de sombras.",
    },
  },
];

const Equipment = () => {
  return (
    <section className={styles.equipment}>
      <div className={styles.weight}>
        <strong>Peso: </strong>
        <span>80lb / 150lb</span>
      </div>
      <div className={styles.equipmentColumns}>
        <EquipmentColumn title="Armas" add>
          {weapons.map((item, index) => (
            <CardItem
              key={item.title + index}
              title={item.title}
              subtitle={item.subtitle}
              icon={<Stiletto size={42} className={styles.cardIcon} />}
              edit
              equip
              add={false}
              content={item.content}
            />
          ))}
        </EquipmentColumn>
        <div className={styles.line}></div>
        <EquipmentColumn title="Armaduras" add>
          {weapons.map((item, index) => (
            <CardItem
              key={item.title + index}
              title={item.title}
              subtitle={item.subtitle}
              icon={<Stiletto size={42} className={styles.cardIcon} />}
              edit
              equip
              add={false}
              content={item.content}
            />
          ))}
        </EquipmentColumn>
        <div className={styles.line}></div>
        <EquipmentColumn title="Objetos" add>
          {weapons.map((item, index) => (
            <CardItem
              key={item.title + index}
              title={item.title}
              subtitle={item.subtitle}
              icon={<Stiletto size={42} className={styles.cardIcon} />}
              edit
              equip
              add={false}
              content={item.content}
            />
          ))}
        </EquipmentColumn>
      </div>
    </section>
  );
};

export default Equipment;
