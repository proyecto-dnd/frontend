"use client";

import React, { useState } from "react";
import styles from "./ExpandMenu.module.css";
import Add from "@/components/icons/ui/Add";
import Minus from "@/components/icons/ui/Minus";

import Eliminate from "@/components/icons/ui/Eliminate";
import Edit from "@/components/icons/ui/Edit";
import Button from "@/components/common/buttons/Button";

interface ItemContent {
  "Tiempo de lanzamiento": string;
  Alcance: string;
  Duración: string;
  Descripción: string;
}

export type menuProps = {
  icon: React.ReactNode;
  name: string;
  // type: string;
  // level: number;
  subtitle: string;
  content: any;
  additionalButton?: React.ReactNode;
  actionButtons?: boolean;
  onDelete?: () => void;
  onEdit?: () => void;
  equip?: boolean;
  isEquipped?: boolean;
  quantity?: number;
};

const ExpandMenu = ({
  icon,
  name,
  // type,
  subtitle,
  content,
  additionalButton,
  actionButtons = true,
  onDelete,
  onEdit,
  equip,
  quantity,
  isEquipped,
}: menuProps) => {
  const [openDescription, setOpenDescription] = useState(false);
  const [equipped, setEquipped] = useState(isEquipped);
  // const subtitle = `Nivel ${level}, ${type}`;

  return (
    <div className={styles.itemContainer}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>
          {icon}
          <div className={styles.itemLevel}>
            <h3>
              {name}{" "}
              <span
                className={styles.quantity}
                style={{
                  display:
                    quantity !== undefined && quantity > 1 ? "inline" : "none",
                }}
              >
                ({quantity})
              </span>
            </h3>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className={styles.menuButtons}>
          {additionalButton && <div>{additionalButton}</div>}
          <div onClick={() => setOpenDescription(!openDescription)}>
            {openDescription ? (
              <Minus className={styles.addButton} />
            ) : (
              <Add className={styles.addButton} />
            )}
          </div>
        </div>
      </div>

      {openDescription && (
        <div className={styles.itemDescription}>
          <hr />
          {Object.keys(content).map(
            (key) =>
              content[key] && (
                <div className={styles.descriptionLine} key={key}>
                  <p>
                    {key}: <span>{content[key as keyof ItemContent]}</span>
                  </p>
                </div>
              )
          )}
          {equip && (
            <div className={styles.equip}>
              <Button
                onClick={() => setEquipped(!equipped)}
                className={equipped ? styles.btnEquipped : ""}
              >
                {equipped ? "Equipado" : "Equipar"}
              </Button>
            </div>
          )}

          {actionButtons && (
            <div className={`${styles.buttons} ${styles.menuButtons}`}>
              <button onClick={onEdit}>
                <Edit size={24} />
                Editar
              </button>
              <button onClick={onDelete}>
                <Eliminate size={24} />
                Eliminar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExpandMenu;
