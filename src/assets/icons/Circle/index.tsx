import { Path, Svg } from "react-native-svg";

interface CircleProps {
  size: number;
  color: string;
}

export function Circle({ size, color }: CircleProps) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z"></Path>
    </Svg>
  );
}
