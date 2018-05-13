/**
 * Functions for converting strings to other types.
 */

/**
 *
 */

/**
 * Converts a string to a floating point number.
 *
 * See [https://www.w3schools.com/jsref/jsref_parsefloat.asp](https://www.w3schools.com/jsref/jsref_parsefloat.asp)
 *
 * @param str String to convert.
 * @param defaultZero boolean, controlling what to do when the value cannot be converted.
 * If defaultZero is true, then the value will default to 0.0.
 * If defaultZero is false, then the value will remain unchanged (as a string).
 * @returns Floating point number, or input string.
 *
 */
export function toFloat(str: string, defaultZero: boolean): (number|string) {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    let result: number = parseFloat(str);
    if (isNaN(result) && defaultZero) {return 0.0;}
    if (isNaN(result) && !defaultZero) {return str;}
    return result;
}

/**
 * Converts a string to an integer number.
 *
 * See [https://www.w3schools.com/jsref/jsref_parseint.asp](https://www.w3schools.com/jsref/jsref_parseint.asp)
 *
 * @param str String to convert.
 * @param defaultZero boolean, controlling what to do when a value cannot be converted.
 * If defaultZero is true, then the value will default to 0.
 * If defaultZero is false, then the value will remain unchanged (as a string).
 * @returns Integer number, or input string.
 *
 */
export function toInt(str: string, defaultZero: boolean): (number|string) {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    let result: number = parseInt(str);
    if (isNaN(result) && defaultZero) {return 0.0;}
    if (isNaN(result) && !defaultZero) {return str;}
    return result;
}

/**
 * Converts an array of strings to floating point numbers.
 *
 * @param str An array of strings to convert.
 * @param defaultZero boolean, controlling what to do when a value cannot be converted.
 * If defaultZero is true, then the value will default to 0.
 * If defaultZero is false, then the value will remain unchanged (as a string).
 * @returns An array of floating point numbers, or strings.
 * @example
 * data = ["10.12","20.34","30.56", "some_text"]
 * result1 = str.convert.toInts(data, true)
 * //result1 will be [10, 20, 30, 0]
 * result2 = str.convert.toInts(data, true)
 * //result2 will be [10.12, 20.34, 30.56, "some_text"]
 */
export function toFloats(strs: string[], defaultZero: boolean): (number|string)[] {
    if (!Array.isArray(strs)) {throw new Error("Invalid arg: strs must be an array of strings.");}
    return strs.map((str) => toFloat(str, defaultZero));
}

/**
 * Converts an array of strings to integer numbers.
 *
 * @param str An array of strings to convert.
 * @param defaultZero boolean, controlling what to do when a value cannot be converted.
 * If defaultZero is true, then the value will default to 0.
 * If defaultZero is false, then the value will remain unchanged (as a string).
 * @returns An array of integer numbers, or strings.
 * @example
 * data = ["10","20","30", "some_text"]
 * result1 = str.convert.toInts(data, true)
 * //result1 will be [10, 20, 30, 0]
 * result2 = str.convert.toInts(data, true)
 * //result2 will be [10, 20, 30, "some_text"]
 */
export function toInts(strs: string[], defaultZero: boolean): (number|string)[] {
    if (!Array.isArray(strs)) {throw new Error("Invalid arg: strs must be an array of strings.");}
    return strs.map((str) => toInt(str, defaultZero));
}
