const users = [
  {
    id: 1,
    firstName: 'Matt',
    lastName: 'Pocock',
  },
];

interface TName {
  firstName: string;
  lastName: string;
}

const concatenateFirstNameAndLastName = <TUser extends TName> (user: TUser) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

const result = concatenateFirstNameAndLastName({
  firstName: 'a',
  lastName: 'b',
  x: 1
});

type User<T extends object> = {
  [K in keyof T]: T[K]
} & { firstName: string; lastName: string }

const concatenateFirstNameAndLastName1 = <T extends object> (user: User<T>) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

const result1 = concatenateFirstNameAndLastName1({
  firstName: 'a',
  lastName: 'b',
  x: 1
});
