import { memo } from "react"
import { useNavigate } from "react-router-dom"
import { Menu } from "lucide-react"
import { clsx } from "clsx"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu.jsx"

import DevamsLogo from "@/src/assets/images/DevamsLogo1.jpeg"

import {
    URL_HOME_SCREEN,
    URL_PRODUCT_LIST,
} from "@/src/assets/constants/SitePath"

function Header(props) {
    const navigate = useNavigate()

    const NAV_MENU = [
        {
            title: "Home",
            action: () => navigate(URL_HOME_SCREEN),
            disabled: false
        },
        {
            title: "Products",
            action: () => navigate(URL_PRODUCT_LIST),
            disabled: false
        },
        {
            title: "About Us",
            action: () => { },
            disabled: false
        },
        {
            title: "Brochure",
            action: () => { },
            disabled: false
        },
        {
            title: "Contact Us",
            action: () => { },
            disabled: false
        },
    ]

    return (
        <div className={clsx(props.className, "flex justify-between items-center self-stretch fixed top-0 w-full z-10 bg-white drop-shadow-xl")}>
            <img
                src={DevamsLogo}
                alt="Devams"
                className="w-28 h-16"
            />

            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {
                            NAV_MENU.map(menu => (
                                <DropdownMenuItem
                                    key={menu.title}
                                    onClick={menu.action}
                                    disabled={menu.disabled}
                                >
                                    {menu.title}
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="font-medium hidden md:flex justify-end items-center w-100">
                {
                    NAV_MENU.map((menu, index) => (
                        <span
                            key={index + menu.title}
                            className="md:text-base lg:text-lg hover:bg-gray-100 hover:cursor-pointer hover:rounded-lg px-5 py-2 min-w-fit"
                            onClick={menu.action}
                        >
                            {menu.title}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Header)
