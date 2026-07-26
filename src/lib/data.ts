/**
 * Loader contenuti Tina per il viaggio Perù.
 * `requestWithMetadata` abilita l’overlay editor quando si è in admin.
 */
import type { TinaRichTextContent } from "@tinacms/astro";
import { requestWithMetadata } from "@tinacms/astro/data";
import client from "../../tina/__generated__/client";

export const getConfig = () =>
  requestWithMetadata(client.queries.config({ relativePath: "config.json" }));

export const getTrip = () =>
  requestWithMetadata(client.queries.trip({ relativePath: "index.md" }), {
    priority: "primary",
  });

export const getTappa = (filename: string) =>
  requestWithMetadata(
    client.queries.tappe({ relativePath: `${filename}.md` }),
    { priority: "primary" },
  );

export const getGiorno = (filename: string) =>
  requestWithMetadata(
    client.queries.giorni({ relativePath: `${filename}.md` }),
    { priority: "primary" },
  );

export const getPagina = (filename: string) =>
  requestWithMetadata(
    client.queries.pagine({ relativePath: `${filename}.md` }),
    { priority: "primary" },
  );

export async function listTappe() {
  const result = await client.queries.tappeConnection();
  return (result.data.tappeConnection.edges ?? [])
    .flatMap((edge) => (edge?.node ? [edge.node] : []))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function listGiorni() {
  const result = await client.queries.giorniConnection();
  return (result.data.giorniConnection.edges ?? [])
    .flatMap((edge) => (edge?.node ? [edge.node] : []))
    .sort((a, b) => (a.day ?? 0) - (b.day ?? 0));
}

export async function listPagine() {
  const result = await client.queries.pagineConnection();
  return (result.data.pagineConnection.edges ?? [])
    .flatMap((edge) => (edge?.node ? [edge.node] : []))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export type CmsConfig = Awaited<ReturnType<typeof getConfig>>["data"]["config"];
export type CmsTrip = Awaited<ReturnType<typeof getTrip>>["data"]["trip"];
export type CmsTappa = NonNullable<
  Awaited<ReturnType<typeof listTappe>>[number]
>;
export type CmsGiorno = NonNullable<
  Awaited<ReturnType<typeof listGiorni>>[number]
>;
export type CmsPagina = NonNullable<
  Awaited<ReturnType<typeof listPagine>>[number]
>;

export type CmsConfigNav = NonNullable<NonNullable<CmsConfig["nav"]>[number]>;
export type CmsConfigContactLink = NonNullable<
  NonNullable<CmsConfig["contactLinks"]>[number]
>;
export type CmsConfigSeo = NonNullable<CmsConfig["seo"]>;

export type RichText = TinaRichTextContent;
