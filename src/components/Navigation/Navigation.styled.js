import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H1 = styled.h1`
  margin-top: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: baseline;
  width: 100%;
  height: 25px;
  padding-bottom: 10px;
`;

export const NavItem = styled(NavLink)`
  color: yellowgreen;
  font-weight: 500;
  /* transition: all 200ms linear; */
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    visibility: hidden;
    width: 0;
  }
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const List = styled.div`
  display: flex;
  margin-left: auto;
`;
