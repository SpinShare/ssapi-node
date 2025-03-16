import { describe, it, expect, vi } from "vitest";
import SpinShareClient, {NotFoundError} from "../src/index.js";

describe("getUserPlaylists", () => {
    it("should return playlists of a user by id", async () => {
        const client = new SpinShareClient();
        const id = 4;
        const response = await client.getUserPlaylists(id);

        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
    });
    it("should return an empty array if not found", async () => {
        const client = new SpinShareClient();
        await expect(client.getUserPlaylists(0)).rejects.toThrowError(NotFoundError);
    });
});