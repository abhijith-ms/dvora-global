import type { JourneyId } from "@/lib/journey-state";
// Website copy supplied in DVORA GLOBAL - Website.docx.

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export type ProcessStep = {
  id: JourneyId;
  step: string;
  title: string;
  body: string;
};

export type StatItem = {
  figure: string;
  label: string;
};

export type UniversityPartner = {
  name: string;
  url: string;
};

export type Counsellor = {
  name: string;
  role: string;
  credentials: string;
  yearsInField: string;
  specialisms: { label: string; dot: "steel" | "verify" }[];
  linkedinUrl: string;
};

export type PlacementOutcome = {
  studentFirstName: string;
  year: string;
  university: string;
  course: string;
  intake: string;
  verified: boolean;
};

export type FeeRow = {
  item: string;
  amount: string;
  note?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  university: string;
  year: string;
};

export const site = {
  "tagline": "Your Future. Beyond Borders.",
  "nav": {
    "links": [
      {
        "label": "About",
        "href": "#about"
      },
      {
        "label": "Destinations",
        "href": "#destinations"
      },
      {
        "label": "Services",
        "href": "#services"
      },
      {
        "label": "Your journey",
        "href": "#how-it-works"
      }
    ],
    "ctaLabel": "Contact us"
  },
  "hero": {
    "headline": "Your Future. Beyond Borders.",
    "subhead": "At DVORA Global, we help students turn international education ambitions into clear, achievable pathways. From choosing the right destination and university to completing applications and preparing for life abroad, we provide personalised guidance throughout the journey.",
    "focus": "With a focus on Europe and the UK, we connect students with opportunities across a wide range of universities, institutions, courses and study levels.",
    "approach": "Our approach is simple: understand the student first, then build the right pathway around their goals, academic background and future ambitions.",
    "primaryCta": "Let’s begin your journey",
    "secondaryCta": "Explore our services"
  },
  "about": {
    "heading": "About DVORA",
    "paragraphs": [
      "Choosing to study abroad is a major decision. With thousands of institutions, courses, destinations and requirements to consider, finding the right pathway can feel overwhelming.",
      "DVORA Global is here to make that journey clearer.",
      "We provide personalised study-abroad guidance for students looking to pursue higher education in Europe and the United Kingdom. Rather than taking a one-size-fits-all approach, we work with each student to understand their aspirations and help them identify suitable study options.",
      "From the first counselling session to the moment they prepare to travel, our goal is to make every stage of the process more structured, transparent and straightforward."
    ]
  },
  "why": {
    "heading": "Why DVORA?",
    "items": [
      {
        "title": "Personalised Guidance",
        "body": "Every student's academic background, goals and circumstances are different. Our guidance is tailored accordingly."
      },
      {
        "title": "Global Opportunities",
        "body": "Explore study opportunities across Europe and the UK, with access to a broad range of courses and institutions."
      },
      {
        "title": "End-to-End Support",
        "body": "We support students throughout the journey — from course selection and applications to visa guidance and pre-departure preparation."
      },
      {
        "title": "Student-Centred Approach",
        "body": "We focus on helping students make informed decisions rather than simply processing applications."
      },
      {
        "title": "Clarity & Transparency",
        "body": "We believe students and families deserve clear information at every important stage of their journey."
      }
    ]
  },
  "destinations": {
    "heading": "Study Destinations",
    "tagline": "Explore. Choose. Go Beyond.",
    "intro": "We support students interested in studying across Europe and the United Kingdom, opening pathways to a diverse range of academic and professional opportunities.",
    "note": "Our destination portfolio can include opportunities across European countries and the UK, depending on the student's preferred course, academic profile and eligibility.",
    "regions": [
      "Europe",
      "United Kingdom"
    ],
    "levelsHeading": "Study Levels",
    "levelsIntro": "We support applications across a broad range of study levels, including:",
    "levels": [
      "Bachelor's Degrees",
      "Master's Degrees",
      "Undergraduate Programmes",
      "Postgraduate Programmes",
      "Diplomas",
      "Higher Education Programmes",
      "Professional & Career-Focused Courses",
      "Other eligible academic and specialised programmes"
    ],
    "courseHeading": "Find the Right Course",
    "courseIntro": "Whether you already know what you want to study or are still exploring your options, our counsellors can help you identify suitable programmes based on your:",
    "criteria": [
      "Academic background",
      "Career goals",
      "Budget",
      "Preferred destination",
      "Course interests",
      "Future plans"
    ]
  },
  "services": {
    "heading": "Our Services",
    "tagline": "From Your First Question to Your First Day Abroad.",
    "intro": "DVORA Global provides comprehensive support throughout the international education journey.",
    "items": [
      {
        "number": "01",
        "title": "Personalised Counselling",
        "body": "Understand your options through one-to-one guidance based on your academic profile, interests and career aspirations."
      },
      {
        "number": "02",
        "title": "University & Course Shortlisting",
        "body": "We help you explore suitable universities, institutions and programmes based on your profile, destination preferences and goals."
      },
      {
        "number": "03",
        "title": "Application Assistance",
        "body": "From preparing documentation to completing university applications, we help ensure your application journey is organised and structured."
      },
      {
        "number": "04",
        "title": "SOP & Application Guidance",
        "body": "Receive guidance on preparing your Statement of Purpose and other supporting documents so your application clearly communicates your academic journey and ambitions."
      },
      {
        "number": "05",
        "title": "Scholarship Guidance",
        "body": "Explore available scholarship and funding opportunities and understand the relevant eligibility and application requirements."
      },
      {
        "number": "06",
        "title": "Education Loan Guidance",
        "body": "We help students explore available education-financing options and understand the documentation and process involved."
      },
      {
        "number": "07",
        "title": "Visa Guidance",
        "body": "Receive guidance throughout the student visa process, including documentation, application preparation and important requirements."
      },
      {
        "number": "08",
        "title": "Accommodation Support",
        "body": "Get guidance on finding suitable accommodation and preparing for your move to your study destination."
      },
      {
        "number": "09",
        "title": "Pre-Departure Support",
        "body": "Before you leave, we help you prepare for the practical aspects of your international journey from travel preparation and essential documentation to settling into your new destination."
      }
    ]
  },
  "journeyHeading": "Your Journey With DVORA",
  "process": [
    {
      "id": "discover" as JourneyId,
      "step": "01",
      "title": "Discover",
      "body": "Tell us about your goals, academic background and ambitions."
    },
    {
      "id": "explore" as JourneyId,
      "step": "02",
      "title": "Explore",
      "body": "Explore destinations, courses and institutions that align with your profile."
    },
    {
      "id": "apply" as JourneyId,
      "step": "03",
      "title": "Apply",
      "body": "Prepare and submit your applications with structured guidance."
    },
    {
      "id": "prepare" as JourneyId,
      "step": "04",
      "title": "Prepare",
      "body": "Work through documentation, visa requirements and practical preparations."
    },
    {
      "id": "depart" as JourneyId,
      "step": "05",
      "title": "Depart",
      "body": "Travel with greater clarity and confidence as you begin your international education journey."
    }
  ],
  "contact": {
    "heading": "Contact DVORA Global",
    "tagline": "Let's Begin Your Journey.",
    "intro": "Have questions about studying in Europe or the UK? Speak with our team and explore your options.",
    "registeredName": "JAMES JACOB UNIP LDA",
    "vat": "518107841",
    "address": [
      "Avenida da Liberdade, 615, 1st Floor",
      "4710-251 Braga, Portugal"
    ],
    "phone": "+351 912 628 050",
    "phoneHref": "tel:+351912628050",
    "email": "info@dvoraglobal.com",
    "hours": "Monday – Friday | 9:00 AM – 5:00 PM"
  },
  "consultationForm": {
    "heading": "Enquire about studying abroad",
    "submitLabel": "Prepare email enquiry",
    "successMessage": "Your email draft is ready. Send it from your email app to contact our team.",
    "email": "info@dvoraglobal.com",
    "fields": {
      "name": "Full name",
      "email": "Email",
      "phone": "Phone",
      "destination": "Preferred destination",
      "message": "Message"
    }
  }
};
