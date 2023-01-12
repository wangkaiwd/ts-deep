import type { Split } from 'ts-toolbelt/out/String/Split.js';

type Path = 'Users/John/Documents/notes.txt'

type SplitPath = Split<Path, '/'>
