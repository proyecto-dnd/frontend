"use client";

import React from "react";
import styles from "./BoxManual.module.css";
import Link from "next/link";
import Button from "@/components/common/buttons/Button";

export type BoxManualProps = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

const BoxManual = ({ icon, title, link }: BoxManualProps) => {
  return (
    <Link href={link} className={styles.BoxManual} target="_blank">
      <div className={styles.icon}>{icon}</div>
      <p>{title}</p>
    </Link>
  );
};

export default BoxManual;
