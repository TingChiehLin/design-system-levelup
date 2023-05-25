"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import styles from "./page.module.css";

import TextField from "@/components/TextField/TextField";
import CheckBox from "@/components/CheckBox";

export default function Home() {
  const [searchInputText, setSearchInputText] = useState<string>("");
  const [optIn, setOptIn] = useState<boolean>(false);

  const handleOnChangeInput = (e: FormEvent<HTMLInputElement>) => {
    setSearchInputText(e.currentTarget.value);
    console.log("searchInputText:", e.currentTarget.value);
  };

  const handleOnChangeCheckbox = (e: FormEvent<HTMLInputElement>) => {
    setOptIn(e.currentTarget.checked);
  };

  return (
    <main className={styles.main}>
      <TextField
        id={"book-search-input"}
        labelText={"Book Store"}
        variant={"standard"}
        value={searchInputText}
        placeHolder={"Please Input Search Text"}
        disabled={false}
        readOnly={false}
        onChange={handleOnChangeInput}
      />
      <CheckBox
        id={"opt-in-checkbox"}
        isChecked={optIn}
        onChange={handleOnChangeCheckbox}
        labelText={"The USA"}
      />
    </main>
  );
}
