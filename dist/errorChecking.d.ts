import type { InputType, ErrorType, ToggleType } from './@types/FieldType';
export declare const invokeCheckFunction: (value: InputType | ToggleType, callback: (...args: unknown[]) => unknown, formName?: string | undefined) => ErrorType | null;
export declare const checkErrors: (value: InputType | ToggleType, callbackFunctions: ((...args: unknown[]) => unknown)[], formName?: string | undefined) => ErrorType[];
