const { describe, expect, test } = require("@jest/globals");
const id_generator = require("../src/utils/id_generator.ts");

describe("util - id_generator", () => {
	test("Generate id", () => {
		expect(id_generator).toBeGreaterThan(0);
	});
});
