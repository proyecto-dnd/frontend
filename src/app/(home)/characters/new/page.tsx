import React, { useState } from "react";
import CreateCharacter from "@/components/home/Character/CreateCharacter/CreateCharacter";
import useEffect from 'react';

const getRaces = async () => {
  const data = {
    races: [],
    info: "",
  };
  try {
    const response = await fetch(process.env.URL + "/api/races");
    data.races = await response.json();
    data.info = "Success";
  } catch (error: any) {
    data.info = error.message;
  }
  return data;
};

const getClasess = async () => {
  const data = {
    clasess: [],
    info: "",
  };
  try {
    const response = await fetch(process.env.URL + "/api/clasess");
    data.clasess = await response.json();
    data.info = "Success";
  } catch (error: any) {
    data.info = error.message;
  }
  return data;
};

const NewCharacter = async () => {

  const dataRaces = await getRaces()
  const dataClasess = await getClasess()
  // console.log(dataClasess.clasess)
  return (
    <CreateCharacter racesBack={dataRaces.races} clasessBack={dataClasess.clasess}/>
  );
};

export default NewCharacter;
