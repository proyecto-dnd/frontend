'use client'

import Input from "@/components/common/inputs/Input";
import styles from "./List.module.css";
import Search from "@/components/icons/ui/Search";
import Tune from "@/components/icons/ui/Tune";
import React, { useState } from "react";

export type ListProps = {
  title: string;
  children?: React.ReactNode;
  search: string;
  setSearch: (value: string) => void;
};

const List = (props: ListProps) => {

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value);
  }

  return (
    <section className={styles.list}>
      <section className={styles.header}>
        <div className={styles.title}>
          <h2>{props.title}</h2>
          <a href="#">(+)</a>
        </div>
        <div className={styles.searchContainer}>
          <Input className={styles.search} placeholder="Buscar" value={props.search} onChange={handleSearch}><Search /></Input>
          <button className={styles.filter}>
            <Tune />
          </button>
        </div>
      </section>
      <hr />
      <div className={styles.items}>
        {props.children}
      </div>
    </section>
  );
};

export default List;
