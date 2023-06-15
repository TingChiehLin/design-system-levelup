import React, { FC, FormEvent } from "react";

import styles from "./checkbox.module.css";

interface CheckBoxTypeProps {
  id: string;
  isChecked: boolean;
  isDisable?: boolean;
  labelText: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<CheckBoxTypeProps> = ({
  id,
  isChecked,
  isDisable,
  labelText,
  ...props
}) => {
  return (
    <>
      <div className={styles.container}>
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          disabled={isDisable}
          {...props}
          className={styles.checkbox}
        />
        <label className={styles.label} htmlFor={id}>
          {labelText}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
