/**
 *  @description This file contains all system constants.
 */

import ExportShipImage from "../images/ExportShip.jpg"
import WholeSpicesImage from "../images/WholeSpices.jpg"
import SpicesPowerImage from "../images/SpicesPower.jpg"
import FSSAI from "../images/fssai.jpg"
import GSTC from "../images/gstc.jpg"
import MSME from "../images/msme.png"
import FIEO from "../images/fieo.jpg"
import IEC from "../images/iec.png"
import SpicesBoard from "../images/spicesboard.png"
import UdyogAadhaar from "../images/udyogaadhaar.png"

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

export const CERTIFICATES = [
    {
        src: FSSAI,
        alt: "FSSAI Certificate",
    },
    {
        src: GSTC,
        alt: "GSTC Certificate",
    },
    {
        src: MSME,
        alt: "MSME Certificate",
    },
    {
        src: FIEO,
        alt: "FIEO Certificate",
    },
    {
        src: IEC,
        alt: "IEC Certificate",
    },
    {
        src: SpicesBoard,
        alt: "SpicesBoard Certificate",
    },
    {
        src: UdyogAadhaar,
        alt: "UdyogAadhaar Certificate",
    },
]

// Css style classnames for sections
export const headerSpacing = "py-2 px-12 lg:px-20"

export const footerSectionHeaderCss = "flex gap-2 mb-5 font-semibold text-lg"
export const footerSectionUlCss = "flex flex-col gap-3"
export const footerSectionLiCss = "flex gap-3"

export const sectionSpacing = "w-full       gap-10 lg:gap-20      px-14 lg:px-20 py-16 "
export const sectionCss = "flex flex-col justify-center items-center " + sectionSpacing
export const sectionHeaderCss = "font-semibold       text-2xl md:text-3xl lg:text-4xl "


// Contact details
export const EMAIL = "devamsinternational@gmail.com"
export const PHONE_NUMBER = "6353595838"
export const TIME = "Mon - Sun: 9AM to 9PM"
export const LOCATION = "Dehgam - 382305, Gandhinagar, Gujarat, India"
