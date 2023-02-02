import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { Layout } from './Layout/Layout';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { Contacts } from 'pages/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'Redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    'More minutes later...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute component={Contacts} redirectTo="/login" />}
          />
          <Route
            path="register"
            element={<RestrictedRoute component={Register} redirectTo={'/'} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={Login} redirectTo={'/'} />}
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}
