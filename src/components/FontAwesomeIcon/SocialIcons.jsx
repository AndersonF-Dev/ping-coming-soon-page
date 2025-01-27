import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: hsl(223, 87%, 63%);
    font-size: 17px;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid hsl(223, 100%, 88%);

    &:hover {
      color: #ffffff;
      background-color:  hsl(223, 87%, 63%);
      border: 1px solid hsl(223, 87%, 63%);
    }
  }
`;

const SocialIcons = () => {
  return (
    <IconWrapper>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </IconWrapper>
  );
};

export default SocialIcons;
