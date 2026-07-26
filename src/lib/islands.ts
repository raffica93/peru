/**
 * Registry isole Tina (visual editing).
 * Base layout usa solo `wrapper`; l’admin form funziona anche senza isole complete.
 */
import type { IslandRegistry } from "@tinacms/astro/experimental";
import type { QueryResult } from "@tinacms/astro/data";
import type { ConfigQuery, TripQuery } from "../../tina/__generated__/types";
import type { CmsConfig, CmsTrip } from "./data";
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";
import { getConfig, getTrip } from "./data";

export const islands: IslandRegistry = {
  global: {
    fetch: () => getConfig(),
    component: Header,
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      config: (data as QueryResult<ConfigQuery>).data?.config as
        | CmsConfig
        | undefined,
    }),
  },
  "global-footer": {
    fetch: () => getConfig(),
    component: Footer,
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      config: (data as QueryResult<ConfigQuery>).data?.config as
        | CmsConfig
        | undefined,
    }),
  },
  trip: {
    fetch: () => getTrip(),
    component: Header, // placeholder; home non usa island trip in v1
    wrapper: { tag: "div" },
    propsFromData: (data) => ({
      trip: (data as QueryResult<TripQuery>).data?.trip as CmsTrip | undefined,
    }),
  },
};
