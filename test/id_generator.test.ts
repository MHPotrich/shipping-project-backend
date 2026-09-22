const { describe, expect, test } = require("@jest/globals");
const id_generator = require("../build/util/id_generator.js");

describe("util - id_generator", () => {
	test("Generate id", () => {
		expect(id_generator).toBeGreaterThan(0);
	});
});
