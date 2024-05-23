import { HeaderContainer } from "./style";

import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import logoIgnite from "../../assets/logo-ignite.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
