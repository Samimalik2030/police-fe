import ICommonIconProps from "../../interfaces/ICommonIconProps";
import BaseIcon from "./BaseIcon";

function IconRulerMeasureOutlined(props: ICommonIconProps) {
  return (
    <BaseIcon {...props} withOutline>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" />
      <path d="M9 12v2" />
      <path d="M6 12v3" />
      <path d="M12 12v3" />
      <path d="M18 12v3" />
      <path d="M15 12v2" />
      <path d="M3 3v4" />
      <path d="M3 5h18" />
      <path d="M21 3v4" />
    </BaseIcon>
  );
}

export default IconRulerMeasureOutlined;
