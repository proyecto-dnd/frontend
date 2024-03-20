import React from "react";
import Add from "@/components/icons/ui/Add";
import styles from "./EquipmentColumn.module.css";

type EquipmentColumnProps = {
  title: string;
  children: React.ReactNode
  add: boolean
};

const EquipmentColumn = ({ title, children, add }: EquipmentColumnProps) => {
  return (
    <div className={styles.equipmentColumn}>
      <div className={styles.titleBox}>
        <p>{title}</p>
        {add && <Add className={styles.icon} color="#FFFFFF" size={24} />}    
      </div>
      <div className={styles.equipmentCards}>
        {children}
      </div>
    </div>
  );
};

export default EquipmentColumn;
