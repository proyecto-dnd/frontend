import Button from "@/components/common/buttons/Button";
import styles from "./page.module.css";
import NewLayout from "@/components/home/NewLayout/NewLayout";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CardCampaign from "@/components/home/Campaign/CardCampaign/CardCampaign";
import CampaignTemplatesList from "@/components/home/Campaign/CampaignTemplatesList/CampaignTemplatesList";
import CharacterTemplatesList from "@/components/home/Character/CharacterTemplatesList/CharacterTemplatesList";
import ButtonLinkCreate from "@/components/common/buttons/ButtonLinkCreate";
import { getBackgrounds, getClasess, getRaces } from "../new/action";
import getUserData from "@/services/getUserData";
import { cookies } from "next/headers";

export const getCharactersTemplates = async () => {
  const data = {
    charactersTemplates: [],
    info: "",
  };
  try {
    const response = await fetch(process.env.URL + "/api/charactersTemplates");
    data.charactersTemplates = await response.json();
    data.info = "Success";
  } catch (error: any) {
    data.info = error.message;
  }
  return data;
};

const TemplateChatacter = async () => {
  const data = await getCharactersTemplates();
  const dataRaces = await getRaces()
  const dataClasess = await getClasess()
  const dataBackgrounds = await getBackgrounds()
  const user = await getUserData(cookies)
  // console.log(data)

  return (
    <NewLayout
      title="Crear personaje"
      slug={[
        { label: "Personajes", href: "/characters" },
        { label: "Plantillas" },
      ]}
    >
      <section className={styles.container}>
        <div>
          <h3 className={styles.h3}>Crear personaje</h3>
          <p className={styles.p}>
            Crea un personaje 100% personalizado desde cero.
          </p>
          <ButtonLinkCreate link="/characters/new" storage="characterDetailsTemplate">Crea un personaje desde cero</ButtonLinkCreate>
          <div className={styles.separacion}>
            <hr />
            <p className={styles.O}>O</p>
            <hr />
          </div>
        </div>
        <div>
          <h3 className={styles.h3}>Plantillas</h3>
          <p className={styles.p}>
            Utiliza una de nuestras plantillas y crea tu personaje en segundos
          </p>
          <CharacterTemplatesList
            charactersTemplates={data.charactersTemplates}
            user={user.id}
            dataRaces={dataRaces.races}
            dataClasess={dataClasess.clasess}
            dataBackgrounds={dataBackgrounds.backgrounds}
          />
        </div>
      </section>
    </NewLayout>
  );
};

export default TemplateChatacter;
