import * as S from "./styles";
import { ReactNode } from "react";
import { Icons } from "../../utils/icons";
import { Icon } from "../Icon";

type ButtonProps = {
  children?: ReactNode;
  size?: string;
  variant?: string;
  icon?: keyof typeof Icons;
};

export const Button = ({ children, icon, size, variant }: ButtonProps) => {
  return (
    <S.Button>
      {icon && (
        <S.IconBox>
          <Icon name={icon} />
        </S.IconBox>
      )}
      {children}
    </S.Button>
  );
};
