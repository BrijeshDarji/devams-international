import React, { useRef } from "react"
import { clsx } from "clsx"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/src/components/ui/carousel"

import { Button } from "@/src/components/ui/button"

import ContactForm from "./ContactForm.jsx"
import Certificates from "./Certificates.jsx"
import Footer from "../../containers/Footer.jsx"
import Header from "../../containers/Header.jsx"

import {
    CAROUSEL_IMAGES,
    headerSpacing,
    sectionCss,
    sectionHeaderCss,
} from "@/src/assets/constants/Constant.js"

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

    const diversArrayOfSpices = [
        {
            key: 1,
            className: "whole__spices",
            text: "Whole Spices",
            buttonText: "View Products",
        },
        {
            key: 2,
            className: "spices__powder",
            text: "Spices Power",
            buttonText: "View Products",
        }
    ]

    return (
        <>
            <Header className={headerSpacing} />

            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full h-96 lg:h-180 mt-20"
            >
                <CarouselContent>
                    {
                        CAROUSEL_IMAGES.map((imageInfo, index) => (
                            <CarouselItem key={index}>
                                <div className="relative">
                                    <img
                                        src={imageInfo.src}
                                        alt={imageInfo.alt}
                                        className="w-full h-96 lg:h-180 object-cover"
                                    />

                                    <div className="absolute w-3/4 p-6 border__image text-shadow shadow-[#00000040] text-white rounded-lg flex flex-col items-start leading-relaxed gap-6      left-6 md:left-12 lg:left-25        bottom-6 md:bottom-12 ">
                                        <div className="font-semibold       text-2xl md:text-3xl lg:text-5xl">
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
                        ))
                    }
                </CarouselContent>
            </Carousel>

            <div className={clsx(sectionCss)}>
                <p className={clsx(sectionHeaderCss)}>
                    Diverse array of Spices
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center w-full    gap-10 xl:gap-20">
                    {diversArrayOfSpices.map(data => (
                        <div
                            key={data.key}
                            className={clsx(data.className, "w-full md:w-1/2 xl:w-2/6    h-80 md:h-72 text-white p-10 flex flex-col gap-5 justify-end rounded-lg shadow-2xl")}
                        >
                            <div className="w-full lg:w-1/2 flex flex-col gap-5 border__image p-5 rounded-lg">
                                <p className="text-xl font-semibold">
                                    {data.text}
                                </p>

                                <Button className="bg-primary hover:bg-primaryLight text-xs w-2/3">
                                    {data.buttonText}
                                </Button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>

            <Certificates />
            <ContactForm />
            <Footer />
        </>
    )
}

export default HomeScreen
