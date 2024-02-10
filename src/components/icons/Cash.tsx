import { IconProps } from "./types";
import defaultIconProps from "./defaultIconProps";

const Cash = ({ className, size = defaultIconProps.size, color = defaultIconProps.color }: IconProps) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.325 5.54869L25.45 4.99994C23.7375 3.94994 21.6 3.33994 19.7625 3.91244C17.7875 4.52744 16.2125 6.04869 15.3875 8.33369L14.2125 7.72869C12.1875 6.68619 11.1275 6.66994 10.2487 7.06494C9.5475 7.37869 8.81625 8.13369 7.9875 9.23619L18.2875 17.1999C19.9 17.7249 22.2625 17.7124 24.625 17.0999C27 16.4874 29.3625 15.2874 31.0875 13.6749L34.975 4.06244C31.55 1.35619 28.425 2.92369 26.325 5.54869ZM32.9625 15.1124C30.8375 17.2624 27.675 18.7124 25.2125 19.3624C24.35 19.5874 23.4875 19.7499 22.65 19.8374C22.1875 20.5999 21.8 21.3749 21.5 22.1499C22.1 25.1999 23.225 27.6999 24.9125 29.7499L23.1125 31.2499C22.075 29.9999 21.15 28.6499 20.45 27.1499C20.3375 30.0499 20.9875 33.0499 22.05 36.1749L19.8375 36.9249C17.8875 31.2249 17.225 25.3874 19.9625 19.8874C19.0375 19.8124 18.1625 19.6374 17.35 19.3499L17.3125 19.3374C16.775 19.8499 16.2625 20.3874 15.775 20.9499C11.8287 25.5249 9.655 31.6124 10.7925 36.3499C11.4012 38.8874 12.4925 41.2874 14.0625 43.3374C16.3625 43.2874 18.5375 43.3374 20.5125 44.0874C21.45 43.9874 22.4125 43.9249 23.4125 43.9249C26.975 43.9249 30.2 44.5874 32.6375 45.7374C33.5875 46.1874 34.45 46.7249 35.1375 47.3374C35.1375 46.6749 35.2375 45.9624 35.4375 45.4374C34.325 44.3874 33.625 43.1124 33.625 41.6624C33.625 39.6499 34.9625 37.9874 36.9 36.7874C36.9 36.2124 37.0125 35.6624 37.2125 35.1374C35.95 34.0499 35.1375 32.6999 35.1375 31.1249C35.1375 30.1374 35.4625 29.2374 36.0125 28.4249C35.4625 27.6249 35.1375 26.7249 35.1375 25.7374C35.1375 25.2499 35.2125 24.7999 35.35 24.3624C34.1375 23.2874 33.375 21.9624 33.375 20.4374C33.375 18.9249 34.125 17.6124 35.325 16.5499C34.5875 15.9749 33.8 15.4874 32.9625 15.1124ZM46.8875 15.3999C43.6375 15.3999 40.7 16.0874 38.6875 17.0999C36.6625 18.1124 35.7125 19.3624 35.7125 20.4374C35.7125 21.5249 36.6625 22.7749 38.6875 23.7874C40.7 24.7999 43.6375 25.4874 46.8875 25.4874C48.3 25.4874 49.6375 25.3499 50.875 25.1249V22.9999C52.6125 22.7374 54.05 22.2624 54.975 21.6499V23.8499C56.5375 23.3999 58.0375 21.7374 58.075 20.4374C58.075 19.3624 57.125 18.1124 55.1 17.0999C53.075 16.0874 50.15 15.3999 46.8875 15.3999ZM58.95 23.8624C58.5375 24.2999 58.05 24.7124 57.5 25.0874L57.525 28.7124C59.1 27.7749 59.8375 26.6874 59.8375 25.7374C59.8375 25.1374 59.55 24.4874 58.95 23.8624ZM37.475 25.7874C37.5125 26.8624 38.4625 28.0749 40.45 29.0749C42.475 30.0999 45.4 30.7749 48.6625 30.7749C50.7 30.7749 52.6125 30.4999 54.25 30.0499L54.3375 26.6499C52.1875 27.3999 49.6375 27.8124 46.8875 27.8124C43.325 27.8124 40.0875 27.0999 37.6375 25.8749C37.575 25.8499 37.525 25.8124 37.475 25.7874ZM37.725 30.1374C37.55 30.4749 37.475 30.8124 37.475 31.1249C37.475 32.2124 38.425 33.4624 40.45 34.4749C42.475 35.4874 45.4 36.1624 48.6625 36.1624C50.3125 36.1624 51.875 35.9999 53.2875 35.6874V32.6874C51.8375 32.9624 50.2875 33.0999 48.6625 33.0999C45.0875 33.0999 41.85 32.3999 39.4 31.1624C38.7875 30.8624 38.225 30.5124 37.725 30.1374ZM59.5875 30.1374C58.825 30.6749 58.1625 31.0749 57.3875 31.4124V34.1999C59.05 33.2374 59.8375 32.1124 59.8375 31.1249C59.8375 30.8124 59.7625 30.4749 59.5875 30.1374ZM60.525 34.7374C60.275 34.9874 60 35.2249 59.7 35.4624V39.5124C60.9875 38.6374 61.6125 37.6749 61.6125 36.7999C61.6125 36.1374 61.25 35.4249 60.525 34.7374ZM39.2625 36.4874C39.25 36.5999 39.2375 36.6999 39.2375 36.7999C39.2375 37.8874 40.1875 39.1249 42.2125 40.1374C44.2375 41.1624 47.175 41.8374 50.425 41.8374C52.2875 41.8374 54.0625 41.6124 55.6 41.2374V37.4999C53.5625 38.1499 51.2 38.4999 48.6625 38.4999C45.0875 38.4999 41.85 37.7874 39.4 36.5624C39.35 36.5374 39.3125 36.5124 39.2625 36.4874ZM37.5625 39.1624C36.475 39.9749 35.9625 40.8624 35.9625 41.6624C35.9625 42.7499 36.9125 43.9874 38.9375 45.0124C40.9625 46.0249 43.8875 46.6999 47.15 46.6999C48.3375 46.6999 49.4875 46.6124 50.5625 46.4499V44.1749H50.425C46.85 44.1749 43.6125 43.4624 41.1625 42.2249C39.6 41.4499 38.3 40.4124 37.5625 39.1624ZM57.875 42.9874C56.8875 43.3374 55.8125 43.6249 54.6625 43.8124V45.3249C54.9 45.2249 55.1375 45.1249 55.3625 45.0124C56.5875 44.3874 57.4125 43.6874 57.875 42.9874ZM59.025 45.2624C58.55 45.7374 58 46.1624 57.3875 46.5499V50.1249C59.05 49.1749 59.8375 48.0499 59.8375 47.0624C59.8375 46.4874 59.575 45.8624 59.025 45.2624ZM15.4375 45.6124C14.1625 45.6249 12.7875 45.7874 11.3625 46.1249C8.51125 46.7874 6.06 47.9999 4.46 49.3374C2.86 50.6624 2.235 52.0124 2.4225 52.9749C2.61 53.9374 3.5975 54.8249 5.5225 55.3374C7.44125 55.8374 10.125 55.8624 12.975 55.1999C14.125 54.9249 15.2 54.5749 16.1875 54.1624V51.5749C18.0125 50.7624 19.375 49.7874 19.9875 48.8374V51.8874C21.5 50.5874 22.0875 49.2874 21.9125 48.3374C21.7375 47.3749 20.7375 46.4874 18.8125 45.9874C17.85 45.7374 16.7 45.5999 15.4375 45.6124ZM23.5125 46.2624C23.85 46.7499 24.0875 47.2999 24.2125 47.9124C24.35 48.6624 24.2875 49.3874 24.0625 50.0999C25.3 50.4249 26.425 50.8624 27.4 51.4124C27.95 51.7124 28.4625 52.0749 28.9125 52.4499C30.0375 52.1874 30.9875 51.8124 31.6625 51.3624V53.9374C33.675 52.9874 34.6 51.8249 34.6 50.8999C34.6 49.9624 33.675 48.7999 31.65 47.8499C29.6375 46.9124 26.7375 46.2749 23.5125 46.2624ZM37.4875 46.8874C37.475 46.9374 37.475 46.9999 37.475 47.0624C37.475 48.1499 38.425 49.3874 40.45 50.4124C42.475 51.4249 45.4 52.0999 48.6625 52.0999C50.3125 52.0999 51.875 51.9249 53.2875 51.6249V48.2624C51.4375 48.7624 49.35 49.0374 47.15 49.0374C43.575 49.0374 40.3375 48.3249 37.8875 47.0999C37.75 47.0249 37.6125 46.9499 37.4875 46.8874ZM37.8375 51.5499C37.5875 51.9624 37.475 52.3624 37.475 52.7499C37.475 53.8374 38.425 55.0749 40.45 56.0999C42.475 57.1124 45.4 57.7874 48.6625 57.7874C50.3125 57.7874 51.875 57.6124 53.2875 57.3124V54.0124C51.8375 54.2874 50.2875 54.4374 48.6625 54.4374C45.0875 54.4374 41.85 53.7249 39.4 52.4874C38.8375 52.2124 38.3125 51.8999 37.8375 51.5499ZM59.475 51.5499C58.75 52.0374 58.1125 52.4249 57.3875 52.7374V55.8124C59.05 54.8624 59.8375 53.7374 59.8375 52.7499C59.8375 52.3624 59.725 51.9624 59.475 51.5499ZM22.9 52.2249C22.4625 52.7749 21.95 53.2999 21.375 53.7749C19.425 55.4124 16.675 56.7374 13.5 57.4749C12.3675 57.7374 11.2425 57.8999 10.1625 57.9874C10.5625 58.6499 11.2662 59.2999 12.2962 59.8749C14 60.8374 16.5 61.4874 19.275 61.4874C20.5375 61.4874 21.7375 61.3499 22.8375 61.1124V58.5124C24.5625 58.2499 26.0125 57.7749 26.9375 57.1624V59.4624C28.1875 58.5874 28.7875 57.5999 28.7875 56.6624C28.7875 55.5749 27.975 54.4124 26.2625 53.4499C25.3375 52.9374 24.1875 52.5124 22.9 52.2249Z" fill={color}/>
    </svg>
  )
}

export default Cash;