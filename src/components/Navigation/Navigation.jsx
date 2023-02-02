import { useAuth } from 'components/hooks/useAuth';
import { Header, List, NavItem } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Header>
        <NavLink to="/" key="home" style={{"color": "yellowgreen", "fontWeight": 500}}>
          {isLoggedIn ? 'Contacts' : 'Home'}
        </NavLink>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <List>
            <NavItem to="register" key="register">
              Register
            </NavItem>

            <NavItem to="login" key="login">
              Log In
            </NavItem>
          </List>
        )}
      </Header>
    </>
  );
};
