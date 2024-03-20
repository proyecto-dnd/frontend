"use client";

import Input from "@/components/common/inputs/Input";
import React, { useState } from "react";
import styles from "./AvailableSpells.module.css";
import Search from "@/components/icons/ui/Search";
import CardItem from "../CardItem/CardItem";
import SpellBook from "@/components/icons/SpellBook";
import Add from "@/components/icons/ui/Add";
import EquipmentColumn from "../EquipmentColumn/EquipmentColumn";
import SpellsForm from "./SpellsForm/SpellsForm";

type AvailableSpellsProps = {
  spells: any[];
};

const AvailableSpells = ({ spells }: AvailableSpellsProps) => {
  const [search, setSearch] = useState("");
  const [openForm, setOpenForm] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const closeForm = () => {
    setOpenForm(false)
  }

  const addSpell = (spell: any) => {
    spells.push(spell)
  }

  return (
    <EquipmentColumn
      add={false}
      title={openForm ? "Crear conjuro" : "Conjuros disponibles"}
    >
      {openForm ? (
        <SpellsForm closeForm={closeForm} addSpell={addSpell} />
      ) : (
        <div className={styles.availableSpells}>
          <div className={styles.availableSpellsList}>
            <Input
              className={styles.search}
              placeholder="Buscar"
              value={search}
              onChange={handleSearch}
            >
              <Search />
            </Input>
            {spells
              .filter((item) =>
                item.title.toLowerCase().startsWith(search.toLowerCase())
              )
              .map((item, index) => (
                <CardItem
                  key={item.title + index}
                  title={item.title}
                  subtitle={`Nivel ${item.level}, ${item.category}`}
                  icon={<SpellBook size={42} className={styles.cardIcon} />}
                  edit={false}
                  equip={false}
                  add={true}
                  content={item.content}
                />
              ))}
          </div>
          <div className={styles.separator}></div>
          <div className={styles.addSpell}>
            <p>Crear un conjuro personalizado</p>
            <button onClick={() => setOpenForm(true)}>
              <Add color="#FFF" size={46} />
            </button>
          </div>
        </div>
      )}
    </EquipmentColumn>
  );
};

export default AvailableSpells;
