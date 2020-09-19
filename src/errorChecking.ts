import type { InputType, ErrorType, ToggleType } from './@types/FieldType';
import { notNull } from './util/typeguards';

export const invokeCheckFunction = (
  value: InputType | ToggleType,
  callback: (...args: unknown[]) => unknown,
  formName?: string,
): ErrorType | null => {
  try {
    callback(value);
    return null;
  } catch (e) {
    const newError: ErrorType = {
      name: callback.name,
      message: e.message,
      value,
      arguments: [...callback.arguments],
      formName,
    };
    return newError;
  }
};

export const checkErrors = (
  value: InputType | ToggleType,
  callbackFunctions: Array<(...args: unknown[]) => unknown>,
  formName?: string,
): ErrorType[] => {
  const errors = callbackFunctions.map((callback) => invokeCheckFunction(value, callback, formName));
  return errors.filter(notNull);
};
