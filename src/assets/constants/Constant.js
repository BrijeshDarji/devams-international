/**
 *  @description This file contains all system constants.
 */

import ExportShipImage from "../images/ExportShip.jpg"
import WholeSpicesImage from "../images/WholeSpices.jpg"
import SpicesPowerImage from "../images/SpicesPower.jpg"

export const NAV_MENU = [
    "Home",
    "Product",
    "About Us",
    "Brochure",
    "Contact Us",
]
export const CAROUSEL_IMAGES = [
    {
        src: ExportShipImage,
        alt: "ExportShipImage",
        text: {
            header: "Devams International",
            description: "Devams International provides spices export as whole product and powder all over the world."
        }
    },
    {
        src: WholeSpicesImage,
        alt: "WholeSpicesImage",
        text: {
            header: "Whole Spices",
            description: "At our core, we specialize in offering a diverse array of Whole Spices from around the world, all at competitive prices, ensuring effectiveness in every transaction."
        }
    },
    {
        src: SpicesPowerImage,
        alt: "SpicesPowerImage",
        text: {
            header: "Spices Power",
            description: "At our core, we specialize in offering a diverse array of Spices Power from around the world, all at competitive prices, ensuring effectiveness in every transaction."
        }
    },
]
