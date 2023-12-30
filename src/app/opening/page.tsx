"use client";

import { useChessStore } from "@/store/zustand";
import { useEffect, useState, useRef } from "react";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useRouter } from "next/navigation";
import { getECOTagFromURL } from "@/utils";
import Footer from "./_components/Footer";

async function getData() {
  const response = await fetch(
    "https://api.chess.com/pub/tournament/-scc-grand-prix-titled-tuesday-blitz-1308796/10/1"
  );
  const data = await response.json();
  return data;
}

export default function Opening() {
  const chartRef = useRef();
  const router = useRouter();

  const { data, setData, topOpenings, setTopOpenings } = useChessStore();

  const [openingsFreq, setOpeningsFreq] = useState<any>();

  useEffect(() => {
    getData().then((data) => setData(data));
  }, [setData]);

  useEffect(() => {
    if (data) {
      const freqOfOpenings = () => {
        const openings: any = {};
        let total = 0;
        data.games.forEach((game: any) => {
          if (game.eco !== undefined) {
            const eco = getECOTagFromURL(game.eco);
            if (openings[eco] === undefined) {
              openings[eco] = 1;
            } else {
              openings[eco] += 1;
            }
            total += 1;
          }
        });

        let sortable = [];
        for (let opening in openings) {
          sortable.push([opening, openings[opening]]);
        }

        sortable.sort((a, b) => b[1] - a[1]);

        let sortedOpenings: any = {};
        sortable.forEach((item) => {
          sortedOpenings[item[0]] = item[1];
        });

        sortedOpenings.total = total;
        return sortedOpenings;
      };
      const openingsFreq = freqOfOpenings();

      setOpeningsFreq(openingsFreq);

      const topFiveOpenings = data.games
        .filter((game: any) => game.eco !== undefined)
        .sort((a: any, b: any) => openingsFreq[b.eco] - openingsFreq[a.eco])
        .slice(0, 5);
      setTopOpenings(topFiveOpenings);
    }
  }, [data, setTopOpenings]);

  return (
    <main className="min-h-screen flex flex-col p-6 bg-[#FFE804] relative text-[#2533EE] md:px-32">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black mt-16">Openings</h1>
        <p className="text-xl font-bold">SCC Grand Prix Blitz</p>
        <p className="text-base font-light">
          A graphical representation of the five most common blitz openings. Tap
          on a opening to see the result.
        </p>
      </div>
      <Bar
        ref={chartRef}
        onClick={(e) =>
          router.push(
            `/opening/${
              getElementAtEvent(chartRef?.current as any, e)[0].index
            }`
          )
        }
        data={{
          labels: topOpenings?.map((opening: any) =>
            getECOTagFromURL(opening.eco).split(" ").slice(0, 2)
          ),
          datasets: [
            {
              data: openingsFreq && Object.values(openingsFreq).slice(0, 5),
              backgroundColor: "#2533EE",
              borderRadius: {
                topLeft: 10,
                topRight: 10,
              },
              barPercentage: 1,
              categoryPercentage: 0.98,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              display: false,
            },
            x: {
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
              ticks: {
                font: {
                  weight: "bold",
                },
                color: "#2533EE",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <Footer />
    </main>
  );
}
