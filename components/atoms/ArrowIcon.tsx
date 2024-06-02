import Image from "next/image";

type Props = {
  left?: boolean;
  right?: boolean;
  onClick?: () => void;
};

export default function ArrowIcon({ left, right, onClick }: Props) {
  return (
    <Image
      onClick={onClick ? onClick : () => null}
      src={"/icons/arrow-down-solid.svg"}
      width={38}
      height={42}
      style={{
        rotate: left ? "90deg" : right ? "-90deg" : "0",
        cursor: onClick ? "pointer" : undefined,
      }}
      alt="Arrow icon"
    />
  );
}
