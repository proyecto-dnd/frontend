"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ArrowLeft from "@/components/icons/ui/ArrowLeft";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Paper from "@/components/icons/ui/Paper";
import Button from "@/components/common/buttons/Button";
import Eliminate from "@/components/icons/ui/Eliminate";
import Edit from "@/components/icons/ui/Edit";
import NewLayout from "@/components/home/NewLayout/NewLayout";
import Carousel from "@/components/home/Carousel/Carousel";
import LayoutDetailCampaign from "@/components/home/LayoutDetailCampaign/LayoutDetailCampaign";
import ItemsImgCarousel from "./ItemsImgCarousel";
import PlayerCampaign from "@/components/home/Campaign/PlayerCampaign/PlayerCampaign";
import ItemsPlayers from "./ItemsPlayers";
import Accordion from "@/components/sections/home/Accordion/Accordion";
import CardCharacterCampaign from "@/components/home/Campaign/CardCharacterCampaign/CardCharacterCampaign";
import GetAllCardsCharacters from "@/components/home/Campaign/GetAllCardsCharacters/GetAllCardsCharacters";
import Add from "@/components/icons/ui/Add";
import TextArea from "@/components/common/inputs/TextArea";
import formStyles from "@/components/home/NewLayout/Extra.module.css";
import Up from "@/components/icons/ui/Up";
import Down from "@/components/icons/ui/Down";

interface CampaignDetails {
  img: string | StaticImport;
  title: string;
  description: string;
}

// const getCharacters = async () => {
//   const data = {
//     characters: [],
//     info: "",
//   };
//   try {
//     const response = await fetch(process.env.URL + "/api/characters");
//     data.characters = await response.json();
//     data.info = "Success";
//   } catch (error: any) {
//     data.info = error.message;
//   }
//   return data;
// };

const CampaignDetail = () => {
  // // TODO: type characters
  // const data = getCharacters();

  const [campaignDetails, setCampaignDetails] = useState<
    CampaignDetails | undefined
  >();

  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  const [showNewNote, setShowNewNote] = useState(false);

  const handleClickNote = () => {
    setShowNewNote(!showNewNote);
  };

  const [notes, setNotes] = useState<string[]>([]);

  const [showNotes, setShowNotes] = useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  useEffect(() => {
    const campaignDetailsString = localStorage.getItem("campaignDetails");

    if (campaignDetailsString) {
      const parsedDetails = JSON.parse(campaignDetailsString);
      setCampaignDetails(parsedDetails);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const inputElement = form.elements.namedItem(
      "description"
    ) as HTMLInputElement;
    const newNote = inputElement.value;

    // Update the 'notes' state with the new note
    setNotes((prevNotes) => [...prevNotes, newNote]);

    // Clear the input field after adding the note
    inputElement.value = "";

    handleClickNote();
  };

  console.log(notes);

  return (
    <>
      {campaignDetails && (
        <LayoutDetailCampaign
          title={campaignDetails?.title}
          slug={[
            { label: "Campañas", href: "/campaigns" },
            { label: campaignDetails?.title },
          ]}
        >
          <section className={styles.container}>
            <div>
              <div className={styles.tarjet}>
                <Image
                  src={campaignDetails.img as StaticImport}
                  alt={campaignDetails.title}
                  width={357}
                  height={252}
                  className={styles.imgTarjet}
                />
                <p className={styles.p}>
                  Comparte el enlace para que puedan unirse a tu partida:{" "}
                </p>
                <div className={styles.copy}>
                  <p>https://proyecto-dnd.vercel.app/Golin123</p>
                  <button>
                    <Paper size={20} color="white" className={styles.paper} />
                  </button>
                </div>
                <p className={styles.invite}>o invitar amigos</p>
                <Button className={styles.button}>Iniciar partida</Button>
              </div>
              <div className={styles.infoParty}>
                <div>
                  <p className={styles.create}>Creado por Jhon Doe</p>
                  <p className={styles.hours}>Horas jugadas: 14</p>
                  <p className={styles.lastSesion}>Última sesión: 28/02/2024</p>
                </div>
                <div className={styles.modify}>
                  <button className={styles.cargarImgaen}>
                    Cargar imágenes
                  </button>
                  <div className={styles.buttons}>
                    <button className={styles.buttonELiminateEdit}>
                      <Eliminate size={20} />
                    </button>
                    <button className={styles.buttonELiminateEdit}>
                      <Edit size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.otherDetails}>
              <div className={styles.carousel}>
                <Carousel itemsImg={ItemsImgCarousel} />
              </div>
              <div className={styles.players}>
                {ItemsPlayers.map((player, index) => (
                  <PlayerCampaign
                    key={index}
                    name={player.name}
                    rol={player.rol}
                    icon={player.icon}
                    characters={player.characters}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className={styles.description}>
            <h2 className={styles.titleDesciption}>{campaignDetails.title}</h2>
            <Accordion maxCharacters={100}>
              <p className={styles.textDescription}>
                {campaignDetails.description}
              </p>
            </Accordion>
          </section>
          <section className={styles.AllCharactersContainer}>
            <div className={styles.space}></div>
            <button
              className={styles.buttonCharacters}
              style={{
                backgroundColor: show
                  ? "var(--background-light)"
                  : "var(--black-button-light)",
              }}
              onClick={handleClick}
            >
              Personajes
            </button>
            <button
              className={styles.buttonNPCs}
              style={{
                backgroundColor: show
                  ? "var(--black-button-light)"
                  : "var(--background-light)",
              }}
              onClick={handleClick}
            >
              NPCs
            </button>
            {show ? (
              <div className={styles.AllCharacters}>
                <GetAllCardsCharacters />
              </div>
            ) : (
              <div className={styles.AllNPCs}>
                <GetAllCardsCharacters />
              </div>
            )}
          </section>
          <section className={styles.notesContainer}>
            <div className={styles.title}>
              <h2>Notas de la campaña</h2>
              <button onClick={handleClickNote} id="newNote">
                <Add color="#FFFFFF" />
              </button>
            </div>
            <hr />
            {showNewNote ? (
              <div>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <TextArea
                    name="description"
                    placeholder="Escribe aquí..."
                    required
                    disableResize
                    className={styles.textArea}
                  />
                  <Button type="submit">Agregar nueva Nota</Button>
                </form>
              </div>
            ) : (
              ""
            )}
            {notes.length > 0 ? (
              <div>
                <div
                  className={styles.accordion}
                  onClick={toggleNotes}
                >
                  <div style={{ marginRight: "8px" }}>
                    {showNotes ? <Up size={20} /> : <Down size={20} />}
                  </div>
                  <div>Notas</div>
                </div>
                {showNotes && <p>{notes[0]}</p>}
              </div>
            ) : (
              <div className={styles.sinNotas}>
                <p>Agrega nuevas notas para tu campaña!</p>
              </div>
            )}
          </section>
        </LayoutDetailCampaign>
      )}
    </>
  );
};

export default CampaignDetail;
