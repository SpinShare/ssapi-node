import { describe, it, expect, vi } from "vitest";
import SpinShareClient, {NotFoundError, ServerError} from "../src/index.js";

describe("getChartDownload", () => {
    it("should return a zip by id", async () => {
        const client = new SpinShareClient();
        const id = 1904;
        const response = await client.getChartDownload(id);

        expect(response).toBeDefined();
        expect(response.startsWith("PK")).toBeTruthy;
    });
    it("should return 404 if not found", async () => {
        const client = new SpinShareClient();
        await expect(client.getChartDownload(0)).rejects.toThrowError();
    });
});