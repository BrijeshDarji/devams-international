import { memo } from "react"
import { Menu } from "lucide-react"
import { clsx } from "clsx"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu.jsx"

import DevamsLogo from "@/src/assets/images/DevamsLogo1.jpeg"

import { NAV_MENU } from "@/src/assets/constants/Constant"

function Header(props) {
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
                                <DropdownMenuItem key={menu}>
                                    {menu}
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="font-medium hidden md:flex justify-end items-center w-100">
                {
                    NAV_MENU.map(menu => (
                        <span
                            key={menu}
                            className="md:text-base lg:text-lg hover:bg-gray-100 hover:cursor-pointer hover:rounded-lg px-5 py-2 min-w-fit"
                        >
                            {menu}
                        </span>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Header)
