import { createClient } from "microcms-js-sdk";

export const client = createClient({
	serviceDomain: "myapp-sunabaco1126",
	apiKey: process.env.API_KEY,
});
