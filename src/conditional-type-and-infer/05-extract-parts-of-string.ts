import type { Split } from 'ts-toolbelt/out/String/Split.js';

type Names = [
  'Matt Pocock',
  'Jimi Hendrix',
  'Eric Clapton',
  'John Mayer',
  'BB King'
]

type GetSurname<T> = T extends `${string} ${infer Last}` ? Last : never;

type LastName = GetSurname<Names[number]>

type GetSurname1<T extends string> = Split<T, ' '>[1]

type LastName1 = GetSurname1<Names[number]>
