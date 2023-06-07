"use client";

import React, { FC, FormEvent } from "react";

import styles from "./textField.module.css";

type VariantType = "standard" | "filled" | "alert" | "error";

export interface TextFieldTypeProps {
  id: string;
  label: string;
  variant: VariantType;
  value: string;
  placeHolder: string;
  error: string;
  disabled: boolean;
  readOnly: boolean;
  icon: React.ReactNode;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldTypeProps> = ({
  id,
  label,
  variant,
  value,
  placeHolder,
  error,
  disabled,
  readOnly,
  icon,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label
        className={`${styles.textField_label} ${
          variant === "error" && styles.textFieldLebel_error
        }`}
        htmlFor={id}
      >
        {label}
      </label>
      {icon}
      <input
        className={`${styles.input} ${
          variant === "error" && styles.input_error
        }`}
        type="text"
        id={id}
        value={value}
        placeholder={placeHolder}
        disabled={disabled}
        onChange={onChange}
      />
      {variant === "error" && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
};

export default TextField;
