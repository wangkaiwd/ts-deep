interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  'click',
  'window',
  'my-event',
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer TPoint>
  ? TPoint // without dive deep into the element itself to understand its structure
  : never;

type GetPoint1<T> = T extends MyComplexInterface<any, any, any, any>
  ? ReturnType<T['getPoint']>
  : never;

type Example2 = GetPoint<MyComplexInterface<1, 2, 3, 4>>;
