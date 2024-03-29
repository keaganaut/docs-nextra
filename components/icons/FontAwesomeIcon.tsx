interface FontAwesomeIconProps {
  symbol: string; //e.g. "hippo", https://fontawesome.com/search?o=r&s=light&f=sharp%2Cclassic
  fill: string;
  width: number;
  height: number;
  className?: string;
}

export const FontAwesomeIcon = ({
  symbol,
  fill,
  width,
  height,
  ...props
}: FontAwesomeIconProps) => {
  return (
    <svg width={width} height={height} fill={fill} {...props}>
      <use href={`/fa_icons_light.svg#${symbol}`} />
    </svg>
  );
};

FontAwesomeIcon.defaultProps = {
  width: "24",
  height: "24",
};
