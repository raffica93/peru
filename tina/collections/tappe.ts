import type { Collection } from "tinacms";

export const TappeCollection: Collection = {
  name: "tappe",
  label: "Tappe",
  path: "src/content/tappe",
  format: "md",
  ui: {
    filename: {
      slugify: (values) => {
        const order = values?.order ? String(values.order).padStart(2, "0") : "00";
        const title = (values?.title || "tappa")
          .toLowerCase()
          .replace(/[^a-z0-9àèéìòù]+/gi, "-")
          .replace(/(^-|-$)/g, "");
        return `${order}-${title}`;
      },
    },
    router: ({ document }) => `/tappe/${document._sys.filename}`,
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
      name: "period",
      label: "Periodo",
    },
    {
      type: "string",
      name: "route",
      label: "Percorso",
    },
    {
      type: "string",
      name: "candidateHotel",
      label: "Alloggio candidato",
    },
    {
      type: "image",
      name: "cover",
      label: "Foto di copertina",
    },
    {
      type: "number",
      name: "lat",
      label: "Latitudine",
    },
    {
      type: "number",
      name: "lng",
      label: "Longitudine",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Programma e note",
      isBody: true,
    },
  ],
};
