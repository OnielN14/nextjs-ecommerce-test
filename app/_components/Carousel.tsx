'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { BannerData } from "@/typings/banner"
import Image from "next/image"
import useIsBigScreen from "@/hooks/useIsBigScreen"

interface CarouselProps {
    items: BannerData[]
}

export default function Carousel({ items }: CarouselProps) {
    const isBigScreen = useIsBigScreen()

    return (
        <div className='w-full overflow-hidden'>
            <Swiper
                className={`
                    md:!overflow-visible md:w-[960px]
                    before:carousel-side before:left-[-1000%]
                    after:carousel-side after:right-[-1000%]
                    [&_.swiper-button-prev]:hidden
                    [&_.swiper-button-next]:hidden
                    
                    md:[&_.swiper-button-prev]:carousel-button
                    md:[&_.swiper-button-next]:carousel-button
                    md:[&_.swiper-wrapper]:w-[1000%]
                `}
                spaceBetween={32}
                slidesPerView={1}
                modules={[Autoplay, Navigation, Pagination]} navigation pagination centeredSlides loop autoplay={{
                    delay: 2000
                }}>
                {
                    items.map((v) => (
                        <SwiperSlide key={v.mainBannerId}>
                            <a href={v.linkUrl}>
                                <img src={isBigScreen ? v.pcImageUrl : v.mobileImageUrl} alt={v.title} />
                            </a>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}