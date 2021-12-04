import { ButtonStyled } from "./style";

export const Buttons = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
