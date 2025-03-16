import { describe, it, expect, vi } from "vitest";
import {SpinShareClient, UnauthenticatedError} from "../src/index.js";
import axios from "axios";

vi.mock("axios");

describe("connectClearAllNotifications", () => {
    const correctToken = "CORRECT-TOKEN";
    const wrongToken = "WRONG-TOKEN";

    it("should not throw if notifications were cleared", async () => {
        axios.get.mockResolvedValueOnce({status: 200, data: {"version":1,"status":200,"data":[]} });

        const client = new SpinShareClient();
        const response = await client.connectClearAllNotifications(correctToken);
        expect(response).toBeDefined();
        vi.clearAllMocks();
    });

    it("should throw 403 if token is invalid", async () => {
        axios.get.mockResolvedValueOnce({status: 403, data: {
                "version":1,
                "status":403,
                "data":[]
            } });

        const client = new SpinShareClient();
        await expect(client.connectClearAllNotifications(wrongToken)).rejects.toThrowError(UnauthenticatedError);
        vi.clearAllMocks();
    });
});