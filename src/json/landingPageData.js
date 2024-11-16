/* eslint-disable import/extensions */

// Services Img Imports
import Web from "../assets/images/Services/Web.png";
import Mobile from "../assets/images/Services/Mobile.png";
import UIUX from "../assets/images/Services/Design.png";
import Web2 from "../assets/images/Services/Web2.png";
import Mobile3 from "../assets/images/Services/Mobile3.png";
import UIUX3 from "../assets/images/Services/Design3.png";

// Advantages
import Communicative from "../assets/images/Advantages/Communicative.png";
import Collaborative from "../assets/images/Advantages/Collaborative.png";
import Management from "../assets/images/Advantages/Management.png";
import Favorite from "../assets/images/Advantages/Favorite.png";

import JalMayo from "../assets/images/Portfolio/jal_mayo.jpg";
import DarkSoy from "../assets/images/Portfolio/dark_soy.jpg";
import BarMayo from "../assets/images/Portfolio/bar_mayo.jpg";
import EggMayo from "../assets/images/Portfolio/egg_mayo.jpg";
import ItaMayo from "../assets/images/Portfolio/ItaMayo.jpg";
import GarMayo from "../assets/images/Portfolio/GarMayo.jpg";
import TandMayo from "../assets/images/Portfolio/TandMayo.jpg";
import PeriMayo from "../assets/images/Portfolio/PeriMayo.jpg";
import Sandwhich from "../assets/images/Portfolio/Sandwich.jpg";
import Classic from "../assets/images/Portfolio/Classic.jpg";
import GreChil from "../assets/images/Portfolio/GreenChilli.jpg";
import PizPas from "../assets/images/Portfolio/PizzPas.jpg";
import MintMayo from "../assets/images/Portfolio/MintMayo.jpg";
import Schez from "../assets/images/Portfolio/Schez.jpg";
import Ginger from "../assets/images/Portfolio/Ginger.jpg";
import Garlic from "../assets/images/Portfolio/Garlic.jpg";
import RedCHill from "../assets/images/Portfolio/RedChill.jpg";
import TomKet from "../assets/images/Portfolio/TomKet.jpg";

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
    id: "sauce_001",
    title: "Red Chilly Sauce",
    type: "Sauces",
    imageUrl: RedCHill,
  },
  {
    id: "sauce_002",
    title: "Green Chilly Sauce",
    type: "Sauces",
    imageUrl: GreChil,
  },
  {
    id: "sauce_003",
    title: "Soya Sauce",
    type: "Sauces",
    imageUrl: DarkSoy,
  },
  {
    id: "sauce_004",
    title: "Sezchwan Sauce",
    type: "Sauces",
    imageUrl: Schez,
  },
  {
    id: "sauce_009",
    title: "Tomato Ketchup",
    type: "Sauces",
    imageUrl: TomKet,
  },
  {
    id: "sauce_011",
    title: "Pizza Sauce",
    type: "Sauces",
    imageUrl: PizPas,
  },
  {
    id: "paste_001",
    title: "Garlic Paste",
    type: "Chutneys and Paste",
    imageUrl: Garlic,
  },
  {
    id: "paste_002",
    title: "Ginger Paste",
    type: "Chutneys and Paste",
    imageUrl: Ginger,
  },
  {
    id: "mayo_001",
    title: "Eggless Mayonnaise",
    type: "Mayonnaise",
    imageUrl: EggMayo,
  },
  {
    id: "mayo_002",
    title: "Tandoori Mayonnaise",
    type: "Mayonnaise",
    imageUrl: TandMayo,
  },
  {
    id: "mayo_003",
    title: "Peri Peri Mayonnaise",
    type: "Mayonnaise",
    imageUrl: PeriMayo,
  },
  {
    id: "mayo_004",
    title: "Garlic Mayonnaise",
    type: "Mayonnaise",
    imageUrl: GarMayo,
  },
  {
    id: "mayo_005",
    title: "Mint Mayonnaise",
    type: "Mayonnaise",
    imageUrl: MintMayo,
  },
  {
    id: "mayo_006",
    title: "Italian Herb Mayonnaise",
    type: "Mayonnaise",
    imageUrl: ItaMayo,
  },
  {
    id: "mayo_007",
    title: "Barbeque Mayonnaise",
    type: "Mayonnaise",
    imageUrl: BarMayo,
  },
  {
    id: "mayo_009",
    title: "Jalapeno Cheese Mayonnaise",
    type: "Mayonnaise",
    imageUrl: JalMayo,
  },
  {
    id: "mayo_010",
    title: "Sandwich Spread",
    type: "Mayonnaise",
    imageUrl: Sandwhich,
  },
  {
    id: "mayo_011",
    title: "Egg Mayonnaise",
    type: "Mayonnaise",
    imageUrl: Classic,
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
  ],
];
