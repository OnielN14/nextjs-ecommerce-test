import Carousel from "./_components/Carousel";
import Header from "./_components/Header";
import Shortcut from "./_components/Shortcut";
import { CollectionData } from "@/typings/collection";
import CollectionSection from "./_components/CollectionSection";

export default async function Home() {
  const bannerImages = await fetch("https://api.testvalley.kr/main-banner/all").then((val) => val.json()).catch((err) => {
    console.error(err)
    return []
  })

  const shortcuts = await fetch("https://api.testvalley.kr/main-shortcut/all").then((val) => val.json()).catch((err) => {
    console.error(err)
    return []
  })

  const collection = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount").then(async (val) => {
    const data = await val.json()
    return (data.items as CollectionData[]).filter((v) => v.type === 'SINGLE' && v.viewType === 'TILE')
  }).catch((err) => {
    console.error(err)
    return []
  })

  return (
    <main className="flex min-h-dvh flex-col mx-auto bg-[rgb(246,250,251)]">
      <Header />
      <div className="mx-auto max-w-screen-sm md:max-w-none w-full bg-white">
        <Carousel items={bannerImages} />
        <Shortcut items={shortcuts} />

        <div className="md:max-w-screen-md w-full md:mx-auto pb-8">
          {
            collection.map((v) => (<CollectionSection key={v.code} {...v} />))
          }
        </div>
      </div>
    </main>
  );
}
