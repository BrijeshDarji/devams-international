import React, { memo, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import { clsx } from "clsx"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/src/components/ui/carousel"

import {
    CERTIFICATES,
    sectionCss,
    sectionHeaderCss,
} from "@/src/assets/constants/Constant"

function Certificates() {
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
        <div className={clsx(sectionCss, "bg-primary text-white")}>
            <p className={clsx(sectionHeaderCss)}>
                We are certified company
            </p>

            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="max-w-40 md:max-w-72 lg:max-w-96"
            >
                <CarouselContent className="-ml-2 md:-ml-4">
                    {
                        CERTIFICATES.map((imageInfo, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 md:basis-1/3"
                            >
                                <img
                                    src={imageInfo.src}
                                    alt={imageInfo.alt}
                                    className="rounded-lg"
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default memo(Certificates)
