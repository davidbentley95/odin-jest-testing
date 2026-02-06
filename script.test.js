const { capitalize } = require("./script")

test("Capitalize", () => {
    expect(capitalize("computer")).toBe("Computer");
});