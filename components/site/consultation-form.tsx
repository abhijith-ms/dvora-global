"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { site } from "@/content/site";

export interface ConsultationFormProps {
  content: typeof site.consultationForm;
}

export function ConsultationForm({ content }: ConsultationFormProps) {
  const [submitted, setSubmitted] = useState(false);


  return (
    <form
      className="rounded-lg bg-white p-32 shadow-[var(--shadow-md)]"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const body = [
          `Name: ${data.get("name")}`,
          `Email: ${data.get("email")}`,
          `Phone: ${data.get("phone")}`,
          `Preferred destination: ${data.get("destination")}`,
          "",
          String(data.get("message") || ""),
        ].join("\n");
        window.location.href = `mailto:${content.email}?subject=${encodeURIComponent("Study abroad enquiry")}&body=${encodeURIComponent(body)}`;
        setSubmitted(true);
      }}
    >
      <h3 className="text-[20px] font-medium text-ink-navy">{content.heading}</h3>

      <p className="mt-3 text-[14px] text-steel">This form opens an enquiry in your email app. Please send the email to reach our team.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-name">{content.fields.name}</Label>
          <Input id="cf-name" name="name" autoComplete="name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-email">{content.fields.email}</Label>
          <Input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-phone">{content.fields.phone}</Label>
          <Input id="cf-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="cf-destination">{content.fields.destination}</Label>
          <Input id="cf-destination" name="destination" required />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor="cf-message">{content.fields.message}</Label>
          <Textarea id="cf-message" name="message" rows={4} />
        </div>
      </div>

      <Button type="submit" variant="primary" className="mt-6">
        {content.submitLabel}
      </Button>
      {submitted && <p role="status" className="mt-4 text-[14px] text-steel">{content.successMessage}</p>}
      <p className="mt-4 text-[14px] text-steel">Prefer to contact us directly? <a className="break-words underline underline-offset-4" href={`mailto:${content.email}`}>{content.email}</a></p>
    </form>
  );
}
