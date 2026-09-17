import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-workbench.jpg";
import { ServiceRequest } from "@/components/site/ServiceRequest";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexaTech Solutions | Software Installation & Digital Services" },
      {
        name: "description",
        content:
          "CAD, engineering and productivity software installed, configured and activated in Nairobi. Windows setup, gaming, printing and digital services.",
      },
      { property: "og:title", content: "NexaTech Solutions | Software & Digital Solutions" },
      {
        property: "og:description",
        content:
          "Professional software installation, computer services and digital solutions with legitimate licensing.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    to: "/cad-engineering" as const,
    title: "CAD & Engineering",
    body: "AutoCAD · Civil 3D · Revit · SolidWorks · ETABS · SAP2000 · MATLAB — installed & configured.",
  },
  {
    to: "/software" as const,
    title: "Software Installation",
    body: "Microsoft 365 · Adobe Creative Cloud · programming tools · PDF & utility apps.",
  },
  {
    to: "/computer-services" as const,
    title: "Computer Services",
    body: "Windows setup · drivers · optimization · troubleshooting · backup & data transfer.",
  },
  {
    to: "/gaming" as const,
    title: "Gaming",
    body: "Legit game launchers · Steam / Epic / EA setup · controller config · graphics tuning.",
  },
  {
    to: "/digital-services" as const,
    title: "Digital Services",
    body: "Websites · logo & brand · CVs · documents · presentations · data entry.",
  },
  {
    to: "/cad-services" as const,
    title: "Printing & CAD",
    body: "A1–A3 CAD plotting · scanning · binding · DWG/DXF & PDF conversions.",
  },
];

const packages = [
  {
    tag: "Civil",
    title: "Civil Engineering",
    items: ["AutoCAD setup", "Civil 3D setup", "Revit setup", "Microsoft Office + PDF tools"],
    price: "KSh 1,800",
    featured: false,
  },
  {
    tag: "Most popular",
    title: "Architecture",
    items: [
      "AutoCAD + Revit Architecture",
      "SketchUp + 3ds Max",
      "Adobe Photoshop",
      "PDF tools + utilities",
    ],
    price: "KSh 2,400",
    featured: true,
  },
  {
    tag: "Mechanical",
    title: "Mechanical Engineering",
    items: ["AutoCAD + SolidWorks", "Autodesk Inventor", "MATLAB + utilities", "Basic CAD config"],
    price: "KSh 2,100",
    featured: false,
  },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-electric/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6 inline-flex items-center gap-2 text-electric">
              <span className="size-1.5 rounded-full bg-signal" /> Software · Design · Digital Solutions
            </div>
            <h1 className="text-5xl font-bold leading-[1.02] text-ink sm:text-6xl">
              Professional software,
              <br />
              installed &amp; configured
              <br />
              <span className="text-electric">ready to use.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
              Get your essential engineering, productivity and creative software installed, configured
              and activated — remotely or in person. Legitimate licenses, authorized options.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/software"
                className="inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110"
              >
                View Services <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3 font-semibold text-ink transition hover:bg-navy/5"
              >
                Get a Quote
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <div className="font-display text-2xl font-bold text-ink">40+</div>
                <div className="eyebrow text-navy/50">Software titles</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-ink">24h</div>
                <div className="eyebrow text-navy/50">Avg. turnaround</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-ink">100%</div>
                <div className="eyebrow text-navy/50">Legit licenses</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImage}
              alt="Engineering workbench with a laptop showing a CAD model, calipers and printed blueprints"
              width={1024}
              height={1152}
              className="aspect-[16/18] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-navy/10"
            />
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-mist">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="eyebrow mb-2 text-mist/40">What we do</div>
              <h2 className="text-3xl font-semibold">A full service stack</h2>
            </div>
            <Link
              to="/pricing"
              className="hidden text-sm text-mist/60 transition hover:text-mist sm:block"
            >
              All services →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.title}
                to={s.to}
                className="rounded-2xl border border-mist/10 bg-mist/[0.03] p-6 transition hover:border-electric/60"
              >
                <div className="eyebrow mb-3 text-electric">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-mist/55">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow mb-2 text-navy/50">Built for students</div>
          <h2 className="mb-8 text-3xl font-semibold text-ink">Engineering Student Packages</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.title}
                className={
                  p.featured
                    ? "flex flex-col rounded-2xl bg-ink p-6 text-mist ring-2 ring-signal/50"
                    : "flex flex-col rounded-2xl border border-navy/10 bg-card p-6"
                }
              >
                <div className={`eyebrow mb-1 ${p.featured ? "text-signal" : "text-navy/50"}`}>
                  {p.tag}
                </div>
                <h3 className={`mb-3 text-xl font-semibold ${p.featured ? "" : "text-ink"}`}>
                  {p.title}
                </h3>
                <ul
                  className={`flex-1 space-y-2 text-sm ${p.featured ? "text-mist/70" : "text-navy/70"}`}
                >
                  {p.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <span className={`font-display text-2xl font-bold ${p.featured ? "" : "text-ink"}`}>
                    {p.price}
                  </span>
                  <Link
                    to="/contact"
                    className={`text-sm font-semibold hover:underline ${
                      p.featured ? "text-signal" : "text-electric"
                    }`}
                  >
                    Choose →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceRequest />
    </>
  );
}
