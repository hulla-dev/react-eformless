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
var useInput = function (input, config) {
    var errorFunctions = (config === null || config === void 0 ? void 0 : config.errorFunctions) || [];
    var initialState = {
        value: input,
        wasChanged: false,
        errors: undefinedOnEmpty(__spreadArrays(checkErrors(input, errorFunctions))),
        wasBlurred: false,
    };
    var _a = useState(initialState), field = _a[0], setField = _a[1];
    var handleChange = function (event) {
        var _a = event.target, value = _a.value, name = _a.name;
        var errors = checkErrors(value, errorFunctions, name);
        setField(function (prevState) { return (__assign(__assign({}, prevState), { value: value, errors: undefinedOnEmpty(__spreadArrays(prevState.errors || [], errors)), wasChanged: true })); });
    };
    var handleBlur = function (event) {
        var _a = event.target, value = _a.value, name = _a.name;
        var errors = checkErrors(value, errorFunctions, name);
        setField(function (prevState) { return (__assign(__assign({}, prevState), { value: value, errors: undefinedOnEmpty(__spreadArrays(prevState.errors || [], errors)), wasBlurred: true })); });
    };
    return [field, handleChange, handleBlur];
};
export default useInput;
//# sourceMappingURL=useInput.js.map