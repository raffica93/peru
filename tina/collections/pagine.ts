import type { Collection } from "tinacms";

export const PagineCollection: Collection = {
  name: "pagine",
  label: "Pagine operative",
  path: "src/content/pagine",
  format: "md",
  ui: {
    router: ({ document }) => `/pagine/${document._sys.filename}`,
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titolo",
      isTitle: true,
      required: true,
    },
    {
      type: "number",
      name: "order",
      label: "Ordine",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Descrizione breve",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Contenuto",
      isBody: true,
    },
  ],
};
