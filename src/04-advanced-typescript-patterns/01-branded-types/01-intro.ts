// import type { Brand } from '../../helpers/brand.js';
//
// type Password = Brand<string, 'Password'>;
//
// const passwordSlot: Password = '123123' as Password;
//
// type UserObject = Brand<
//   {
//     id: string;
//     name: string;
//   },
//   'User'
// >;
//
// const user: UserObject = {
//   id: 'asd123',
//   name: 'Matt'
// } as UserObject;
//
// // todo: read articles
// //      1. https://basarat.gitbook.io/typescript/main-1/nominaltyping
// //      2. https://codemix.com/opaque-types-in-javascript/

import { describe, expect, it } from 'vitest';
import type { Brand } from '../../helpers/brand.js';

type Password = Brand<string, 'Password'>;
type Email = Brand<string, 'Email'>;

export const validateValues = (values: { email: string; password: string }) => {
  if (!values.email.includes('@')) {
    throw new Error('Email invalid');
  }
  if (values.password.length < 8) {
    throw new Error('Password not long enough');
  }

  return {
    email: values.email as Email,
    password: values.password as Password,
  };
};

const createUserOnApi = (values: { email: Email; password: Password }) => {
  // Imagine this function creates the user on the API
  // const a = values.email
};

const onSubmitHandler = (values: { email: string; password: string }) => {
  const validatedValues = validateValues(values);
  createUserOnApi(validatedValues);
};

describe('onSubmitHandler', () => {
  it('Should error if the email is invalid', () => {
    expect(() => {
      onSubmitHandler({
        email: 'invalid',
        password: '12345678',
      });
    }).toThrowError('Email invalid');
  });

  it('Should error if the password is too short', () => {
    expect(() => {
      onSubmitHandler({
        email: 'whatever@example.com',
        password: '1234567',
      });
    }).toThrowError('Password not long enough');
  });
});
