const { capitalize, reversedString, calculator } = require("./script")

test("Capitalize", () => {
    expect(capitalize("computer")).toBe("Computer");
});

test("Reversed String", () => {
    expect(reversedString("computer")).toBe("retupmoc");
});

test("Calculator: add", () => {
    expect(calculator.add(2,2)).toBe(4);
});

test("Calculator: subtract", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test("Calculator: divide", () => {
    expect(calculator.divide(25, 5)).toBe(5);
});

test("Calculator: multiply", () => {
    expect(calculator.multiply(4,12)).toBe(48);
});