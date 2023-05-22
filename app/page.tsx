"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import "./globals.css";
import styles from "./page.module.css";

import { FiSearch } from "react-icons/fi";

import TextField from "@/components/TextField/TextField";
import CheckBox from "@/components/CheckBox/CheckBox";

export default function Home() {
  const [searchInputText, setSearchInputText] = useState<string>("");

  const handleOnChangeInput = (e: FormEvent<HTMLInputElement>) => {
    setSearchInputText(e.currentTarget.value);
    console.log("searchInputText:", e.currentTarget.value);
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
        icon={<FiSearch className="textField_icon" />}
        onChange={handleOnChangeInput}
      />
      <CheckBox />
    </main>
  );
}
