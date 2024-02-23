import Image from "next/image";
import Carousel from "./_components/Carousel";
import Header from "./_components/Header";
import Shortcut from "./_components/Shortcut";

export default async function Home() {
  const bannerImages = await fetch("https://api.testvalley.kr/main-banner/all").then((val) => val.json()).catch((err) => {
    console.error(err)
    return []
  })

  const shortcuts = await fetch("https://api.testvalley.kr/main-shortcut/all").then((val) => val.json()).catch((err) => {
    console.error(err)
    return []
  })



  return (
    <main className="flex min-h-dvh flex-col mx-auto bg-[rgb(246,250,251)]">
      <Header />
      <div className="mx-auto max-w-screen-sm md:max-w-none w-full">
        <Carousel items={bannerImages} />
        <Shortcut items={shortcuts} />
      </div>
    </main>
  );
}
