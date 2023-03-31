type Validator = (...args: any[]) => (value: any) => boolean;
export declare const pattern: Validator;
export declare const max: Validator;
export declare const min: Validator;
export declare const maxLength: Validator;
export declare const minLength: Validator;
export declare const gt: (number: number) => (value: number) => boolean;
export declare const gte: (number: number) => (value: number) => boolean;
export declare const lt: (number: number) => (value: number) => boolean;
export declare const lte: (number: number) => (value: number) => boolean;
export declare const equals: (tagetValue: any) => (value: any) => boolean;
export declare const isPositionInteger: () => (number: number) => boolean;
export {};