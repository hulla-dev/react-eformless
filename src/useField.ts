import { useState } from 'react';
import { FieldType, InputType, InputHandlerFunction } from 'types/FieldType';
import { checkErrors } from 'util/errorChecking';
import { undefinedOnEmpty } from 'util/typeguards';

const useField = (
  input: InputType,
  ...errorFunctions: Array<(...args: unknown[]) => unknown>
): [FieldType, InputHandlerFunction, InputHandlerFunction] => {
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

export default useField;
