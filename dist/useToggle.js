var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { useState } from 'react';
import { checkErrors } from './errorChecking';
import { undefinedOnEmpty } from './util/typeguards';
var useToggle = function (isChecked, config) {
    var errorFunctions = (config === null || config === void 0 ? void 0 : config.errorFunctions) || [];
    var initialState = {
        value: isChecked,
        wasChanged: false,
        wasBlurred: false,
        errors: undefinedOnEmpty(__spreadArrays(checkErrors(isChecked, errorFunctions))),
    };
    var _a = useState(initialState), field = _a[0], setField = _a[1];
    var handleToggle = function (event) {
        var _a = event.target, checked = _a.checked, name = _a.name;
        var errors = checkErrors(checked, errorFunctions, name);
        setField(function (prevState) { return (__assign(__assign({}, prevState), { value: checked, errors: undefinedOnEmpty(__spreadArrays(prevState.errors || [], errors)), wasChanged: true, wasBlurred: true })); });
    };
    return [field, handleToggle];
};
export default useToggle;
//# sourceMappingURL=useToggle.js.map