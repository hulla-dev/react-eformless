import { useState, ChangeEvent } from 'react';
import { checkErrors } from './errorChecking';
import { undefinedOnEmpty } from './util/typeguards';
import {
  FieldType, ToggleHandlerFunction, useFieldFunction, useFieldFunctionConfig,
} from './@types/FieldType';

const useToggle: useFieldFunction = (
  isChecked: boolean,
  config?: useFieldFunctionConfig,
): [FieldType, ToggleHandlerFunction] => {
  const errorFunctions = config?.errorFunctions || [];
  const initialState: FieldType = {
    value: isChecked,
    wasChanged: false,
    wasBlurred: false,
    errors: undefinedOnEmpty([...checkErrors(isChecked, errorFunctions)]),
  };

  const [field, setField] = useState<FieldType>(initialState);

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    const errors = checkErrors(checked, errorFunctions, name);
    setField((prevState) => ({
      ...prevState,
      value: checked,
      errors: undefinedOnEmpty([...prevState.errors || [], ...errors]),
      wasChanged: true,
      wasBlurred: true,
    }));
  };

  return [field, handleToggle];
};

export default useToggle;
