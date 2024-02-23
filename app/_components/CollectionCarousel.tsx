'use client'

import useIsBigScreen from "@/hooks/useIsBigScreen"
import { Item } from "@/typings/collection"
import { cva } from "class-variance-authority"
import { Autoplay, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import { DELAY } from "@/utils/carousel"

interface CollectionCarouselProps {
    items: Item[]
}
export default function CollectionCarousel({ items }: CollectionCarouselProps) {
    const isBigScreen = useIsBigScreen()

    if (isBigScreen) {
        return (
            <Swiper
                className={`
                    !static
                    w-[calc(100%-240px)] !mr-0

                    [&_.swiper-button-prev]:left-0
                    [&_.swiper-button-prev]:collection-carousel-button
                    
                    [&_.swiper-button-next]:left-[41px]
                    [&_.swiper-button-next]:collection-carousel-button
                `}
                spaceBetween={8}
                slidesPerView={4}
                modules={[Autoplay, Navigation]} navigation autoplay={{
                    delay: DELAY
                }}>
                {
                    items.map(({ key, ...v }) => (
                        <SwiperSlide key={v.uuid}>
                            <CollectionItem {...v} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        )
    }

    return (
        <div className="grid grid-cols-2 gap-x-[8px] gap-y-[24px]">
            {items.map(({ key: _, ...v }) => (
                <CollectionItem key={v.uuid} {...v} />
            ))}
        </div>
    )
}

const numberFormatter = new Intl.NumberFormat()

export function CollectionItem({ publication, prdType }: Omit<Item, 'key'>) {
    const { title, media, tagsOnDesc, tagsOnImage, priceInfo, rating } = publication

    const hasTagOnImage = tagsOnImage.length > 0
    const hasTagOnDesc = tagsOnDesc.length > 0

    const price = priceInfo.couponDiscountPrice ?? priceInfo.discountPrice ?? priceInfo.price
    const rate = priceInfo.couponDiscountRate ?? priceInfo.discountRate

    return (
        <div className="">
            <div className="relative mb-[8px]">
                <img src={media[0].uri} alt={title} className="object-cover rounded-[4px]" />
                {
                    hasTagOnImage ? (
                        <div className="absolute bottom-0 pl-[4px] pb-[4px] leading-[13.8px]">
                            <div className="bg-accent rounded-[2px] p-[4px] font-[500] text-white flex text-[12px]"><img src="/return-new.svg" className="mr-[2px]" />{tagsOnImage[0]}</div>
                        </div>
                    ) : null
                }
            </div>

            <div className="text-[13px] md:text-[15px] mt-[4px] leading-[21px] h-[42px] line-clamp-2 break-all">{title}</div>

            <div className="mt-[8px] font-[600] text-[15px] text-[#424242]">
                {
                    rate ? (
                        <span className="text-[rgb(255,80,35)]">{rate}%</span>
                    ) : null
                }
                {numberFormatter.format(price)}
                <span className="text-[10px] font-[500]">원</span>
            </div>

            {
                hasTagOnDesc ? (
                    <div className="mt-[8px]">
                        {
                            tagsOnDesc.map((v) => (
                                <div key={v} className={tagVariant({ variant: isTagSpecial(v) ? 'special' : 'default' })}>
                                    {v}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }

            <Rating value={rating} description="" />

            {
                publication.preface ? (
                    <Preface {...publication} />
                ) : null
            }
        </div>
    )
}


function isTagSpecial(value: string) {
    return ['단독특가', '깜짝할인', '한정수량'].includes(value)
}

const tagVariant = cva("px-[4px] py-[3px] font-[600] text-[10px] text-center rounded-[2px] leading-[10px] inline-block mr-[4px] last-of-type:m-0", {
    variants: {
        variant: {
            default: 'text-[rgb(66,66,66)] bg-[rgb(247,247,247)]',
            special: 'text-[rgb(235,28,28)] bg-[rgb(255,247,247)]'
        }
    }
})

interface RatingProps {
    value: number
    description: string
}

function Rating({ description, value }: RatingProps) {
    return (
        <div className="flex items-center mt-[8px] font-[500] text-[11px] text-[rgb(102,102,102)]">
            <img src="/star-darkgray.svg" alt="별점" className="w-[12px] aspect-square" />
            {value}
        </div>
    )
}

interface PrefaceProps {
    preface: string
    prefaceIconUrl: string
}
function Preface({ prefaceIconUrl, preface }: PrefaceProps) {
    return (
        <div className="mt-[8px] inline-flex items-center rounded-[2px] border border-[rgb(238,238,238)] px-[6px] py-[4px] text-[12px]">
            <img className="w-[14px] aspect-square mr-[3px]" src={prefaceIconUrl} alt={preface} />
            <span>{preface}</span>
        </div>
    )
}