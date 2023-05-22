import React, { FC, FormEvent } from "react";

import styles from "./checkbox.module.css";

interface CheckBoxTypeProps {
  id: string;
  isChecked: boolean;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  labelText: string;
}

const CheckBox: FC<CheckBoxTypeProps> = ({
  id,
  isChecked,
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
        />
        <label htmlFor={id}>{labelText}</label>
      </div>
    </>
  );
};

export default CheckBox;
