import React, { FC } from "react";

import styles from "./multiCheckBox.module.css";

interface MultiCheckBoxPropType {}

const MultiCheckBox: FC<MultiCheckBoxPropType> = ({}) => {
  return (
    <>
      <div className={styles.multiCheckBox_contianer}>MultiCheckBox</div>
    </>
  );
};

export default MultiCheckBox;
