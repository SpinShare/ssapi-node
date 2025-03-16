import { describe, it, expect } from "vitest";
import {NotFoundError, SpinShareClient} from "../src/index.js";

describe("getClientLatestVersion", () => {
    it("should return the latest windows client version", async () => {
        const client = new SpinShareClient();
        const response = await client.getClientLatestVersion("win32");

        expect(response.stringVersion).toBeDefined();
        expect(response.majorVersion).toBeDefined();
        expect(response.minorVersion).toBeDefined();
        expect(response.patchVersion).toBeDefined();
        expect(response.platform).toBe("win32");
        expect(response.path).toBeDefined();
    });

    it("should return the latest mac client version", async () => {
        const client = new SpinShareClient();
        const response = await client.getClientLatestVersion("darwin");

        expect(response.stringVersion).toBeDefined();
        expect(response.majorVersion).toBeDefined();
        expect(response.minorVersion).toBeDefined();
        expect(response.patchVersion).toBeDefined();
        expect(response.platform).toBe("darwin");
        expect(response.path).toBeDefined();
    });

    it("should error on unsupported platform", async () => {
        const client = new SpinShareClient();
        await expect(client.getClientLatestVersion("test")).rejects.toThrowError(NotFoundError);
    });
});