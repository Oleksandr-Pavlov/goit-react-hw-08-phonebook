import { useAuth } from 'components/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'Redux/auth/operations';
import { Btn, P, UserNav } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logout());

  return (
    <UserNav>
      <P>{user.email}</P>
      <Btn onClick={handleLogOut}>Logout</Btn>
    </UserNav>
  );
};
