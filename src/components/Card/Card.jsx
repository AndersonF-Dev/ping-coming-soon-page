import React from "react";
import { CardWrapper, CardContent, CardTitle, CardInformacao, CardImagem, CardSubTitle, Cardfooter, Copyright } from "./styles";
import Input from "../Input/Input";
import logo from '../../img/illustration-dashboard.png';
import SocialIcons from "../FontAwesomeIcon/SocialIcons";


const Card = () => {
  return (
    <CardWrapper>
      <CardContent>
        <CardTitle>
            PING<span>.</span>

        </CardTitle>
        <CardSubTitle>
        <span>We are launching</span> soon!
        </CardSubTitle>
        <CardInformacao>
        Subscribe and get notified
        </CardInformacao>
        <Input />
        <CardImagem>
        <img src={logo} alt="Example"/>
        </CardImagem>
        <Cardfooter>
            <SocialIcons />
            <Copyright>

            © Copyright Ping. All rights reserved.
            </Copyright>
        </Cardfooter>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;