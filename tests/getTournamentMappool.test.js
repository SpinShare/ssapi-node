import { describe, it, expect, vi } from "vitest";
import SpinShareClient, {NotFoundError} from "../src/index.js";

describe("getTournamentMappool", () => {
    it("should return a playlist", async () => {
        const client = new SpinShareClient();
        const response = await client.getTournamentMappool();

        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
    });
});