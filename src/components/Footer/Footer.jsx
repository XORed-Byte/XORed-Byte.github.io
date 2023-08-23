import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <p>Copyright © 2023 David Olsson. All rights reserved.</p>
      <p onClick={() => (window.location = "mailto:olssondavid04@gmail.com")}>
        Contact Me
      </p>
    </div>
  );
};

export default Footer;
