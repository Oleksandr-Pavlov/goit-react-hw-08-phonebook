import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H1 = styled.h1`
  margin-top: 0;
`;

export const Header = styled.header`
  /* margin-left: 10px; */
  /* display: flex;
  justify-content: left;
  align-items: flex-start; */
`;

export const NavItem = styled(NavLink)`
  &:first-child {
    margin-right: 150px;
  }
  &:not(:first-child) {
    margin-left: 10px;
    align-items: flex-end;
  }
`;
