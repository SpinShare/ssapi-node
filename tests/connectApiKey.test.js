import { describe, it, expect } from "vitest";
import SpinShareClient from "../src/index.js";

describe("connectApiKey", () => {
    it("should be empty by default", () => {
        const client = new SpinShareClient();
        expect(client.connectApiKey).toBe("");
    });

    it("should be changeable", () => {
        const client = new SpinShareClient();
        client.setConnectApiKey("TEST")
        expect(client.connectApiKey).toBe("TEST");
    });
});