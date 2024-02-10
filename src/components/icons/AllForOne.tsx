import { IconProps } from "./types";
import defaultIconProps from "./defaultIconProps";

const Cash = ({
  className,
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.7021 1.96497L23.7215 8.69122L11.9253 2.57809L19.8078 12.2812L5.64812 14.6757L19.8075 17.1288L12.3431 26.5276L20.4714 22.3517L20.2489 29.7071L22.7293 25.0391V17.0118L22.8231 16.7931L26.8111 7.44934L21.702 1.96497H21.7021ZM39.9825 1.96497L35.3696 6.91784L39.5372 16.7966L39.6309 17.0153V25.7307L41.5683 29.3791L41.3652 22.5746L49.5563 26.8323L41.6737 17.1292L55.833 14.6762L41.6737 12.2817L49.5562 2.57859L38.0017 8.56684L39.9823 1.96559L39.9825 1.96497ZM31.1585 2.94497L25.0106 17.2575V36.445L29.3774 40.8125C29.7419 32.6331 30.3743 24.6955 31.2835 17.3475C32.2342 25.0266 32.8765 33.4443 33.225 42.0975L37.3029 38.0195V17.2577L31.1587 2.94522L31.1585 2.94497ZM4.14057 25.8556L8.80835 37.6133L33.0453 61.8556H36.8968C28.6047 53.2927 20.8372 44.4803 14.3197 36.1212C23.6574 43.402 33.7068 52.4128 43.2324 61.8555H47.115L15.8509 30.586L4.14044 25.8555L4.14057 25.8556ZM59.7435 25.8556L48.0408 30.5821L33.5922 45.0312L35.8616 47.2968C40.3961 43.2841 44.9005 39.5137 49.2516 36.1211C45.839 40.498 42.0819 44.9986 38.0884 49.5232L40.6306 52.0625L55.0714 37.6212L59.7431 25.8555L59.7435 25.8556ZM23.2564 55.3672L16.7685 61.8555H20.3426C21.917 60.2947 23.5067 58.7461 25.1041 57.2148L23.2567 55.367L23.2564 55.3672ZM28.1781 60.293C27.6787 60.8146 27.1777 61.3355 26.6744 61.8555H29.7405L28.1781 60.293Z"
        fill={color}
      />
    </svg>
  );
};

export default Cash;
