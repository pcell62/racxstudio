/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";
import Web2 from "../assets/images/Services/Web2.png";
import Mobile3 from "../assets/images/Services/Mobile3.png";
import UIUX3 from "../assets/images/Services/Design3.png";

// Portfolio Img Imports
import Aura from "../assets/images/Portfolio/Aura.png";
import Surtido from "../assets/images/Portfolio/Surtido.png";
import ManagementApp from "../assets/images/Portfolio/ManagementApp.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

import JalMayo from "../assets/images/Portfolio/jal_mayo.jpg";
import DarkSoy from "../assets/images/Portfolio/dark_soy.jpg";
import BarMayo from "../assets/images/Portfolio/bar_mayo.jpg";

export const Services = [
  {
    title: "Sauces",
    imageUrl: Web,
    animation: "left",
    imageUrl2: Web2,
  },
  {
    title: "Ready to cook pastes",
    imageUrl: Mobile,
    animation: "up",
    imageUrl2: Mobile3,
  },
  {
    title: "Mayonnaise",
    imageUrl: UIUX,
    animation: "right",
    imageUrl2: UIUX3,
  },
];

export const Portfolios = [
  {
    id: "asd1293uasdads1",
    title: "Jalapeno Mayonnaise",
    imageUrl: JalMayo,
    type: "Mayonnaise",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Dark Soy Sauce",
    imageUrl: DarkSoy,
    type: "Sauces",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Barbeque Mayonnaise",
    imageUrl: BarMayo,
    type: "Mayonnaise",
  },
  {
    id: "asd1293ufgdfgs4",
    title: "Aura",
    imageUrl: Aura,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15176338-Aura-Website-Main-Page",
  },
  {
    id: "asd1293ulskmnb5",
    title: "Surtido Rico",
    imageUrl: Surtido,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15173118-Surtido-Rico",
  },
  {
    id: "asd1293ulkmnbj6",
    title: "Courses Management",
    imageUrl: ManagementApp,
    type: "Website",
    responsibility: ["Web Development", "UI/UX Design"],
    credit:
      "https://dribbble.com/shots/15197890-Courses-Management-and-Promoting-Web-App",
  },
];

export const Advantages = [
  [
    {
      title: "Communicative",
      description:
        "We communicate our project ideas and progress to make it clear.",
      imageUrl: Communicative,
    },
    {
      title: "Management",
      description:
        "We manage our project properly to make our project done well.",
      imageUrl: Management,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
  [
    {
      title: "Collaborative​",
      description:
        "Our team are very collaborative to make our project done well.",
      imageUrl: Collaborative,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
    {
      title: "Favorite",
      description: "We've did so many project and all of our client love it.",
      imageUrl: Favorite,
    },
  ],
];
