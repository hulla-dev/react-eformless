// Special typeguards to prevent implicit typing from typescript throwing errors
// can be for example ussed in array functions as a function reference so assertion isn't needed

export const notUndefined = <T>(x: T | undefined): x is T => x !== undefined;

export const notNull = <T>(x: T | null): x is T => x !== null;

export const undefinedOnEmpty = <T>(array: T[]): T[] | undefined => (
  array.length !== 0
    ? array
    : undefined
);
