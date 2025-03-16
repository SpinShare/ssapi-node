import { describe, it, expect, vi } from "vitest";
import SpinShareClient, {NotFoundError} from "../src/index.js";

describe("searchPlaylists", () => {
    it("should return an array of playlists", async () => {
        const client = new SpinShareClient();
        const response = await client.searchPlaylists("chart");

        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeGreaterThan(0);
    });
    it("should return an empty array of playlists", async () => {
        const client = new SpinShareClient();
        const response = await client.searchPlaylists("QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM;:_");

        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeLessThanOrEqual(0);
    });
});