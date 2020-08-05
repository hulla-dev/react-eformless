import type { InputType, ErrorType } from 'types/FieldType';
import { notNull } from './typeguards';

export const invokeCheckFunction = (
  value: InputType,
  callback: (...args: unknown[]) => unknown,
  formName?: string,
): ErrorType | null => {
  try {
    callback();
    return null;
  } catch (e) {
    const newError: ErrorType = {
      name: callback.name, // bug with typescript in vscode: https://github.com/microsoft/vscode/issues/103788
      message: e.message,
      value,
      arguments: [...callback.arguments],
      formName,
    };
    return newError;
  }
};

export const checkErrors = (
  value: InputType,
  callbackFunctions: Array<(...args: unknown[]) => unknown>,
  formName?: string,
): ErrorType[] => {
  const errors = callbackFunctions.map((callback) => invokeCheckFunction(value, callback, formName));
  return errors.filter(notNull);
};
