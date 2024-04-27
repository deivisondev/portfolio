import { ReactSVG } from "react-svg";
import { Icons } from "../../utils/icons";
import * as S from "./styles";

type IconProps = {
  name: keyof typeof Icons;
};

export const Icon = ({ name }: IconProps) => {
  return (
    <S.Container>
      <ReactSVG src={Icons[name]} />
    </S.Container>
  );
};
