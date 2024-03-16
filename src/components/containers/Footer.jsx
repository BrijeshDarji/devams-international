import { memo } from "react"
import { NavLink } from "react-router-dom"
import { clsx } from "clsx"

import {
    Facebook,
    Instagram,
    Twitter,
    Mail,
    PhoneCall,
    Clock9,
    MapPin,
    Link,
    Contact,
} from "lucide-react"

import DevamsLogoTransparent from "@/src/assets/images/DevamsLogoTransparent.png"

import {
    EMAIL,
    LOCATION,
    NAV_MENU,
    PHONE_NUMBER,
    TIME,
    footerSectionHeaderCss,
    footerSectionLiCss,
    footerSectionUlCss,
    sectionSpacing,
} from "../../assets/constants/Constant"

import { formatIndianPhoneNumber } from "../../lib/utils"

const SOCIAL_MEDIA_LINKS = [
    {
        icon: Facebook,
    },
    {
        icon: Instagram,
    },
    {
        icon: Twitter,
    },
]

function Footer() {
    return (
        <div className={clsx(sectionSpacing, "flex flex-col md:flex-row justify-around bg-primary text-white")}>
            <div>
                <p className={clsx(footerSectionHeaderCss)}>
                    LINKS <Link />
                </p>

                <div>
                    <ul className={clsx(footerSectionUlCss)}>
                        {NAV_MENU.map(menu => (
                            <NavLink
                                to={"/"}
                                key={menu}
                                className="hover:underline"
                            >
                                {menu}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <img
                    src={DevamsLogoTransparent}
                    alt="DevamsLogo"
                    className="w-28 h-16"
                />

                <div className="flex gap-5">
                    {SOCIAL_MEDIA_LINKS.map((ele, index) => {
                        const Icon = ele.icon

                        return (
                            <Icon
                                key={index}
                                className="bg-white text-primary rounded-full p-1 w-8 h-8 cursor-pointer drop-shadow-xl hover:drop-shadow-2xl"
                            />
                        )
                    })}
                </div>
            </div>

            <div>
                <p className={clsx(footerSectionHeaderCss)}>
                    CONTACT DETAILS <Contact />
                </p>

                <div>
                    <ul className={clsx(footerSectionUlCss)}>
                        <li className={clsx(footerSectionLiCss)}>
                            <Mail />
                            <a
                                className="hover:underline"
                                href={`mailto:${EMAIL}`}
                            >
                                {EMAIL}
                            </a>
                        </li>

                        <li className={clsx(footerSectionLiCss)}>
                            <PhoneCall />
                            <a
                                className="hover:underline"
                                href={`tel:+91${PHONE_NUMBER}`}
                            >
                                {formatIndianPhoneNumber(PHONE_NUMBER)}
                            </a>
                        </li>

                        <li className={clsx(footerSectionLiCss)}>
                            <Clock9 />
                            {TIME}
                        </li>

                        <li className={clsx(footerSectionLiCss)}>
                            <MapPin />
                            {LOCATION}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)
