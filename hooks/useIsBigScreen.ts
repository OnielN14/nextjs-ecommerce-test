import { BIG_SCREEN } from "@/utils/size"
import { useWindowSize } from "usehooks-ts"

export default function useIsBigScreen() {
    const { width } = useWindowSize({
        initializeWithValue: false
    })

    return Boolean(width && width >= BIG_SCREEN)
}