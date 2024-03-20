"use client";

import Add from "@/components/icons/ui/Add";
import Minus from "@/components/icons/ui/Minus";
import React, { useState } from "react";
import styles from "./CardItem.module.css";
import Button from "@/components/common/buttons/Button";
import Edit from "@/components/icons/ui/Edit";
import Eliminate from "@/components/icons/ui/Eliminate";

type CardItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: any;
  equip: boolean;
  edit: boolean;
  add: boolean
};

const CardItem = ({
  icon,
  title,
  subtitle,
  content,
  equip,
  edit,
  add
}: CardItemProps) => {
  const [open, setOpen] = useState(false);
  const [equipped, setEquiped] = useState(false);

  return (
    <div className={styles.cardItem}>
      <div
        className={styles.closedCard}
        style={
          open
            ? {
                borderBottom: "1px solid #e61720",
                paddingBottom: "0.5rem",
              }
            : {}
        }
      >
        {icon}
        <div className={styles.titleBox}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        {add && <Button className={styles.addBtn}>Agregar</Button>}
        {open ? (
          <button onClick={() => setOpen(false)} className={styles.openBtn}>
            <Minus size={20} className={styles.openIcon} />
          </button>
        ) : (
          <button onClick={() => setOpen(true)} className={styles.openBtn}>
            <Add size={20} className={styles.openIcon} />
          </button>
        )}
      </div>
      {open && (
        <div className={styles.openedCard}>
          <div className={styles.content}>
            {Object.keys(content).map((key) => (
              <p key={key}>
                <strong>{key}: </strong>
                {content[key]}
              </p>
            ))}
          </div>
          {
            equip && (
              <div className={styles.equip}>
                <Button onClick={() => setEquiped(!equipped)} className={equipped ? styles.btnEquipped : ""}>
                  { equipped ? "Equipado" : "Equipar" }
                </Button>
              </div>
            )
          }
          {
            edit && (
              <div className={styles.editBox}>
                <button>
                  <Edit size={24} />
                  Editar
                </button>
                <button>
                  <Eliminate size={24} />
                  Eliminar
                </button>
              </div>
            )
          }
        </div>
      )}
    </div>
  );
};

export default CardItem;
