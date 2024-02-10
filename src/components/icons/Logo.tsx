import defaultIconProps from "./defaultIconProps";
import { IconProps } from "./types";

const Logo = ({ className, size = '5rem', color = defaultIconProps.color }: IconProps) => {
  return (
    <svg className={className} height={size} viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.86623 7.32462C4.57288 5.51724 6.56631 4.27198 8.69904 3.55639C13.1348 2.06775 18.17 2.87936 22.4603 5.73148C22.1457 3.74653 21.5522 1.85324 20.8338 0C25.2732 2.82793 28.1647 6.16255 29.2501 10.083C32.6033 11.6034 36.4133 12.4904 40.9302 12.9123L40.7738 22.1424L19.6817 23.0558L17.4228 17.3414C12.5511 18.2014 9.38566 23.0558 13.4864 29.4245L7.01156 39.2086C-2.84455 26.4029 1.75327 12.7323 14.5498 8.65381C12.2276 5.51278 7.54076 5.41694 2.86623 7.32462ZM17.5554 10.5639C21.026 10.533 24.6038 11.4251 28.0029 13.8327C24.0935 17.5004 18.309 16.1859 17.5554 10.5639ZM11.4795 72.4026C12.4148 88.3738 29.0804 92.3021 35.7165 92.3021C43.8111 92.3021 52.4124 87.8389 55.2849 83.3813L64.2058 68.6331C73.1668 84.878 56.498 104.245 30.7525 99.0647C18.7927 96.6581 5.01453 86.4436 8.69957 70.4004C7.25571 69.476 5.71391 68.8042 4.04029 68.4803C7.01151 63.4248 11.9036 58.7322 20.8964 58.7322C15.8604 64.7034 14.1414 69.309 14.645 76.1436C13.5658 74.4889 13.0307 73.7628 11.4795 72.4026ZM21.6356 25.5376L51.6046 24.1822L43.7988 37.7022L21.6356 25.5376ZM45.7926 38.8533L53.5983 25.3333L67.4128 51.9671L45.7926 38.8533ZM18.3449 26.3625L41.8805 39.2696L13.3405 55.5224L18.3449 26.3625ZM45.589 74.1411L45.3944 41.2983L68.3388 55.2265L45.589 74.1411ZM2.80014 52.3112L15.2606 30.7291L10.9235 56.0541L2.80014 52.3112ZM46.337 76.5002L66.1006 60.0816L53.6402 81.6637L46.337 76.5002ZM44.2447 77.8508L26.5693 83.4296L50.5961 82.3319L44.2447 77.8508ZM3.73853 55.2786L11.0479 58.8774C9.68095 59.381 7.81045 60.604 7.01908 61.6112L3.73853 55.2786ZM43.0979 41.2185L13.9256 57.8702C13.9256 57.8702 20.0407 56.1436 24.2133 57.8702C22.2709 59.5249 20.904 61.6831 20.904 61.6831L43.2866 74.5895L43.0979 41.2185ZM41.5997 76.2738L18.6878 83.498L16.5155 73.6256C16.5155 69.9565 17.7385 66.2155 19.6809 63.6975L41.5997 76.2738Z" fill={color} />
    </svg>
  )
}

export default Logo;