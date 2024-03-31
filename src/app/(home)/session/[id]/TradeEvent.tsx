"use client";
import React, { useEffect } from "react";
import Select from "@/components/common/inputs/Select";
import FormGroup from "@/components/home/NewLayout/FormGroup";
import { useState } from "react";
import EventForm from "./EventForm";
import styles from "./page.module.css";
import MultiSelect from "@/components/common/inputs/MultiSelect";
import { log } from "console";

const TradeEvent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<string | undefined>(undefined);
  const [selectedCharacterItemsToTrade, setSelectedCharacterItemsToTrade] = useState<Item[]>([]);
  const [myItemsToTrade, setMyItemsToTrade] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedCharacterItems, setSelectedCharacterItems] = useState<string[]>([]);

  interface Item {
    value: string;
    label: string;
  }

  interface Character {
    character_id: string;
    user_id: string;
    name: string;
  }  

  const mergeUniqueItems = (oldItems: any, newItems: any) => {
    const combined = [...oldItems, ...newItems];
    return combined.filter(
      (item, index, self) =>
        index ===
        self.findIndex((t) => t.value === item.value && t.label === item.label)
    );
  };

  const getRequest = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  }

  const getCharacters = async () => {
    const data = await getRequest(`http://localhost:8080/api/v1/character/filter?campaignid=1`);
    setCharacters(data);
  };

  const getMyCharacter = async (userData: any) => {
    const user = await userData;        

    const myCharacter = characters.filter(
      (character: any) => character.user_id === user.id
    );

    if (myCharacter.length === 0) return;    

    return myCharacter[0].character_id;
  }

  const getItems = async (userData: any) => {

    const myCharacter = await getMyCharacter(userData);  
    
    if (!myCharacter) return;

    const data = await getRequest(`http://localhost:8080/api/v1/item_character/character/${myCharacter}`);

    const itemsToTrade = data.map((item: any) => ({
      value: `${item.item.item_id}-item`,
      label: item.item.name,
      type: 'item'
    }));

    setMyItemsToTrade((prevState) => mergeUniqueItems(prevState, itemsToTrade));
  };

  const getWeapons = async (userData: any) => {

    const myCharacter = await getMyCharacter(userData);

    if (!myCharacter) return;

    const data = await getRequest(`http://localhost:8080/api/v1/weapon_character/character/${myCharacter}`);

    const weaponsToTrade = data.map((weapon: any) => ({
      value: `${weapon.weapon.weapon_id}-weapon`,
      label: weapon.weapon.name,
      type: 'weapon'
    }));

    setMyItemsToTrade((prevState) => mergeUniqueItems(prevState, weaponsToTrade));
  };

  const getArmors = async (userData: any) => {

    const myCharacter = await getMyCharacter(userData);

    if (!myCharacter) return;

    const data = await getRequest(`http://localhost:8080/api/v1/armor_character/character/${myCharacter}`);

    const armorsToTrade = data.map((armor: any) => ({
      value: `${armor.armor.armor_id}-armor`,
      label: armor.armor.name,
      type: 'armor'
    }));

    setMyItemsToTrade((prevState) => mergeUniqueItems(prevState, armorsToTrade));
  };

  const getSelectedCharacterItemsData = async () => {
    const selectedCharacterItemsData = await getRequest(`http://localhost:8080/api/v1/item_character/character/${selectedCharacter}`)
    const selectedCharacterItemsToTrade = selectedCharacterItemsData.map(
      (item: any) => ({
        value: `${item.item.item_id}-item`,
        label: item.item.name,
        type: 'item'
      })
    );
    setSelectedCharacterItemsToTrade((prevState) => mergeUniqueItems(prevState, selectedCharacterItemsToTrade));
  }

  const getSelectedCharacterWeaponsData = async () => {
    const selectedCharacterWeaponsData = await getRequest(`http://localhost:8080/api/v1/weapon_character/character/${selectedCharacter}`);
    const weaponsSelectedCharacter = selectedCharacterWeaponsData.map(
      (weapon: any) => ({
        value: `${weapon.weapon.weapon_id}-weapon`,
        label: weapon.weapon.name,
        type: 'weapon'
      })
    );
    setSelectedCharacterItemsToTrade((prevState) => mergeUniqueItems(prevState, weaponsSelectedCharacter));
  }

  const getSelectedCharacterArmorsData = async () => {
    const selectedCharacterArmorsData = await getRequest(`http://localhost:8080/api/v1/armor_character/character/${selectedCharacter}`);
    const armorsSelectedCharacter = selectedCharacterArmorsData.map(
      (armor: any) => ({
        value: `${armor.armor.armor_id}-armor`,
        label: armor.armor.name,
        type: 'armor'
      })
    );
    setSelectedCharacterItemsToTrade((prevState) => mergeUniqueItems(prevState, armorsSelectedCharacter));
  }

  const handleItems = (value: string) => {
    
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleCharacterSelectedItems = (value: string) => {
    if (selectedCharacterItems.includes(value)) {
      setSelectedCharacterItems(
        selectedCharacterItems.filter((item) => item !== value)
      );
    } else {
      setSelectedCharacterItems([...selectedCharacterItems, value]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => { 

    if (!characters) return;

    const getUserData = async () => {
      const res = await fetch(`/api/my`);
      const data = await res.json();
      return data;
    };

    const userData = getUserData();
    getItems(userData);
    getWeapons(userData);
    getArmors(userData);
  }, [characters]);

  useEffect(() => {
    const getSelectedCharacterData = async () => {
      await getSelectedCharacterItemsData();
      await getSelectedCharacterWeaponsData();
      await getSelectedCharacterArmorsData();
    };

    if (selectedCharacter) {
      setSelectedCharacterItems([]);
      getSelectedCharacterData();
    }
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
