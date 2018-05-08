/**
 * Functions for ...
 */

/**
 * The <i>str.Evak</i> module provides a set of functions for working with strings.
 * Strings are a data type for representing text, consisting of a sequence of characters.<br/>
 *
 * When instantiating a string, use double quotes as follows: <code>"This is some text."</code>.<br/>
 *
 * These functions obtain and return information from an input string, without modifying the original string.
 * You may use regular expressions in the search functions.
 */

//  ===============================================================================================================
//  String Eval functions =========================================================================================
//  ===============================================================================================================

/**
 * Checks if a string starts with the specified start string.
 *
 * @param str String to check.
 * @param start_str Start tring.
 * @returns True if str starts with search_str, false otherwise.
 *
 * <h3>Example:</h3>
 * <code>
 * string = "Orange"<br/>
 * result = str.Eval.startsWith(string,"Or")<br/>
 * </code>
 * <br/>Expected value of result is true.
 */
export function startsWith(str: string, start_str: string): boolean {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (start_str === undefined) {throw new Error("Invalid arg: start_str must be defined.");}
    return str.startsWith(start_str);
}

/**
 * Checks if a string ends with a specified end string.
 *
 * @param str String to check.
 * @param end_str End string.
 * @returns True if str ends with search_str, false otherwise.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * result = str.Eval.endsWith(string,"ge")<br/></code>
 * <br/>Expected value of result is true.
 */
export function endsWith(str: string, end_str: string): boolean {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (end_str === undefined) {throw new Error("Invalid arg: end_str must be defined.");}
    return str.endsWith(end_str);
}

/**
 * Checks if a string contains a specified search string.
 *
 * @param str String to search.
 * @param search_str Sub-string to search for.
 * @returns True if str contains search_str, false otherwise.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * incl = str.Eval.includes(string,"an")<br/></code>
 * <br/>Expected value of incl is true.
 */
export function includes(str: string, search_str: string): boolean {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (search_str === undefined) {throw new Error("Invalid arg: search_str must be defined.");}
    return str.includes(search_str);
}

/**
 * Returns the number of characters in a string.
 *
 * @param str String to find length of.
 * @returns Length of string.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * length = str.Eval.len(string)<br/></code>
 * <br/>Expected value of length is 6.
 */
export function len(str: string): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    return str.length;
}

/**
 * Returns the position index of the first occurance of the specified search string within a string.
 * If the specified sub-string cannot be found, then returns -1.
 * (This function uses regular expressions, if searching using a string, use str.Eval.indexOf)
 *
 * @param str String to check.
 * @param search_str Regular expression to search for.
 * @returns Number that represents first position of search_str in str.
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * search = str.Eval.search(string,"e")<br/></code>
 * <br/>Expected value of search is 5.
 */
export function search(str: string, search_str: string): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (search_str === undefined) {throw new Error("Invalid arg: search_str must be defined.");}
    return str.search(search_str);
}

/**
 * Returns the position index of the first occurance of the specified search string within a string.
 * If the specified sub-string cannot be found, then returns -1.
 *
 * @param str String to check.
 * @param search_str Sub-string to search for. (Case sensitive)
 * @returns Number that represents last position of search_str in str.
 *
 * <h3>Example:</h3>
 * <code>string = "Banana"<br/>
 * search = str.Eval.indexOf(string,"a")<br/></code>
 * <br/>Expected value of search is 1.
 */
export function indexOf(str: string, search_str: string): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (search_str === undefined) {throw new Error("Invalid arg: search_str must be defined.");}
    return str.indexOf(search_str);
}

/**
 * Returns the position index of the last occurance of the specified search string within a string.
 * If the specified sub-string cannot be found, then returns -1.
 * (The string is searched starting from its end)
 *
 * @param str String to check.
 * @param search_str Sub-string to search for. (Case sensitive)
 * @returns Number that represents last position of search_str in str.
 *
 * <h3>Example:</h3>
 * <code>string = "Banana"<br/>
 * search = str.Eval.lastIndexOf(string,"a")<br/></code>
 * <br/>Expected value of search is 5.
 */
export function lastIndexOf(str: string, search_str: string): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (search_str === undefined) {throw new Error("Invalid arg: search_str must be defined.");}
    return str.lastIndexOf(search_str);
}

/**
 * Compares two strings in the current locale (language setting).
 * (In general, the order is as follows: digits (0-9), upper-case (A-Z), then lower-case (a-z))
 *
 * @param str String to check.
 * @param comp_str String to compare against.
 * @returns Number indicating whether str comes before or after comp_str in sort order. (-1: before, 0: equal, 1: after)
 *
 * <h3>Example:</h3>
 * <code>string = "Orange"<br/>
 * comp_str = "Apple"<br/>
 * comp = str.Eval.localeCompare(string,comp_str)<br/></code>
 * <br/>Expected value of comp is 1.
 */
export function localeCompare(str: string, comp_str: string): number {
    if (str === undefined) {throw new Error("Invalid arg: str must be defined.");}
    if (comp_str === undefined) {throw new Error("Invalid arg: search_str must be defined.");}
    return str.localeCompare(comp_str);
}


