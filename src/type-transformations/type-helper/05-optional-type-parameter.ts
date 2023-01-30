// default value for type
type MaybeError = Error | undefined

type CreateDataShape<TData, TError extends MaybeError = undefined> = {
  data: TData;
  error: TError;
};
