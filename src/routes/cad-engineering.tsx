import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import cad1 from "@/assets/svc-cad-1.jpg";
import cad2 from "@/assets/svc-cad-2.jpg";
import cad3 from "@/assets/svc-cad-3.jpg";
import print2 from "@/assets/svc-print-2.jpg";
import software1 from "@/assets/svc-software-1.jpg";
import software3 from "@/assets/svc-software-3.jpg";

export const Route = createFileRoute("/cad-engineering")({
  head: () => ({
    meta: [
      { title: "CAD & Engineering Software Setup | NexaTech Solutions" },
      {
        name: "description",
        content:
          "Installation, configuration and activation assistance for AutoCAD, Revit, Civil 3D, SolidWorks, ETABS, SAP2000, MATLAB, ANSYS and more.",
      },
      { property: "og:title", content: "CAD & Engineering Software Setup" },
      {
        property: "og:description",
        content:
          "Engineering software installed and configured properly — Autodesk, structural analysis, GIS and simulation tools.",
      },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Our main specialty"
      title="CAD & Engineering software, set up correctly"
      intro="Installation, configuration, activation assistance and basic setup for the design and analysis tools engineers and architects work in every day."
      groups={[
        {
          title: "Autodesk suite",
          description: "Full install, licensing help and workspace configuration.",
          image: cad1,
          items: [
            "AutoCAD",
            "Civil 3D",
            "Revit (Architecture, Structure, MEP)",
            "Autodesk Inventor",
            "Fusion",
            "3ds Max",
            "Navisworks",
            "InfraWorks",
          ],
        },
        {
          title: "Structural & analysis",
          image: cad3,
          items: ["STAAD.Pro", "ETABS", "SAP2000", "Tekla Structures", "ANSYS", "MATLAB"],
        },
        {
          title: "Modelling & GIS",
          image: cad2,
          items: ["SolidWorks", "SketchUp", "ArcGIS", "QGIS"],
        },
        {
          title: "What's included",
          image: software3,
          items: [
            "Software installation",
            "Configuration & workspace setup",
            "Activation assistance",
            "Plotting / printing setup",
            "Troubleshooting failed installs",
          ],
        },
        {
          title: "Student & educator access",
          description: "Assistance obtaining legitimate education access where you qualify.",
          image: software1,
          items: [
            "AutoCAD, Fusion, Inventor, CFD, Tinkercad",
            "Verification guidance",
            "Account setup",
            "Renewal reminders",
          ],
        },
        {
          title: "Basic training",
          image: print2,
          items: [
            "AutoCAD basics",
            "Revit basics",
            "CAD file management",
            "DWG/DXF & PDF conversions",
          ],
        },
      ]}
      note="We provide software installation and licensing assistance using legitimate software and authorized licensing options. Autodesk education licenses are intended for educational purposes and are not permitted for commercial or for-profit work."
    />
  ),
});
