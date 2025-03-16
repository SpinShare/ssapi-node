import { describe, it, expect } from "vitest";
import {SpinShareClient} from "../src/index.js";

describe("apiBase", () => {
    it("should be defined by default", () => {
        const client = new SpinShareClient();
        expect(client.apiBase).toBe("https://spinsha.re/api");
    });

    it("should be changeable", () => {
        const client = new SpinShareClient();
        client.setApiBase("https://example.org");
        expect(client.apiBase).toBe("https://example.org");
    });
});