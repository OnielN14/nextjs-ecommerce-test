import Image from "next/image";
import Carousel from "./_components/Carousel";
import Header from "./_components/Header";

export default async function Home() {
  const bannerImages = await fetch("https://api.testvalley.kr/main-banner/all").then((val) => val.json()).catch((er) => {
    console.error(er)
    return []
  })



  return (
    <main className="flex min-h-dvh flex-col mx-auto">
      <Header />
      <div className="mx-auto max-w-screen-sm md:max-w-none w-full">
        <Carousel items={bannerImages} />
      </div>
    </main>
  );
}
