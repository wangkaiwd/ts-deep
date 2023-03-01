import type { CSSProperties } from 'react';

interface MyTheme {
  color: {
    primary: string
  };
  fontSize: {
    small: string
  };
}

// const useStyled = <TTheme = {}>(func: (theme: TTheme) => CSSProperties) => {
//   // Imagine that this function hooks into a global theme
//   // and returns the CSSProperties
//   return {} as CSSProperties
// }

// const buttonStyle = useStyled<MyTheme>((theme) => ({
//   color: theme.color.primary,
//   fontSize: theme.fontSize.small,
// }))
//
// const divStyle = useStyled<MyTheme>((theme) => ({
//   backgroundColor: theme.color.primary,
// }))

const makeUseStyled = <TTheme> () => {
  return (maker: (theme: TTheme) => CSSProperties) => {
    return maker({ color: { primary: 'pink' }, fontSize: { small: '12px' } } as TTheme);
  };
};

const useStyled = makeUseStyled<MyTheme>();
//
// // Now you don't have to pass in the theme every time
const buttonStyle = useStyled((theme) => ({
  color: theme.color.primary,
  fontSize: theme.fontSize.small,
}));
