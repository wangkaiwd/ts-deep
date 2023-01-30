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
// inverse of Extract
type MyExclude<T, U> = T extends U ? never : T

type NonKeyDownEvents = Exclude<Event, { type: 'keydown' }>
