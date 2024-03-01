import { IconProps } from "../types";
import defaultIconProps from "../defaultIconProps";

const Edit = ({
  className,
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_912_157)">
        <path
          d="M6.41026 6.24292H5.5515C5.09599 6.24292 4.65913 6.42161 4.33703 6.73968C4.01494 7.05775 3.83398 7.48915 3.83398 7.93897V15.5712C3.83398 16.021 4.01494 16.4524 4.33703 16.7705C4.65913 17.0886 5.09599 17.2672 5.5515 17.2672H13.2803C13.7359 17.2672 14.1727 17.0886 14.4948 16.7705C14.8169 16.4524 14.9979 16.021 14.9979 15.5712V14.7232"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.9049 5.89085C18.2431 5.55686 18.4331 5.10387 18.4331 4.63153C18.4331 4.15919 18.2431 3.7062 17.9049 3.37221C17.5667 3.03822 17.108 2.85059 16.6297 2.85059C16.1513 2.85059 15.6926 3.03822 15.3544 3.37221L8.12793 10.4829V13.027H10.7042L17.9049 5.89085Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.1396 4.54688L16.7159 7.09095"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_912_157">
          <rect
            width="20.6102"
            height="20.3526"
            fill={color}
            transform="translate(0.399414 0.306641)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Edit;
