import { Path, Svg } from "react-native-svg";

interface CheckCircleProps {
  size: number;
  color: string;
}

export function CheckCircle({ size, color }: CheckCircleProps) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></Path>
    </Svg>
  );
}
