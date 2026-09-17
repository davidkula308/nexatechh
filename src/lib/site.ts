export const WHATSAPP_NUMBER = "254722493288";
export const WHATSAPP_DISPLAY = "+254 722 493288";
export const EMAIL = "hello@nexatechsolutions.co.ke";
export const LOCATION = "Nairobi, Kenya";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Pre-typed enquiry for a named service. */
export function enquiryLink(service: string) {
  return whatsappLink(
    `Hello NexaTech Solutions, I am requesting more information on this service: ${service}.`,
  );
}

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/software", label: "Software" },
  { to: "/cad-engineering", label: "CAD & Engineering" },
  { to: "/gaming", label: "Gaming" },
  { to: "/computer-services", label: "Computer Services" },
  { to: "/digital-services", label: "Digital" },
  { to: "/pricing", label: "Pricing" },
] as const;

/** Grouped service index used by the slide-out menu. */
export const SERVICE_MENU = [
  {
    heading: "CAD & Engineering",
    to: "/cad-engineering" as const,
    items: [
      "AutoCAD installation",
      "Civil 3D installation",
      "Revit (Architecture / Structure / MEP)",
      "Autodesk Inventor & Fusion",
      "SolidWorks",
      "ETABS, SAP2000 & STAAD.Pro",
      "MATLAB & ANSYS",
      "ArcGIS / QGIS & SketchUp",
      "Student & educator access help",
    ],
  },
  {
    heading: "Software Installation",
    to: "/software" as const,
    items: [
      "Microsoft 365 & Office",
      "Microsoft Project & Visio",
      "Adobe Creative Cloud apps",
      "Programming tools & SDKs",
      "PDF tools & utilities",
      "Antivirus & security software",
      "Cloud storage & backup setup",
    ],
  },
  {
    heading: "Computer Services",
    to: "/computer-services" as const,
    items: [
      "Windows installation & upgrades",
      "Drivers & formatting",
      "Complete laptop setup",
      "Virus & malware removal",
      "Performance optimization",
      "Backup & data transfer",
      "SSD / RAM upgrades",
      "Printer & Wi-Fi setup",
      "Remote IT support",
    ],
  },
  {
    heading: "Gaming",
    to: "/gaming" as const,
    items: [
      "PC game installation",
      "Steam / Epic / EA / Ubisoft setup",
      "Controller configuration",
      "Graphics & performance tuning",
      "Gaming PC setup package",
      "Game troubleshooting",
    ],
  },
  {
    heading: "Digital Services",
    to: "/digital-services" as const,
    items: [
      "Website development & maintenance",
      "Domain & business email setup",
      "Logo, flyers & business cards",
      "CV & portfolio design",
      "Documents, slides & spreadsheets",
      "Software training",
    ],
  },
  {
    heading: "Printing & CAD Work",
    to: "/cad-services" as const,
    items: [
      "2D drafting & floor plans",
      "Structural, electrical & plumbing drawings",
      "PDF ↔ CAD conversions",
      "A1 / A2 / A3 plotting",
      "Scanning & binding",
    ],
  },
] as const;

export const SERVICE_OPTIONS = [
  "AutoCAD",
  "Revit",
  "Civil 3D",
  "SolidWorks",
  "Autodesk Inventor",
  "ETABS",
  "SAP2000",
  "MATLAB",
  "SketchUp",
  "Adobe Photoshop",
  "Microsoft Office",
  "Complete Laptop Setup",
  "Windows Installation",
  "Gaming PC Setup",
  "PC Game Installation",
  "CAD Plotting / Printing",
  "Website Development",
];

export const INSTALL_METHODS = ["Remote", "Physical", "License Assistance"];
export const DEVICES = ["Laptop", "Desktop"];
export const OPERATING_SYSTEMS = ["Windows 11", "Windows 10", "macOS"];
