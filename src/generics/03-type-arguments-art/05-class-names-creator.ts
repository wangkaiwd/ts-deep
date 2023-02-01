const createClassNamesFactory =
  <TVariant extends string> (classes: Record<TVariant, string>) =>
    (type: TVariant, ...otherClasses: string[]) => {
      const classList = [classes[type], ...otherClasses];
      return classList.join(' ');
    };

// const createClassNamesFactory1 =
//   <TVariant extends string>(classes: Record<TVariant, string>) =>
//     (type: TVariant, ...otherClasses: string[]) => {
//       const classList = [classes[type], ...otherClasses];
//       return classList.join(" ");
//     };

const classNamesFactory = createClassNamesFactory({ primary: 'primary', secondary: 'secondary' });
const cls = classNamesFactory('primary', 'x', 'y');

const createClassNamesFactory1 =
  <TClasses extends Record<string, string>> (classes: TClasses) =>
    (type: keyof TClasses, ...otherClasses: string[]) => {
      const classList = [classes[type], ...otherClasses];
      return classList.join(' ');
    };

const classNamesFactory1 = createClassNamesFactory1({ primary: 'primary', secondary: 'secondary' });
const cls1 = classNamesFactory1('primary', 'x', 'y');
