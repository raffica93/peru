import type { Collection } from "tinacms";

const checklistItem = {
  type: "object" as const,
  fields: [
    { type: "string" as const, name: "label", label: "Voce", required: true },
    { type: "boolean" as const, name: "done", label: "Fatto", required: true },
  ],
};

export const TripCollection: Collection = {
  name: "trip",
  label: "Viaggio",
  path: "src/content/trip",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => "/",
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
      type: "string",
      name: "period",
      label: "Periodo",
      required: true,
    },
    {
      type: "string",
      name: "periodPeru",
      label: "Periodo in Perù",
    },
    {
      type: "number",
      name: "participants",
      label: "Partecipanti",
      required: true,
    },
    {
      type: "string",
      name: "routeSummary",
      label: "Sintesi itinerario",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "nightsSummary",
      label: "Sintesi pernottamenti",
    },
    {
      type: "string",
      name: "bookingsSummary",
      label: "Prenotazioni confermate (testo pubblico)",
      list: true,
    },
    {
      type: "object",
      name: "hotels",
      label: "Alloggi candidati",
      list: true,
      fields: [
        { type: "string", name: "location", label: "Località", required: true },
        { type: "string", name: "dates", label: "Date", required: true },
        { type: "string", name: "name", label: "Struttura", required: true },
      ],
    },
    {
      type: "object",
      name: "checklistAlloggi",
      label: "Checklist — Alloggi",
      list: true,
      fields: checklistItem.fields,
    },
    {
      type: "object",
      name: "checklistTrasporti",
      label: "Checklist — Trasporti",
      list: true,
      fields: checklistItem.fields,
    },
    {
      type: "object",
      name: "checklistAttivita",
      label: "Checklist — Attività",
      list: true,
      fields: checklistItem.fields,
    },
    {
      type: "object",
      name: "checklistDocumenti",
      label: "Checklist — Documenti",
      list: true,
      fields: checklistItem.fields,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Note",
      isBody: true,
    },
  ],
};
