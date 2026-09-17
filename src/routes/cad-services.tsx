import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import print1 from "@/assets/svc-print-1.jpg";
import print2 from "@/assets/svc-print-2.jpg";
import print3 from "@/assets/svc-print-3.jpg";
import cad1 from "@/assets/svc-cad-1.jpg";
import cad2 from "@/assets/svc-cad-2.jpg";

export const Route = createFileRoute("/cad-services")({
  head: () => ({
    meta: [
      { title: "CAD Drafting, Plotting & Printing | NexaTech Solutions" },
      {
        name: "description",
        content:
          "2D drafting, floor plans, structural and MEP drawings, DWG/DXF and PDF conversions, A1–A3 CAD plotting, scanning and binding.",
      },
      { property: "og:title", content: "CAD Drafting, Plotting & Printing" },
      {
        property: "og:description",
        content: "Drafting, conversions and large-format plotting for students and practices.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Printing & CAD"
      title="Drafting, conversions and large-format plotting"
      intro="Bring us a sketch, a PDF or a DWG — leave with clean drawings, correct sheet sizes and printed copies."
      groups={[
        {
          title: "Drafting",
          image: print2,
          items: [
            "2D drafting",
            "Floor plans",
            "Structural drawings",
            "Site plans",
            "Electrical drawings",
            "Plumbing drawings",
          ],
        },
        {
          title: "Conversions",
          image: cad1,
          items: [
            "PDF → CAD",
            "CAD → PDF",
            "DWG / DXF conversion",
            "Drawing corrections",
            "Sheet & title block setup",
          ],
        },
        {
          title: "Printing",
          image: print1,
          items: [
            "A1 printing",
            "A2 printing",
            "A3 printing",
            "CAD plotting",
            "Scanning",
            "Binding",
            "Document printing",
          ],
        },
      ]}
      samplesTitle="Sample output"
      samplesIntro="Typical drawings and prints that leave our workshop."
      samples={[
        {
          name: "Floor plans & elevations",
          detail: "Dimensioned plans, elevations and sections, ready to print.",
          image: print2,
        },
        {
          name: "A1 plotted drawings",
          detail: "Large-format plots on bond or tracing paper.",
          image: print1,
        },
        {
          name: "Scanning & binding",
          detail: "Reports scanned, printed and spiral bound.",
          image: print3,
        },
        {
          name: "CAD file clean-up",
          detail: "Layers, title blocks and DWG conversions sorted out.",
          image: cad1,
        },
        {
          name: "3D model views",
          detail: "Model views and renders exported for submissions.",
          image: cad2,
        },
      ]}
    />
  ),
});
