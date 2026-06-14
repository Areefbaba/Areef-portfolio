import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Areef Baba Portfolio",
  description: "Portfolio of Areef Baba - Data Analyst, ML Engineer and AI/ML Student",
  
  keywords: [
    "Areef Baba",
    "Data Analyst",
    "Business Analyst",
    "Analytics Engineer",
    "Machine Learning Engineer",
    "AI ML Student",
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "Excel",
    "Hyderabad"
  ],
  authors: [{ name: "Areef Baba" }],
  creator: "Areef Baba",
  openGraph: {
    title: "Areef Baba | Data Analyst and ML Engineer",
    description:
      "Recruiter-focused portfolio with analytics projects, fraud analytics experience, BI dashboards, ML models, and ATS-friendly resume content.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
