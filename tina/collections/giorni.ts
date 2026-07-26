import type { Collection } from "tinacms";

export const GiorniCollection: Collection = {
  name: "giorni",
  label: "Giorni",
  path: "src/content/giorni",
  format: "md",
  ui: {
    filename: {
      slugify: (values) => {
        const day = values?.day ? String(values.day).padStart(2, "0") : "00";
        const title = (values?.title || "giorno")
          .toLowerCase()
          .replace(/giorno\s*\d+\s*[—-]?\s*/i, "")
          .replace(/[^a-z0-9àèéìòù]+/gi, "-")
          .replace(/(^-|-$)/g, "");
        return `${day}-${title || "giorno"}`;
      },
    },
    router: ({ document }) => `/giorni/${document._sys.filename}`,
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
      name: "day",
      label: "Giorno n.",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Data",
      required: true,
      ui: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      type: "string",
      name: "focus",
      label: "Focus",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "overnight",
      label: "Pernottamento",
    },
    {
      type: "string",
      name: "placeName",
      label: "Luogo (nome)",
      required: true,
    },
    {
      type: "string",
      name: "placeAddress",
      label: "Luogo (indirizzo)",
    },
    {
      type: "number",
      name: "lat",
      label: "Latitudine",
      required: true,
    },
    {
      type: "number",
      name: "lng",
      label: "Longitudine",
      required: true,
    },
    {
      type: "image",
      name: "cover",
      label: "Foto del giorno",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Note del giorno",
      isBody: true,
    },
  ],
};
