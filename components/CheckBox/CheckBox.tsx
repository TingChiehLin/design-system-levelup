import React, { FC, FormEvent } from "react";

import styles from "./checkbox.module.css";

interface CheckBoxTypeProps {
  id: string;
  isChecked: boolean;
  isDisable?: boolean;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  labelText: string;
}

const CheckBox: FC<CheckBoxTypeProps> = ({
  id,
  isChecked,
  isDisable,
  onChange,
  labelText,
}) => {
  return (
    <>
      <div className={styles.checkbox_container}>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={onChange}
          className={styles.checkbox_checkbox}
        />
        <label className={styles.checkbox_label} htmlFor={id}>
          {labelText}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
