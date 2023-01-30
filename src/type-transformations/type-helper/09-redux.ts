// interface Action<T = any> {
//   type: T;
// }
//
// interface AnyAction extends Action {
//   // Allows any extra properties to be defined in an action.
//   [extraProps: string]: any;
// }
//
// type Reducer<S = any, A extends Action = AnyAction> = (
//   state: S | undefined,
//   action: A
// ) => S
//
// type MyReducerAction = {
//   type: 'MY_ACTION',
// };
//
// type MyReducerAction1 =
//   | {
//   type: 'MY_ACTION'
// }
//   | {
//   type: 'MY_OTHER_ACTION'
// }
//
// const reducer: Reducer<
//   {
//     count: number
//   },
//   MyReducerAction
// > = (
//   state = {
//     count: 0
//   },
//   action
// ) => {
//   console.log('action', action);
//   state.count++;
//   return state;
// };

// redux reducer
interface Action {
  type: string;
}

interface AnyAction extends Action {
  [extraProps: string]: any;
}

type Reducer<S, T extends Action = AnyAction> = (state: S, action: T) => S

// How to use type variable with generic as function type
const reducer: Reducer<{ a: 1, b: 2 }, Action> = (state, action) => {
  return state;
};
