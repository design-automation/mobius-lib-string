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
export function floatByString(str: string, defaultZero: boolean): (number|string) {
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
export function intByString(str: string, defaultZero: boolean): (number|string) {
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
export function floatsByString(strs: string[], defaultZero: boolean): (number|string)[] {
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
export function intsByString(strs: string[], defaultZero: boolean): (number|string)[] {
    if (!Array.isArray(strs)) {throw new Error("Invalid arg: strs must be an array of strings.");}
    return strs.map((str) => toInt(str, defaultZero));
}

// moved from modify: *****************************************************************************************************************************************************

/**
 * Searches for and replaces the specified search string in a string.
 * The search string can also be a regular expression.
 *
 * @param str String.
 * @param search_str Sub-string or regular expression to search for.
 * @param new_str Replacement string.
 * @returns New string with replaced characters.
 * @example string = "Orange"
 * newString = str.Modify.Replace(string,"O","Ar")
 * 
 * Expected value of newString is "Arrange".
 */
export function byReplace(str: string, search_str: string, new_str: string): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (search_str === undefined) {throw new Error("Invalid arg: search_str must be defined.");}
    if (new_str === undefined) {throw new Error("Invalid arg: new_str must be defined.");}
    return str.replace(search_str, new_str);
}

/**
 * Splits a string into a list of substrings using a specified separator string.
 *
 * @param str String.
 * @param separator String of characters used to split string.
 * @returns List of substrings.
 * @example string = "Orange"
 * split = str.Modify.split(string,"a")
 * 
 * Expected value of split is ["Or","nge"].
 */
export function bySplit(str: string, separator: string): string[] {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (separator === undefined) {throw new Error("Invalid arg: separator must be defined.");}
    return str.split(separator);
}

/**
 * Extracts characters in a string between two specified indices and returns it as a new string.
 * Start index is inclusive and end index is exclusive.
 *
 * @param str String.
 * @param start Zero-based index to start extracting characters (inclusive).
 * @param end Zero-based index to stop extracting characters (exclusive).
 * @returns New string with extracted characters.
 * @example string = "Orange"
 * substring = str.Modify.substring(string,1,4)
 * 
 * Expected value of substring is "ran".
 */
export function bySubstring(str: string, start: number, end: number): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.substring(start,end);
}

/**
 * Converts a string to lowercase letters.
 *
 * @param str String.
 * @returns New string with lowercase characters.
 * @example string = "Orange"
 * newstring = str.Modify.toLowercase(string)
 * 
 * Expected value of newstring is "orange".
 */
export function lowCaseByString(str: string): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.toLowerCase();
}

/**
 * Converts a string to uppercase letters.
 *
 * @param str String.
 * @returns New string with uppercase characters.
 * @example string = "Orange"
 * newstring = str.Modify.toUppercase(string)
 *
 * Expected value of newstring is "ORANGE".
 */
export function uppCaseByString(str: string): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.toUpperCase();
}

/**
 * Converts a value into a string.
 *
 * @param value Value to convert into string.
 * @returns New string.
 * @example value = [500,800]
 * newstring = str.Modify.toUppercase(value)
 * 
 * Expected value of newstring is "500,800".
 */
export function stringByConvert(value: any): string {
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    return value.toString();
}
