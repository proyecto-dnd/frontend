"use client";
import React, { useEffect } from "react";
import Select from "@/components/common/inputs/Select";
import FormGroup from "@/components/home/NewLayout/FormGroup";
import { useState } from "react";
import EventForm from "./EventForm";
import styles from "./page.module.css";
import MultiSelect from "@/components/common/inputs/MultiSelect";

const TradeEvent = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState<
    string | undefined
  >(undefined);
  const [selectedCharacterItemsToTrade, setSelectedCharacterItemsToTrade] =
    useState([]);
  const [myItemsToTrade, setMyItemsToTrade] = useState([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCharacterItems, setSelectedCharacterItems] = useState<
    string[]
  >([]);

  const mergeUniqueItems = (oldItems: any, newItems: any) => {
    const combined = [...oldItems, ...newItems];
    return combined.filter(
      (item, index, self) =>
        index ===
        self.findIndex((t) => t.value === item.value && t.label === item.label)
    );
  };

  const getCharacters = async () => {
    const response = await fetch(
      `http://localhost:8080/api/v1/character/filter?campaignid=1`
    );
    const data = await response.json();
    setCharacters(data);
  };

  const getItems = async (userData: any) => {
    const user = await userData;

    const myCharacter = characters.filter(
      (character: any) => character.user_id === user.id
    );

    if (myCharacter.length === 0) return;

    const itemsCharacter = await fetch(
      `http://localhost:8080/api/v1/item_character/character/${myCharacter[0].character_id}`
    );
    const data = await itemsCharacter.json();

    const itemsToTrade = data.map((item: any) => ({
      value: item.item.item_id,
      label: item.item.name,
    }));

    setMyItemsToTrade((prevState) => mergeUniqueItems(prevState, itemsToTrade));
  };

  const getWeapons = async (userData: any) => {
    const user = await userData;

    const myCharacter = characters.filter(
      (character: any) => character.user_id === user.id
    );

    if (myCharacter.length === 0) return;

    const response = await fetch(
      `http://localhost:8080/api/v1/weapon_character/character/${1}`
    );
    const data = await response.json();

    const weaponsToTrade = data.map((weapon: any) => ({
      value: weapon.weapon.weapon_id,
      label: weapon.weapon.name,
    }));

    setMyItemsToTrade((prevState) =>
      mergeUniqueItems(prevState, weaponsToTrade)
    );
  };

  const getArmors = async (userData: any) => {
    const user = await userData;

    const myCharacter = characters.filter(
      (character: any) => character.user_id === user.id
    );

    if (myCharacter.length === 0) return;
    const response = await fetch(
      `http://localhost:8080/api/v1/armor_character/character/1`
    );
    const data = await response.json();

    const armorsToTrade = data.map((armor: any) => ({
      value: armor.armor.armor_id,
      label: armor.armor.name,
    }));

    setMyItemsToTrade((prevState) =>
      mergeUniqueItems(prevState, armorsToTrade)
    );
  };

  const handleItems = (value: string) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((skill) => skill !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleCharacterSelectedItems = (value: string) => {
    if (selectedCharacterItems.includes(value)) {
      setSelectedCharacterItems(
        selectedCharacterItems.filter((skill) => skill !== value)
      );
    } else {
      setSelectedCharacterItems([...selectedItems, value]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch("/api/my", {});
      const data = await response.json();
      return data;
    };

    const userData = getUserData();
    getItems(userData);
    getWeapons(userData);
    getArmors(userData);
  }, [characters]);

  useEffect(() => {
    const getSelectedCharacterData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/v1/item_character/character/${selectedCharacter}`
      );
      const selectedCharacterItemsData = await response.json();
      const selectedCharacterItemsToTrade = selectedCharacterItemsData.map(
        (item: any) => ({
          value: item.item.item_id,
          label: item.item.name,
        })
      );
      setSelectedCharacterItemsToTrade((prevState) =>
        mergeUniqueItems(prevState, selectedCharacterItemsToTrade)
      );

      const responseWeaponsSelectedCharacter = await fetch(
        `http://localhost:8080/api/v1/weapon_character/character/${selectedCharacter}`
      );
      const selectedCharacterWeaponsData =
        await responseWeaponsSelectedCharacter.json();
      const weaponsSelectedCharacter = selectedCharacterWeaponsData.map(
        (weapon: any) => ({
          value: weapon.weapon.weapon_id,
          label: weapon.weapon.name,
        })
      );
      setSelectedCharacterItemsToTrade((prevState) =>
        mergeUniqueItems(prevState, weaponsSelectedCharacter)
      );

      const responseArmorSelectedCharacter = await fetch(
        `http://localhost:8080/api/v1/armor_character/character/1`
      );
      const selectedCharacterData = await responseArmorSelectedCharacter.json();
      const armorsSelectedCharacter = selectedCharacterData.map(
        (armor: any) => ({
          value: armor.armor.armor_id,
          label: armor.armor.name,
        })
      );
      setSelectedCharacterItemsToTrade((prevState) =>
        mergeUniqueItems(prevState, armorsSelectedCharacter)
      );
    };

    if (selectedCharacter) getSelectedCharacterData();
  }, [selectedCharacter]);

  return (
    <EventForm
      btnText="Enviar oferta"
      handleSubmit={() => {}}
      formClassname={styles.attackForm}
    >
      <FormGroup>
        <label htmlFor="owner">Dueño del objeto</label>
        <Select
          placeholder="Elige un jugador"
          options={characters.map((player) => ({
            value: player.character_id,
            label: player.name,
          }))}
          value={selectedCharacter}
          maxHeigth="120px"
          onChange={(value) => setSelectedCharacter(value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="offer">Ofreces</label>
        <MultiSelect
          placeholder="Elige un objeto"
          onChange={handleItems}
          options={myItemsToTrade}
          selectedOptions={selectedItems}
          maxHeigth="120px"
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="recieve">Recibes</label>
        <MultiSelect
          placeholder="Elige un objeto"
          onChange={handleCharacterSelectedItems}
          options={selectedCharacterItemsToTrade}
          selectedOptions={selectedCharacterItems}
          maxHeigth="120px"
        />
      </FormGroup>
    </EventForm>
  );
};

export default TradeEvent;
