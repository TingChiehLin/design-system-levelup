"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

import styles from "./page.module.css";

import TextField from "@/components/TextField/TextField";

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
        variant={"error"}
        value={searchInputText}
        placeHolder={"Please Input Search Text"}
        disabled={false}
        readOnly={false}
        onChange={handleOnChangeInput}
      />
    </main>
  );
}