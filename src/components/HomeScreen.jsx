import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Menu } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu.jsx"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/components/ui/carousel"

import { Button } from "@/src/components/ui/button"

import { CAROUSEL_IMAGES, NAV_MENU } from "../assets/constants/Constant"

import DevamsLogo from "../assets/images/DevamsLogo1.jpeg"
import HerbsAndSpicesImage from "../assets/images/HerbsAndSpices.png"

function HomeScreen() {
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            playOnInit: true,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
            stopOnLastSnap: false,
            stopOnFocusIn: false,
        })
    )

    return (
        <>
            <div className="py-2 px-12 md:px-20 flex justify-between items-center self-stretch fixed top-0 w-full z-10">
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

                <div className="font-medium hidden md:flex justify-around items-center w-100">
                    {
                        NAV_MENU.map(menu => (
                            <span
                                key={menu}
                                className="md:text-base lg:text-lg"
                            >
                                {menu}
                            </span>
                        ))
                    }
                </div>
            </div>

            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full h-96 lg:h-180 mt-20"
            >
                <CarouselContent>
                    {
                        CAROUSEL_IMAGES.map((imageInfo, index) => (
                            <>
                                <CarouselItem key={index}>
                                    <div className="relative">
                                        <img
                                            src={imageInfo.src}
                                            alt={imageInfo.alt}
                                            className="w-full h-96 lg:h-180 object-cover"
                                        />

                                        <div className="absolute w-3/4 p-6 border__image text-shadow shadow-[#00000040] text-white flex flex-col items-start leading-relaxed gap-6      left-6 md:left-12 lg:left-25        bottom-6 md:bottom-12 ">
                                            <div className="font-semibold       text-2xl md:text-4xl lg:text-5xl">
                                                {imageInfo.text.header}
                                            </div>

                                            <div className="text-base">
                                                {imageInfo.text.description}
                                            </div>

                                            <Button className="bg-primary hover:bg-primaryLight text-xs">
                                                View Products
                                            </Button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default HomeScreen
