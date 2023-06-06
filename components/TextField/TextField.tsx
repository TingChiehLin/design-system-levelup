"use client";

import React, { FC, FormEvent } from "react";

import styles from "./textField.module.css";

type VariantType = "standard" | "alert" | "error";

export interface TextFieldTypeProps {
  id: string;
  labelText: string;
  variant: VariantType;
  value: string;
  placeHolder: string;
  disabled: boolean;
  readOnly: boolean;
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
  ...props
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
      <input
        className={`${styles.textField_input} ${
          variant === "error" && styles.textField_error
        }`}
        type="text"
        id={id}
        value={value}
        placeholder={placeHolder}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default TextField;

/*
- default
- hover, focus
- disabled

- readOnly.

- With label
- Without label
*/
