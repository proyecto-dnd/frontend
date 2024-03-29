"use client";

import IconButton from "@/components/common/buttons/IconButton";
import styles from "./CharacterHeader.module.css";
import Delete from "@/components/icons/ui/Delete";
import Edit from "@/components/icons/ui/Edit";
import Image from "next/image";
import DoubleUp from "@/components/icons/ui/DoubleUp";
import { CharacterProps } from "./Character";
import { classes, races } from "@/services/hardcoded";

export function getRaceLabel(value: string) {
  const race = races.find((race) => race.value === value);
  return race ? race.label : "Desconocido";
}

export function getClassLabel(value: any) {
  const classObj = classes[value];
  return classObj ? classObj.label : 'Desconocido';
}

const CharacterHeader: React.FC<CharacterProps> = ({ characterData }) => {
  const labelRaceName = getRaceLabel(characterData.race.name);

  const labelClassName = getClassLabel(characterData.class.name);

  return (
    <section className={styles.header}>
      <div className={styles.information}>
        <div className={styles.image}>
          <Image
            src={characterData.img}
            alt="Character"
            fill={true}
            sizes="auto"
          />
        </div>
        <div className={styles.data}>
          <div className={styles.dataHeader}>
            <h2>{characterData.name}</h2>
            <p className={styles.race}>{labelRaceName}</p>
          </div>
          <p className={styles.class}>
            {labelClassName} nivel {characterData.level}
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <IconButton icon={<Delete />} onClick={() => {}} primary={true} />
        <IconButton icon={<Edit />} onClick={() => {}} primary={true} />
        <IconButton icon={<DoubleUp />} onClick={() => {}} primary={true} />
      </div>
    </section>
  );
};

export default CharacterHeader;
