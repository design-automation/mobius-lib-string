import * as tm from "../_export";
import {} from "jasmine";

describe("Tests for convert module", () => {
    it("test_convert_toFloats", () => {
        expect( test_prop_setValues() ).toBe(true);
    });
});

export function test_prop_setValues(): boolean {
    const strs: string[] = ["123", "456.7", "dhfjdh"];
    const result1: number[] = tm.convert.toFloats(strs, false);
    console.log(result1);
    const result2: number[] = tm.convert.toInts(strs, false);
    console.log(result2);
    return true;
}
