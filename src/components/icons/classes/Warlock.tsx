import { IconProps } from "../types";
import defaultIconProps from "../defaultIconProps";

const Warlock = ({
  className,
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64 4L56 32L64 40L72 32L64 4ZM16 24L24 44L40 48L16 24ZM112 24L88 48L104 44L112 24ZM64 44L48 56L16 64C36 68 48 88 64 96C80 88 92.119 68.4468 112 64L80 56.9225L64 44ZM54.122 57.1705L61.2075 59.3862L59.345 64.625L64 77.7237L68.655 64.625L66.7925 59.3862L73.878 57.1705C77.6087 59.913 80 64.178 80 68.9912C80 77.3092 72.8675 84 64 84C55.1325 84 48 77.3092 48 68.9912C48 64.1777 50.3913 59.9128 54.122 57.1705ZM24 84L8 96L4 112L12 104L28 92C28 92 24 85.0975 24 84ZM104 84L100 92L116 104L124 112L120 96L104 84ZM36 100L32 116L44 104L36 100ZM64 100L52 104L64 124L76 104L64 100ZM92 100L84 104L96 116L92 100Z"
        fill={color}
      />
    </svg>
  );
};

export default Warlock;
