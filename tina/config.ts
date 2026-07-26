import { defineConfig } from "tinacms";
import { GlobalConfigCollection } from "./collections/global-config";
import { TripCollection } from "./collections/trip";
import { TappeCollection } from "./collections/tappe";
import { GiorniCollection } from "./collections/giorni";
import { PagineCollection } from "./collections/pagine";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.WORKERS_CI_BRANCH ||
  process.env.CF_PAGES_BRANCH ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: process.env.TINA_PUBLIC_BASE_PATH || "",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      TripCollection,
      TappeCollection,
      GiorniCollection,
      PagineCollection,
      GlobalConfigCollection,
    ],
  },
});
