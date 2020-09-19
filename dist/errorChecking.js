var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { notNull } from './util/typeguards';
export var invokeCheckFunction = function (value, callback, formName) {
    try {
        callback(value);
        return null;
    }
    catch (e) {
        var newError = {
            name: callback.name,
            message: e.message,
            value: value,
            arguments: __spreadArrays(callback.arguments),
            formName: formName,
        };
        return newError;
    }
};
export var checkErrors = function (value, callbackFunctions, formName) {
    var errors = callbackFunctions.map(function (callback) { return invokeCheckFunction(value, callback, formName); });
    return errors.filter(notNull);
};
//# sourceMappingURL=errorChecking.js.map