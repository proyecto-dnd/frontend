import { IconProps } from "./types";
import defaultIconProps from "./DefaultIconProps";

const DwarfFace = ({ className, size = defaultIconProps.size, color = defaultIconProps.color }: IconProps) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48.075 1.80005C57.36 14.85 48.7375 17.3625 43.3875 20.3125C42.4625 18.3 41.4 16.475 39.975 14.7625C46.475 12 47.65 5.98755 48.075 1.80005ZM15.925 1.80005C16.35 5.98755 17.525 12 24.025 14.7625C22.6 16.475 21.5375 18.3 20.6125 20.3125C15.25 17.3625 6.65 14.85 15.925 1.80005ZM32 11.1875C37.6625 14.6375 39.7875 17.9875 41.8 23.0375C35.8125 24.5 28.2 24.5 22.2 23.0375C24.2125 17.9875 26.3375 14.6375 32 11.1875ZM45.4 24.5125C46.0625 25.8 48.475 33.85 48.5 35.9875C47.9125 35.375 47.3125 34.75 46.725 34.125L45.9 34.85C45.7625 31.65 44.325 28.25 42.7625 25.1625C43.575 24.9625 44.575 24.75 45.4 24.5125ZM18.6 24.5125C19.375 24.725 20.5125 25 21.2375 25.1625C19.6875 28.25 18.2375 31.65 18.1125 34.85L17.275 34.125L15.5 35.9875C14.1875 34.4375 17.9375 25.8 18.6 24.5125ZM40.3 25.6125L41.2875 28.5875C38.4375 29.4 35.8375 30.1625 32.6625 31.0875L33.475 33.2125C34.175 33.0125 34.9 32.8125 35.6125 32.6C35.975 33.325 36.8 33.8 37.7 33.8C38.975 33.8 39.9875 32.9 39.9875 31.8C39.9875 31.6375 39.975 31.4875 39.9375 31.3375L42.0125 30.75L43.75 35.9625L39.2375 40.25L37.4125 36.875H26.6L24.7625 40.25L20.25 35.9625L21.9875 30.75C22.6625 30.9375 23.3375 31.125 24 31.325C23.95 31.475 23.9375 31.6375 23.9375 31.8C23.9375 32.9 24.95 33.8 26.2375 33.8C27.15 33.8 27.975 33.3125 28.3375 32.5875C29.075 32.8 29.8 33 30.525 33.2125L31.35 31.0875C28.45 30.2375 25.8 29.475 22.7125 28.5875L23.7125 25.6125C29.675 27 34.325 27 40.3 25.6125ZM45.7 37.4625L54.5025 46.675H48.575L50.875 52.675H43.6875L45.525 55.875L40.8375 54.5125L32 62.2L23.1625 54.5125L18.4875 55.875L20.325 52.675H13.1375L15.425 46.675H9.5L18.3125 37.4625L25.4875 43.7L28.225 38.925H35.8125L38.55 43.7L45.7 37.4625ZM34.3 40.675H29.7V42.925H34.3V40.675Z" fill={color}/>
    </svg>
  )
}

export default DwarfFace;