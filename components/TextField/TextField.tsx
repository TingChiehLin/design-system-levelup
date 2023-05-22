"use client";

import React, { FC, FormEvent } from "react";

import styles from "./textField.module.css";

type VariantType = "standard" | "filled" | "alert" | "error";

export interface TextFieldTypeProps {
  id: string;
  labelText: string;
  variant: VariantType;
  value: string;
  placeHolder: string;
  disabled: boolean;
  readOnly: boolean;
  icon: React.ReactNode;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldTypeProps> = ({
  id,
  labelText,
  variant,
  value,
  placeHolder,
  disabled,
  readOnly,
  icon,
  onChange,
}) => {
  return (
    <div className={styles.textField_container}>
      <label
        className={`${styles.textField_label} ${
          variant === "error" && styles.textFieldLebel_error
        }`}
        htmlFor={id}
      >
        {labelText}
      </label>
      {icon}
      <input
        className={`${styles.textField_input} ${
          variant === "error" && styles.textField_error
        }`}
        type="text"
        id={id}
        value={value}
        placeholder={placeHolder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
