"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import "./globals.css";
import styles from "./page.module.css";

import { FiSearch } from "react-icons/fi";

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
        label={"Book Store"}
        variant={"error"}
        value={searchInputText}
        placeHolder={"Please Input Search Text"}
        error={"Your input format is incorrect"}
        disabled={false}
        readOnly={false}
        icon={<FiSearch className="textField_icon" />}
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
