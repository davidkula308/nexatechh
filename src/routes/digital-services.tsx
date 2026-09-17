import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import digital1 from "@/assets/svc-digital-1.jpg";
import digital2 from "@/assets/svc-digital-2.jpg";
import digital3 from "@/assets/svc-digital-3.jpg";
import print1 from "@/assets/svc-print-1.jpg";
import print2 from "@/assets/svc-print-2.jpg";
import software2 from "@/assets/svc-software-2.jpg";

export const Route = createFileRoute("/digital-services")({
  head: () => ({
    meta: [
      { title: "Digital Services — Websites, Graphics & Documents | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Website development and maintenance, logo and print design, CVs and portfolios, document formatting, presentations and spreadsheets.",
      },
      { property: "og:title", content: "Digital Services — Websites, Graphics & Documents" },
      {
        property: "og:description",
        content: "Websites, branding, documents and business solutions for small teams and students.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Digital services"
      title="Websites, branding and documents that look the part"
      intro="Beyond installation — the digital work that makes a business or a student portfolio look professional."
      groups={[
        {
          title: "Web & online",
          image: digital1,
          items: [
            "Website development",
            "Website maintenance",
            "Domain registration assistance",
            "Business email setup",
            "Online application assistance",
          ],
        },
        {
          title: "Design & branding",
          image: digital2,
          items: ["Logo design", "Posters & flyers", "Business cards", "Portfolio design"],
        },
        {
          title: "Documents",
          image: digital3,
          items: [
            "CV design",
            "PDF editing",
            "Document formatting",
            "PowerPoint presentations",
            "Excel spreadsheets",
            "Data entry",
          ],
        },
        {
          title: "CAD services",
          image: print2,
          items: [
            "2D drafting",
            "Floor plans",
            "Structural, electrical & plumbing drawings",
            "Site plans",
            "PDF → CAD and CAD → PDF conversion",
            "Drawing corrections & plotting",
          ],
        },
        {
          title: "Printing & plotting",
          image: print1,
          items: [
            "A1 / A2 / A3 printing",
            "CAD plotting",
            "Scanning",
            "Binding",
            "Document printing",
          ],
        },
        {
          title: "Training",
          image: software2,
          items: ["AutoCAD basics", "Revit basics", "Excel", "Photoshop", "Software tutorials"],
        },
      ]}
    />
  ),
});
