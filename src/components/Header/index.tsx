import * as S from "./styles";
import { Button } from "../Button";
import { Icon } from "../Icon";

export const Header = () => {
  return (
    <S.Container>
      <S.IconContainer>
        <Icon name="deivisondevLogo" />
      </S.IconContainer>
      <Button icon="translateIcon" />
    </S.Container>
  );
};
