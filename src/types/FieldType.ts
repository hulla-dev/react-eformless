import { ChangeEvent } from 'react';

export type ErrorType = {
  name: string,
  message: string,
  value: InputType,
  arguments: unknown[],
  formName?: string,
}

export type InputType = string | number | Date;

export type FieldType = {
  value: InputType,
  errors?: ErrorType[],
  wasChanged: boolean,
  wasBlurred: boolean,
}

export type InputHandlerFunction = (event: ChangeEvent<HTMLButtonElement | HTMLTextAreaElement>) => void;
