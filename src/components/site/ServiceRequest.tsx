import { useState } from "react";
import {
  DEVICES,
  INSTALL_METHODS,
  OPERATING_SYSTEMS,
  SERVICE_OPTIONS,
  whatsappLink,
} from "@/lib/site";

const selectClass =
  "w-full mt-1 rounded-lg border border-navy/20 bg-card px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-electric";
const labelClass = "block text-sm font-medium text-navy/70";

export function ServiceRequest() {
  const [service, setService] = useState(SERVICE_OPTIONS[0]!);
  const [method, setMethod] = useState(INSTALL_METHODS[0]!);
  const [device, setDevice] = useState(DEVICES[0]!);
  const [os, setOs] = useState(OPERATING_SYSTEMS[0]!);
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const message = `Hello NexaTech Solutions, I would like ${service} (${method} installation). My ${device.toLowerCase()} is running ${os}.${
    date ? ` Preferred date: ${date}.` : ""
  }${phone ? ` My number: ${phone}.` : ""}`;

  return (
    <section id="request" className="bg-navy py-16 text-mist">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-2 text-mist/40">Order in minutes</div>
          <h2 className="mb-4 text-3xl font-semibold">Request a service</h2>
          <p className="mb-6 leading-relaxed text-mist/60">
            Pick a software, choose your installation method and we'll do the rest — remotely or in
            person.
          </p>
          <div className="rounded-xl border border-mist/10 bg-mist/[0.03] p-4 font-mono text-xs leading-relaxed text-mist/70">
            <span className="text-signal">›</span> Remote Installation — we connect to your machine
            <br />
            <span className="text-signal">›</span> Physical Installation — bring your device in
            <br />
            <span className="text-signal">›</span> License Assistance — legit activation help
          </div>
          <a
            href={whatsappLink("Hello NexaTech Solutions, I would like to ask about your services.")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-signal px-5 py-3 font-semibold text-ink transition hover:brightness-105"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
        <form
          className="grid gap-5 rounded-2xl bg-mist p-6 text-ink sm:grid-cols-2 sm:p-8 lg:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(whatsappLink(message), "_blank", "noreferrer");
          }}
        >
          <label className={`${labelClass} sm:col-span-2`}>
            <span className="mb-1.5 block">Choose a service</span>
            <select
              className={selectClass}
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            <span className="mb-1.5 block">Installation method</span>
            <select className={selectClass} value={method} onChange={(e) => setMethod(e.target.value)}>
              {INSTALL_METHODS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            <span className="mb-1.5 block">Device</span>
            <select className={selectClass} value={device} onChange={(e) => setDevice(e.target.value)}>
              {DEVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            <span className="mb-1.5 block">Operating system</span>
            <select className={selectClass} value={os} onChange={(e) => setOs(e.target.value)}>
              {OPERATING_SYSTEMS.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className={labelClass}>
            <span className="mb-1.5 block">Preferred date</span>
            <input
              type="date"
              className={selectClass}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className={`${labelClass} sm:col-span-2`}>
            <span className="mb-1.5 block">Phone / WhatsApp</span>
            <input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              className={selectClass}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-electric px-6 py-3 text-center font-semibold text-primary-foreground transition hover:brightness-110 sm:col-span-2"
          >
            Request Service
          </button>
        </form>
      </div>
    </section>
  );
}
