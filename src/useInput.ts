import { useState } from 'react';
import { checkErrors } from './errorChecking';
import { undefinedOnEmpty } from './util/typeguards';
import {
  FieldType,
  InputType,
  InputHandlerFunction,
  useFieldFunction,
  useFieldFunctionConfig,
} from './types/FieldType';

const useInput: useFieldFunction = (
  input: InputType,
  config?: useFieldFunctionConfig,
): [FieldType, InputHandlerFunction, InputHandlerFunction] => {
  const errorFunctions = config?.errorFunctions || [];
  const initialState: FieldType = {
    value: input,
    wasChanged: false,
    errors: undefinedOnEmpty([...checkErrors(input, errorFunctions)]),
    wasBlurred: false,
  };
  const [field, setField] = useState<FieldType>(initialState);

  const handleChange: InputHandlerFunction = (event) => {
    const { value, name } = event.target;
    const errors = checkErrors(value, errorFunctions, name);
    setField((prevState) => ({
      ...prevState,
      value,
      errors: undefinedOnEmpty([...prevState.errors || [], ...errors]),
      wasChanged: true,
    }));
  };

  const handleBlur: InputHandlerFunction = (event) => {
    const { value, name } = event.target;
    const errors = checkErrors(value, errorFunctions, name);
    setField((prevState) => ({
      ...prevState,
      value,
      errors: undefinedOnEmpty([...prevState.errors || [], ...errors]),
      wasBlurred: true,
    }));
  };

  return [field, handleChange, handleBlur];
};

export default useInput;
