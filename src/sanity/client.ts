import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5yvl50i0", // Find this in sanity.config.ts or sanity.io dashboard
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for fresh data, true for faster cached data
});