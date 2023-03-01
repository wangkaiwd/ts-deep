type Email = ''
type Password = ''
const createUserOnApi = (values: { email: string; password: string }) => {
  // Imagine this function creates the user on the API
};
export const validateValues = (values: { email: string; password: string }) => {
  if (!values.email.includes('@')) {
    throw new Error('Email invalid');
  }
  if (values.password.length < 8) {
    throw new Error('Password not long enough');
  }

  return {
    email: values.email,
    password: values.password,
  };
};

const onSubmitHandler = (values: { email: string; password: string }) => {
  const validatedValues = validateValues(values);
  // How do we stop this erroring?
  createUserOnApi(validatedValues);
};
