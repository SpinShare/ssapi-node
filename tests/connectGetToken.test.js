import { describe, it, expect, vi } from "vitest";
import SpinShareClient, {NotFoundError} from "../src/index.js";
import axios from "axios";

vi.mock("axios");

describe("connectGetToken", () => {
    const correctApiKey = "CONNECT-API-KEY";
    const correctCode = "AAAAAAAA";
    const wrongCode = "00000000";
    const correctToken = "CORRECT-TOKEN";

    it("should return a token", async () => {
        axios.get.mockResolvedValueOnce({status: 200, data: {
            status: 200,
            version: 1,
            data: correctToken,
        } });

        const client = new SpinShareClient();
        const token = await client.connectGetToken(correctApiKey, correctCode);

        expect(token).toBe(correctToken);
        vi.clearAllMocks();
    });
    it("should return 404 if apiKey was wrong", async () => {
        axios.get.mockResolvedValueOnce({status: 200, data: {
            status: 404,
            version: 1,
            data: [],
        }});

        const client = new SpinShareClient();
        await expect(client.connectGetToken("WRONG-API-KEY", wrongCode)).rejects.toThrowError(NotFoundError);

        vi.clearAllMocks();
    });
    it("should return 404 if token was wrong", async () => {
        axios.get.mockResolvedValueOnce({status: 200, data: {
            status: 404,
            version: 1,
            data: [],
        } });

        const client = new SpinShareClient();
        await expect(client.connectGetToken(correctApiKey, wrongCode)).rejects.toThrowError(NotFoundError);

        vi.clearAllMocks();
    });
});