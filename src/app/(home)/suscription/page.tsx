"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import itemsSuscription from "./itemsSuscription";
import Up from "@/components/icons/ui/Up";
import Down from "@/components/icons/ui/Down";
import Button from "@/components/common/buttons/Button";
import Image from "next/image";
import Close from "@/components/icons/ui/Close";
import Done from "@/components/icons/ui/Done";

const Suscription = () => {

    const [expandedtexts, setExpandedtexts] = useState<Set<number>>(
        new Set()
    );

    const toggleSessions = (index: number) => {
        setExpandedtexts((prevSet) => {
            const newSet = new Set(prevSet);
            newSet.has(index) ? newSet.delete(index) : newSet.add(index);
            return newSet;
        });
    };

    const [isMonthlyActive, setIsMonthlyActive] = useState(true);
    const [showProContent, setShowProContent] = useState(true); // Estado para controlar la visualización del contenido Pro

    const handleMonthlyClick = () => {
        setIsMonthlyActive(true);
        setShowProContent(true); // Mantener el contenido Pro visible al hacer clic en "Pagar mensualmente"
    };

    const handleAnnualClick = () => {
        setIsMonthlyActive(false);
        setShowProContent(false); // Ocultar el contenido Pro al hacer clic en "Pagar anualmente"
    };
    

    const listSuscriptionFree = [
        {
            id: 1,
            icon:  <Done size={"20px"}/>,
            text: "100 MB de espacio de almacenamiento",
        },
        {
            id: 2,
            icon:  <Done size={"20px"}/>,
            text: "Alojamiento en línea dedicado",
        },
        {
            id: 3,
            icon:  <Done size={"20px"}/>,
            text: "Más de 1200 sistemas de juego",
        },
        {
            id: 4,
            icon:  <Done size={"20px"}/>,
            text: "En Busca de Grupo",
        },
        {
            id: 5,
            icon:  <Close size={"20px"}/>,
            text: "Acceso total a Personajes",
        },
        {
            id: 6,
            icon:  <Close size={"20px"}/>,
            text: "Sin anuncios en la pantalla de carga",
        },
        {
            id: 7,
            icon:  <Close size={"20px"}/>,
            text: "Hojas de personaje personalizadas",
        },
        {
            id: 8,
            icon:  <Close size={"20px"}/>,
            text: "Acceso anticipado",
        },

    ]
    const listSuscriptionPro = [
        {
            id: 1,
            icon:  <Done size={"20px"}/>,
            text: "100 MB de espacio de almacenamiento",
        },
        {
            id: 2,
            icon:  <Done size={"20px"}/>,
            text: "Alojamiento en línea dedicado",
        },
        {
            id: 3,
            icon:  <Done size={"20px"}/>,
            text: "Más de 1200 sistemas de juego",
        },
        {
            id: 4,
            icon:  <Done size={"20px"}/>,
            text: "En Busca de Grupo",
        },
        {
            id: 5,
            icon:  <Done size={"20px"}/>,
            text: "Acceso total a Personajes",
        },
        {
            id: 6,
            icon:  <Done size={"20px"}/>,
            text: "Sin anuncios en la pantalla de carga",
        },
        {
            id: 7,
            icon:  <Done size={"20px"}/>,
            text: "Hojas de personaje personalizadas",
        },
        {
            id: 8,
            icon:  <Done size={"20px"}/>,
            text: "Acceso anticipado",
        },

    ]

    return (
        <section className={styles.list}>
            <section className={styles.header}>
                <div className={styles.title}>
                    <h2>Suscripción</h2>
                </div>
            </section>
            <hr />
            <section className={styles.container}>
                <div className={styles.containerBtn}>
                    <Button className={isMonthlyActive ? styles.buttonActive : styles.button1} onClick={handleMonthlyClick}>
                        Pagar mensualmente
                    </Button>
                    <Button className={!isMonthlyActive ? styles.buttonActive : styles.button1} onClick={handleAnnualClick}>
                        Pagar anualmente
                    </Button>
                </div>
                <div className={styles.containerTarjet}>
                    <div className={styles.tarjet}>
                        <p className={styles.p}>
                            Básica
                        </p>
                        <p className={styles.valor}>
                            Gratuita
                        </p>
                        <div className={styles.pro}>
                            <hr />
                            <Image
                                src={"/assets/home/suscription/free.png"}
                                alt={"freeImg"}
                                width={80}
                                height={80}
                            />
                            <hr />
                        </div>
                        {listSuscriptionFree.map((item, index) => (
                            <div key={index} className={styles.item}>
                                <div className={styles.inviteIcon}>{item.icon} </div>
                                <div className={styles.invite}>{item.text} </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.tarjet}>
                        <div className={styles.proTitle}>
                            <p className={styles.p}>
                            Pro
                            </p>
                            <p className={styles.pPro}>
                            {isMonthlyActive ? "" : "$8.33/mes"}
                            </p>
                        </div>
                        <div className={styles.valuePro} >
                            <p className={styles.valor}>
                            {isMonthlyActive ? "$9.99" : "$99.99"}
                            </p>
                            <p className={styles.valor2}>
                            {isMonthlyActive ? "$10.99" : "$109.99"}
                            </p>
                        </div>
                        <div className={styles.pro}>
                            <hr />
                            <Image
                                src={"/assets/home/suscription/pro.png"}
                                alt={"proImg"}
                                width={80}
                                height={80}
                            />
                            <hr />
                        </div>
                        {listSuscriptionPro.map((item, index) => (
                                <div key={index} className={styles.item}>
                                    <div className={styles.invite}>{item.icon} </div>
                                    <div className={styles.invite}>{item.text} </div>
                                </div>
                            ))}
                        
                        
                    </div>
                </div>
                <div className={styles.containerBtn}>
                    <Button className={styles.button1} >
                        Regalar suscripción
                    </Button>
                    <Button className={styles.button2} >
                        Suscribir
                    </Button>
                </div>
            </section>














            <div className={styles.titleMain}>
                <h4>Preguntas frecuentes</h4>
            </div>
            <div className={styles.items}>
                {itemsSuscription.map((item, index) => {
                    const isExpanded = expandedtexts.has(index);

                    return (
                        <div key={index}>
                            <div
                                className={styles.accordion}
                                onClick={() => toggleSessions(index)}
                                style={{
                                    borderRadius: "5px",
                                }}
                            >
                                <div>{item.title}</div>
                                <div style={{ display: "flex" }}>
                                    {isExpanded ? <Up size={20} /> : <Down size={20} />}
                                </div>
                            </div>
                            {isExpanded && (
                                <div className={styles.notes}>
                                    <p>{item.text}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Suscription;