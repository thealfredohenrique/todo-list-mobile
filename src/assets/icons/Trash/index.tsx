import { Path, Svg } from "react-native-svg";

interface TrashProps {
  size: number;
  color: string;
}

export function Trash({ size, color }: TrashProps) {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></Path>
    </Svg>
  );
}
