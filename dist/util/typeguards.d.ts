export declare const notUndefined: <T>(x: T | undefined) => x is T;
export declare const notNull: <T>(x: T | null) => x is T;
export declare const undefinedOnEmpty: <T>(array: T[]) => T[] | undefined;
