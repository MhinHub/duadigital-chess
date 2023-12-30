"use client";
import { Doughnut } from "react-chartjs-2";
import { useChessStore } from "@/store/zustand";
import { getECOTagFromURL } from "@/utils";
import Footer from "../_components/Footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import arrow from "./_assets/arrow-left.svg";

export default function OpeningSlug({ params }: { params: { slug: string } }) {
  const { topOpenings, data } = useChessStore();

  const tag = topOpenings[params.slug].eco;

  const filteredData = data.games.filter((game: any) => {
    if (game.eco !== undefined) {
      return game.eco.includes(getECOTagFromURL(tag, 2, "-"));
    }
  });

  const whiteCount = filteredData.filter((game: any) => {
    return game.white.result === "win";
  }).length;

  const blackCount = filteredData.filter((game: any) => {
    return game.black.result === "win";
  }).length;

  const drawCount = filteredData.filter((game: any) => {
    return game.black.result === game.white.result;
  }).length;

  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col p-6 bg-[#2533EE] relative text-white md:px-32">
      <div className="flex flex-col gap-2 mt-16">
        <Image
          src={arrow}
          onClick={() => router.back()}
          className="my-5"
          alt="back"
        />
        <h1 className="text-4xl font-black">Result</h1>
        <p className="text-xl font-bold">{getECOTagFromURL(tag)}</p>
        <p className="text-base font-light">
          This graph illustrates the end results for the opening. White winning,
          Black winning or Draw.
        </p>
      </div>
      <div className="grid place-items-center w-full my-10">
        <div className="md:w-1/2">
          <Doughnut
            data={{
              labels: ["Draw", "Black", "White"],
              datasets: [
                {
                  data: [drawCount, blackCount, whiteCount],
                  backgroundColor: ["#3b47f0", "#121A77", "#ffff"],
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: "bottom",
                  rtl: true,
                  labels: {
                    pointStyle: "circle",
                    usePointStyle: true,
                    padding: 20,
                    borderRadius: 1000,
                    font: {
                      weight: "bold",
                    },
                    color: "#fff",
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
