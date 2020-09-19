import useInput from './useInput';
import useToggle from './useToggle';
// in this case we want to allow conditional usage of hooks
/* eslint-disable react-hooks/rules-of-hooks */
var useField = function (input, config) { return (typeof input === 'boolean'
    ? useToggle(input, config)
    : useInput(input, config)); };
export default useField;
//# sourceMappingURL=useField.js.map