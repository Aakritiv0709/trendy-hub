import React from "react";
import FooterStyles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footer_column}>
        <h3>Column 1</h3>
        <p>Content for column 1</p>
      </div>
      <div className={FooterStyles.footer_column}>
        <h3>Column 2</h3>
        <p>Content for column 2</p>
      </div>
      <div className={FooterStyles.footer_column}>
        <h3>Column 3</h3>
        <p>Content for column 3</p>
      </div>
      <div className={FooterStyles.footer_column}>
        <h3>Column 4</h3>
        <p>Content for column 4</p>
      </div>
    </footer>
  );
};

export default Footer;
