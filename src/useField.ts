import useInput from './useInput';
import useToggle from './useToggle';
import {
  InputType, ToggleType, useFieldFunctionConfig, useFieldFunction,
} from './@types/FieldType';

// in this case we want to allow conditional usage of hooks
/* eslint-disable react-hooks/rules-of-hooks */
const useField: useFieldFunction = (
  input: InputType | ToggleType,
  config?: useFieldFunctionConfig,
) => (
  typeof input === 'boolean'
    ? useToggle(input, config)
    : useInput(input, config)
);

export default useField;
