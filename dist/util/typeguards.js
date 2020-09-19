// Special typeguards to prevent implicit typing from typescript throwing errors
// can be for example ussed in array functions as a function reference so assertion isn't needed
export var notUndefined = function (x) { return x !== undefined; };
export var notNull = function (x) { return x !== null; };
export var undefinedOnEmpty = function (array) { return (array.length !== 0
    ? array
    : undefined); };
//# sourceMappingURL=typeguards.js.map