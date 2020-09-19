import { ChangeEvent } from 'react';
export interface useFieldFunctionConfig {
    name?: string;
    errorFunctions?: Array<(...args: unknown[]) => unknown>;
}
export declare type useFieldFunction = (input: InputType | ToggleType, config?: useFieldFunctionConfig) => [FieldType, ...Array<InputHandlerFunction | ToggleHandlerFunction>];
export interface ErrorType {
    name: string;
    message: string;
    value: InputType | ToggleType;
    arguments: unknown[];
    formName?: string;
}
export declare type InputType = string | number | Date;
export declare type InputHandlerFunction = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export declare type ToggleType = boolean;
export declare type ToggleHandlerFunction = (event: ChangeEvent<HTMLInputElement | HTMLButtonElement>) => void;
export interface FieldType {
    value: InputType | ToggleType;
    errors?: ErrorType[];
    wasChanged: boolean;
    wasBlurred: boolean;
}
