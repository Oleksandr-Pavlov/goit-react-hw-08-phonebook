import { Report } from 'notiflix/build/notiflix-report-aio';
import { useDispatch } from 'react-redux';
import { register } from 'Redux/auth/operations';
import { Button, Form, Input, Label } from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.password.value.length);

    if (form.elements.password.value.length < 7) {
      Report.warning(
        'Warning',
        'Minimum password length must be 7 characters',
        'Okay'
      );
    }

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>Username</Label>
        <Input type="text" name="name" required />
        <Label>Email</Label>
        <Input type="tel" name="email" required />
        <Label>Password</Label>
        <Input type="tel" name="password" required />
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
