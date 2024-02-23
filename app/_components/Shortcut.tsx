import { ShortcutData } from "@/typings/shortcut"

interface ShortcutProps {
    items: ShortcutData[]
}

export default function Shortcut({ items }: ShortcutProps) {
    return (
        <div className="md:mt-[40px] py-4 grid grid-cols-5 gap-x-[12px] gap-y-[24px] md:flex md:gap-0 mx-auto justify-center">
            {items.map((v) => (
                <ShortcutItem key={v.mainShortcutId} {...v} />
            ))}
        </div>
    )
}

interface ShortcutItemProps extends Pick<ShortcutData, 'imageUrl' | 'linkUrl' | 'title'> {
}

export function ShortcutItem({ linkUrl, imageUrl, title }: ShortcutItemProps) {
    return (
        <a href={linkUrl} className="flex flex-col text-center items-center text-[11px] md:text-[13px] md:mx-[18px] md:w-[64px]">
            <img src={imageUrl} alt={title} className="aspect-square w-[48px] md:w-[62px]" />
            <div className="mt-2">{title}</div>
        </a>
    )
}