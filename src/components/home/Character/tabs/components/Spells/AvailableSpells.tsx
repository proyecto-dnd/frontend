"use client";

import React, { useEffect, useState } from "react";
import styles from "./AvailableSpells.module.css";
import Input from "@/components/common/inputs/Input";
import Search from "@/components/icons/ui/Search";
import FilterButton from "@/components/home/List/FilterButton";

import Add from "@/components/icons/ui/Add";
import Button from "@/components/common/buttons/Button";
import ExpandMenu from "../ExpandMenu/ExpandMenu";
import { SpellFunction } from "./MySpells";
import CreateSpell from "./CreateSpell";
import { Spell, Spell2 } from "../../Spells";
import SpellBook from "@/components/icons/SpellBook";
import Spinner from "@/components/common/Spinner/Spinner";

export interface availableSpellsProps {
  spells: Spell2[];
  mySpells: Spell2[];
  addSpells: SpellFunction;
  removeSpells: SpellFunction;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  editSpell: any;
  openCreateMenu: boolean;
  setOpenCreateMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setEditSpell: React.Dispatch<React.SetStateAction<{}>>;
  fetchSpells: () => void;
}

export const compareSpells = (spell1: Spell2, spell2: Spell2) => {
  return (
    spell1.name === spell2.name &&
    spell1.description === spell2.description &&
    spell1.range === spell2.range &&
    spell1.ritual === spell2.ritual &&
    spell1.duration === spell2.duration &&
    spell1.concentration === spell2.concentration &&
    spell1.casting_time === spell2.casting_time &&
    spell1.level === spell2.level &&
    spell1.damage_type === spell2.damage_type &&
    spell1.difficulty_class === spell2.difficulty_class &&
    spell1.aoe === spell2.aoe &&
    spell1.school === spell2.school
  );
};

const AvailableSpells = ({
  spells,
  mySpells,
  addSpells,
  removeSpells,
  onChange,
  searchQuery,
  editSpell,
  openCreateMenu,
  setOpenCreateMenu,
  setEditSpell,
  fetchSpells,
}: availableSpellsProps) => {
  const [loading, setLoading] = useState(false);

  const isSpellAdded = (spell: Spell2) => {
    return mySpells.some((mySpell) => compareSpells(mySpell, spell));
  };

  const getSpellIdFromMySpells = (spell: Spell2) => {
    const mySpell = mySpells.find((mySpell) => compareSpells(mySpell, spell));
    return mySpell ? mySpell.spell_id : null;
  };

  const handleClick = (sp: Spell2) => {
    if (isSpellAdded(sp)) {
      const spellId = getSpellIdFromMySpells(sp);
      if (spellId) {
        removeSpells({ ...sp, spell_id: spellId });
      }
    } else {
      addSpells(sp);
    }
    setLoading(false);
  };

  const handleOpenCreate = () => {
    setOpenCreateMenu(!openCreateMenu);
    setEditSpell({});
  };

  // useEffect(() => {
  //   if (editSpell.name) {
  //     setOpenCreateMenu(!openCreateMenu);
  //   }
  // }, [editSpell]);

  return (
    <div className={styles.avSpellsContainer}>
      <h3>{openCreateMenu ? "Crear conjuro" : "Conjuros disponibles"}</h3>
      <hr />

      {!openCreateMenu ? (
        <>
          <div className={styles.searchContainer}>
            <Input
              className={styles.search}
              placeholder="Buscar"
              onChange={onChange}
              value={searchQuery}
            >
              <Search size="35px" color="white" />
            </Input>
          </div>
          <div className={styles.spellsContainer}>
            <div className={styles.spellsContainer}>
              {spells.map((sp) => (
                <ExpandMenu
                  icon={<SpellBook size={40} />}
                  name={sp.name}
                  subtitle={`Nivel ${sp.level}, ${sp.school}`}
                  key={sp.name}
                  content={{
                    "Tiempo de lanzamiento": sp.casting_time,
                    Alcance: sp.range,
                    Duración: sp.duration,
                    Descripción: sp.description,
                  }}
                  additionalButton={
                    <Button
                      className={isSpellAdded(sp) ? styles.added : ""}
                      onClick={() => handleClick(sp)}
                    >
                      {isSpellAdded(sp) ? "Agregado" : "Agregar"}
                    </Button>
                  }
                  actionButtons={false}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className={styles.addSpellContainer}>
            <h3>Crear un conjuro personalizado</h3>
            <div className={styles.addSpellBtn} onClick={handleOpenCreate}>
              <Add color="white" />
            </div>
          </div>
        </>
      ) : (
        <CreateSpell
          addSpells={addSpells}
          setOpenCreateMenu={setOpenCreateMenu}
          openCreateMenu={openCreateMenu}
          editSpell={editSpell}
          fetchSpells={fetchSpells}
        />
      )}
    </div>
  );
};

export default AvailableSpells;
