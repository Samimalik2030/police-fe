import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

function IconBell(props: ICommonIconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    </BaseIcon>
  );
}

export default IconBell;
