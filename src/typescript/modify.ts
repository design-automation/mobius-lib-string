/**
 * Functions for ...
 */

/**
 * The <i>str.Modify</i> module provides a set of functions for working with strings.
 * Strings are a data type for representing text, consisting of a sequence of characters.<br/>
 *
 * When instantiating a string, use double quotes as follows: <code>"This is some text."</code>.<br/>
 *
 * These functions perform modifications on an input string and return a new, modified string.
 */

import * as gs from "gs-json";

//  ===============================================================================================================
//  String Modify functions =======================================================================================
//  ===============================================================================================================

/**
 * Searches for and replaces the specified search string in a string.
 * The search string can also be a regular expression.
 *
 * @param str String.
 * @param search_str Sub-string or regular expression to search for.
 * @param new_str Replacement string.
 * @returns New string with replaced characters.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * newString = str.Modify.Replace(string,"O","Ar")<br/></code>
 * <br/>Expected value of newString is "Arrange".
 */
export function replace(str: string, search_str: string, new_str: string): string {
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
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * split = str.Modify.split(string,"a")<br/></code>
 * <br/>Expected value of split is ["Or","nge"].
 */
export function split(str: string, separator: string): string[] {
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
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * substring = str.Modify.substring(string,1,4)<br/></code>
 * <br/>Expected value of substring is "ran".
 */
export function substring(str: string, start: number, end: number): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.substring(start,end);
}

/**
 * Converts a string to lowercase letters.
 *
 * @param str String.
 * @returns New string with lowercase characters.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * newstring = str.Modify.toLowercase(string)<br/></code>
 * <br/>Expected value of newstring is "orange".
 */
export function toLowercase(str: string): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.toLowerCase();
}

/**
 * Converts a string to uppercase letters.
 *
 * @param str String.
 * @returns New string with uppercase characters.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * newstring = str.Modify.toUppercase(string)<br/></code>
 * <br/>Expected value of newstring is "ORANGE".
 */
export function toUppercase(str: string): string {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.toUpperCase();
}

/**
 * Converts a value into a string.
 *
 * @param value Value to convert into string.
 * @returns New string.
 *
 * <h3>Example:</h3>
 * <code>value = [500,800]<br/>
 * newstring = str.Modify.toUppercase(value)<br/></code>
 * <br/>Expected value of newstring is "500,800".
 */
export function toString(value: any): string {
    if (value === undefined) {throw new Error("Invalid arg: value must be defined.");}
    return value.toString();
}
