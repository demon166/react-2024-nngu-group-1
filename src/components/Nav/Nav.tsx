import { RouteVariable } from "@/route/constants";
import NavItem from "@/components/Nav/components/NavItem/NavItem";

const Nav = () => {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <NavItem to={RouteVariable.home}>Главная</NavItem>
        <NavItem to={RouteVariable.catalog} end>
          Каталог
        </NavItem>
        <NavItem to={RouteVariable.about}>Контакты</NavItem>
      </nav>
    </div>
  );
};

export default Nav;
