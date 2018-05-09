/**
 * Functions for converting strings to other types.
 */

/**
 *
 */

/**
 * Converts a string to a floating point number.
 * Will return NaN is the string cannot be converted.
 * https://www.w3schools.com/jsref/jsref_parsefloat.asp
 *
 * @param str String to convert.
 * @param defaultZero boolean, if true then zero will be returned
 * if the string cannot be converted to a number.
 * @returns Floating point number.
 *
 */
export function toFloat(str: string, defaultZero: boolean): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    let result: number = parseFloat(str);
    if (isNaN(result) && defaultZero) {result = 0.0;}
    return result;
}

/**
 * Converts a string to an integer number.
 * Will return NaN is the string cannot be converted.
 * https://www.w3schools.com/jsref/jsref_parseint.asp
 *
 * @param str String to convert.
 * @param defaultZero boolean, if true then zero will be returned
 * if the string cannot be converted to a number.
 * @returns Integer number.
 *
 */
export function toInt(str: string, defaultZero: boolean): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    let result: number = parseInt(str);
    if (isNaN(result) && defaultZero) {result = 0;}
    return result;
}

/**
 * Converts an array of strings to floating point numbers.
 * https://www.w3schools.com/jsref/jsref_parsefloat.asp
 *
 * @param str An array of strings to convert.
 * @param defaultZero boolean, if true then any value that cannot be converted to a number
 * will be set to zero.
 * @returns An array of floating point numbers.
 *
 */
export function toFloats(strs: string[], defaultZero: boolean): number[] {
    if (!Array.isArray(strs)) {throw new Error("Invalid arg: strs must be an array of strings.");}
    return strs.map((str) => toFloat(str, defaultZero))
}

/**
 * Converts an array of strings to integer numbers.
 * https://www.w3schools.com/jsref/jsref_parseint.asp
 *
 * @param str An array of strings to convert.
 * @param defaultZero boolean, if true then any value that cannot be converted to a number
 * will be set to zero.
 * @returns An array of integer numbers.
 *
 */
export function toInts(strs: string[], defaultZero: boolean): number[] {
    if (!Array.isArray(strs)) {throw new Error("Invalid arg: strs must be an array of strings.");}
    return strs.map((str) => toInt(str, defaultZero))
}
