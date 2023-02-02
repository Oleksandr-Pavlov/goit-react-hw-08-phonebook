import { useDispatch } from 'react-redux';
import { login } from 'Redux/auth/operations';
import { Button, Form, Input, Label } from './Login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <p>Please Log In or Register</p>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>Email</Label>
        <Input type="tel" name="email" required />
        <Label>Password</Label>
        <Input type="tel" name="password" required />
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
};
