'use client'
import useIsBigScreen from "@/hooks/useIsBigScreen"
import { Menu, Search, Bell } from "lucide-react"
import { useIsClient } from "usehooks-ts"

export default function Header() {
    const isBigScreen = useIsBigScreen()
    const isClient = useIsClient()

    if (!isClient) {
        return null
    }

    if (!isBigScreen) {
        return (
            <header className="bg-white p-[4px] flex max-w-screen-sm h-[55px] mx-auto relative w-full">
                <img src="/testvalley.svg" alt="Test Valley" className="cursor-pointer ml-[20px] w-[125.71px]" />

                <div className="flex flex-grow items-center justify-end">
                    <button className="p-[12px] text-gray-600"><Bell size={23} strokeWidth={1.5} /></button>
                    <button className="p-[12px] text-gray-600"><Search size={23} strokeWidth={1.5} /></button>
                </div>
            </header>
        )
    }

    return (
        <header className="bg-white sticky top-0 flex h-[72px] items-center z-10">
            <div className="max-w-screen-md mx-auto w-full flex items-center">
                <img src="/testvalley.svg" alt="Test Valley" className="cursor-pointer mr-[30px] w-[105.6px] h-[32px] md:mr-[16px] md:w-[128.345px] md:h-[25.093px]" />

                <div className="flex items-center text-primary">
                    <Menu className="mr-[4px]" size={16} />
                    <span>카테고리</span>
                </div>

                <label htmlFor="search" className="flex w-[335px] relative ml-[90px] items-center">
                    <Search size={16} className="absolute left-4" />
                    <input id="search" className="search-input flex-grow" placeholder="살까말까 고민된다면 검색해보세요!" autoComplete="false" />
                </label>

                <div className="flex-grow"></div>

                <div className="flex items-center">
                    <button>
                        <img src="/home-event.svg" alt="Event" />
                    </button>
                    <div className="w-[1px] h-[16px] bg-gray-600 mx-2" />
                    <button className="text-[14px]">로그인 / 회원가입</button>
                </div>
            </div>
        </header>
    )
}