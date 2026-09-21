import { describe, expect, test } from "@jest/globals";
import id_generator from "../src/util/id_generator.ts";

describe("util - id_generator", () => {
	test("Generate id", () => {
		expect(id_generator).toBeGreaterThan(0);
	});
});
