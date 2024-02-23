import { CollectionData } from "@/typings/collection";
import CollectionCarousel from "./CollectionCarousel";

interface CollectionSectionProps extends Pick<CollectionData, 'id' | 'title' | 'subtitle' | 'items'> {

}

export default function CollectionSection({ title, subtitle, items }: CollectionSectionProps) {
    return (
        <div className="flex flex-col md:flex-row mt-[48px] md:mt-[56px] px-[20px] md:!p-0 relative">
            <div className="pb-[20px] pr-[40px] bg-white md:absolute md:w-[240px] md:h-[326px]">
                <div className="text-[18px] md:text-[24px] leading-[24px] font-[600] md:leading-[32px] text-ellipsis break-words overflow-hidden">{title}</div>
                <div className="text-[12px] text-[rgb(153,153,153)] leading-[20px] font-[500] mt-[8px] text-ellipsis break-words overflow-hidden">{subtitle}</div>
            </div>
            <CollectionCarousel items={items} />
        </div>
    )
}