import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Section } from './Layout.styled';

export const Layout = () => {
  return (
    <Section>
      <Navigation />
      <Suspense>
        <Outlet />
      </Suspense>
    </Section>
  );
};
