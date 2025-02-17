import React from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "./Header.module.css";

const LowerHeader = () => {
  return (
    <div className={styles.lower_container}>
      <ul>
        <li>
          <IoMdMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
