import { describe, it, expect, vi } from "vitest";
import SpinShareClient, {NotFoundError} from "../src/index.js";

describe("getDlcs", () => {
    it("should return a list of DLCs", async () => {
        const client = new SpinShareClient();
        const response = await client.getDlcs();

        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
    });
});