export type Event =
  | {
  type: 'click'
  event: MouseEvent
}
  | {
  type: 'focus'
  event: FocusEvent
}
  | {
  type: 'keydown'
  event: KeyboardEvent
}

// extends: generic constrains
//  { type: 'click', event: MouseEvent } extends { type: 'click' } ? true : false
// true
// type Extract<T, U> = T extends U ? T : never;
type ClickEvent = Extract<Event, { type: 'click' }>

// type ClickEvent = {
//   type: "click"
//   event: MouseEvent
// }
