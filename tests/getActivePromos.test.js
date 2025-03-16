import { describe, it, expect } from "vitest";
import {SpinShareClient} from "../src/index.js";

describe("getActivePromos", () => {
    it("should return an array of promos", async () => {
        const client = new SpinShareClient();
        const response = await client.getActivePromos();

        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
    });
});