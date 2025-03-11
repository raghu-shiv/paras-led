import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetPath(asset: string) {
  return `led/${asset}`;
}

const photos = [
  {
    asset: "LEDCAPLight.jpg",
    width: 1080,
    height: 780,
    alt: "LED Cap Light",
  },
  {
    asset: "LEDBulb7WTBox.jpg",
    width: 1080,
    height: 1620,
    alt: "LED Bulb 7WT Box",
  },
  {
    asset: "LEDCELLCircuit.jpg",
    width: 1080,
    height: 720,
    alt: "LED Cell Circuit",
  },
  {
    asset: "LEDDown5W.jpg",
    width: 1080,
    height: 810,
    alt: "LED Down 5W",
  },
  {
    asset: "LEDSMPS.jpg",
    width: 1080,
    height: 1620,
    alt: "LED SMPS",
  },
  {
    asset: "LEDTiranga.jpg",
    width: 1080,
    height: 607,
    alt: "LED Tiranga",
  },
  {
    asset: "LEDTubeLight.jpg",
    width: 1080,
    height: 608,
    alt: "LED Tube Light",
  },
  {
    asset: "Lights_4.jpg",
    width: 1080,
    height: 720,
    alt: "Lights_4",
  },
  {
    asset: "NewCeiling12WT.jpg",
    width: 1080,
    height: 1549,
    alt: "New Ceiling 12WT",
  },
  {
    asset: "Lights_6.jpg",
    width: 1080,
    height: 780,
    alt: "Lights_6",
  },
  {
    asset: "LEDBulbs50W.jpg",
    width: 1080,
    height: 694,
    alt: "LED Bulbs 50W",
  },
  {
    asset: "Lights_1.jpg",
    width: 720,
    height: 1280,
    alt: "Lights_1",
  },
  {
    asset: "LEDPacks.jpg",
    width: 1080,
    height: 720,
    alt: "LED Packs",
  },
  {
    asset: "LEDStreet24WT.jpg",
    width: 1080,
    height: 1440,
    alt: "LED Street 24WT",
  },
  {
    asset: "LEDBulbsOpen.jpg",
    width: 1080,
    height: 1620,
    alt: "LED Bulbs Open",
  },
  {
    asset: "LEDColoredStickers.jpg",
    width: 1080,
    height: 810,
    alt: "LED Colored Stickers",
  },
  {
    asset: "Ceiling22WTSquare.jpg",
    width: 1080,
    height: 620,
    alt: "Ceiling 22WT Square",
  },
  {
    asset: "LEDTubelightsTiranga.jpg",
    width: 1080,
    height: 480,
    alt: "LED Tubelights Tiranga",
  },
  {
    asset: "Lights_5.jpg",
    width: 1080,
    height: 1180,
    alt: "Lights_5",
  },
  {
    asset: "LEDNightBulbs.jpg",
    width: 1080,
    height: 720,
    alt: "LED Night Bulbs",
  },
  {
    asset: "LEDFloodLight.jpg",
    width: 1080,
    height: 810,
    alt: "LED Flood Light",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetPath(asset),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetPath(asset),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    } as Photo)
);

export default photos;
