import React from 'react';
import styles from './CardCharacter.module.css';
import Image from 'next/image';

export type CardCharacterProps = {
  img: string;
  name: string;
  level: number;
  color: string;
  icon: string;
}

const CardCharacter = ({ img, name, level, color, icon }: CardCharacterProps) => {
  return (
    <article className={styles.cardCharacter}>
      <section className={styles.image}><Image src={img} alt={name} fill={true} layout="fill" objectFit="cover" objectPosition="50% 10%"/></section>
      <section className={styles.icon}><Image src={icon} alt={name} width={32} height={32}/></section>
      <section className={styles.information}>
        <div style={{backgroundColor: `${color}`}} className={styles.level}>
          <p>{level}</p>
        </div>
        <h3 className={styles.h3}>{name}</h3>
      </section>
    </article>
  )
}

export default CardCharacter;