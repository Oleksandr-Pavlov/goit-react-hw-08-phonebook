import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const H1 = styled.h1`
  margin-top: 0;
`;

export const Header = styled.header`
  /* margin-left: 10px; */
  display: flex;
  flex-direction: row;

  /* justify-content: left; */
  align-items: baseline;

  width: 100%;
  height: 25px;

  padding-bottom: 10px;
`;

export const NavItem = styled(NavLink)`
  &.active {
    visibility: hidden;
    width: 0;
  }
  &:first-child {
    /* margin-right: 50px; */
  }
  &:not(:first-child) {
    margin-left: 10px;
    /* align-items: flex-end; */
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;
