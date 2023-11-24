// isInteger.js;
 const isInteger = require("./isInteger");
 test("isInteger passes for integer test", () => {

    expect(isInteger(1)).toBe(true);
});

test("isInteger fails for non-integer value", () => {
    expect(isInteger(1.23)).toBe(false);
});
