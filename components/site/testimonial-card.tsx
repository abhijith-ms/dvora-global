import type { Testimonial } from "@/content/site";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  if (!testimonial.quote || !testimonial.name || !testimonial.university || !testimonial.year) {
    return null;
  }

  return (
    <div className="rounded-lg bg-clay-wash p-32">
      <p className="text-[18px] leading-[1.6] text-slate">“{testimonial.quote}”</p>
      <p className="mt-16 text-[14px] text-steel">
        {testimonial.name} · {testimonial.university} · {testimonial.year}
      </p>
    </div>
  );
}
