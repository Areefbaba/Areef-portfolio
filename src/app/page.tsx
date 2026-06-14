"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const personal = {
  name: "Areef Baba",
  role: "Data Analyst | ML Engineer | AI/ML Student",
  email: "areefbaba17@gmail.com",
  phone: "+91 9398251405",
  location: "Hyderabad, India",
  linkedIn: "https://linkedin.com/in/shaikareefbaba",
  github: "https://github.com/Areefbaba"
};

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Education",
  "GitHub",
  "Contact"
];

const targetRoles = [
  "Data Analyst",
  "Business Analyst",
  "AI/ML Student",
  "ML Engineer"
];

const heroStats = [
  { label: "Records cleaned", value: 15, suffix: "K+" },
  { label: "Fraud indicators", value: 15, suffix: "+" },
  { label: "Transactions modeled", value: 284, suffix: "K+" },
  { label: "Best model R2", value: 0.88, decimals: 2 }
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "Java", "Pandas", "NumPy", "Jupyter"]
  },
  {
    title: "BI and Reporting",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Excel", "KPI Reporting", "BI", "Data Visualization"]
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    skills: ["Scikit-Learn", "XGBoost", "Statistics", "EDA", "Feature Analysis"]
  },
  {
    title: "Data and Tools",
    icon: Database,
    skills: ["MySQL", "Git", "GitHub", "Docker", "Flask", "APIs"]
  }
];

const projects = [
  {
  title: "Amazon Kindle Review Sentiment Analysis",
  tech: [
    "Python",
    "NLP",
    "Scikit-Learn",
    "TF-IDF",
    "Logistic Regression",
    "NLTK",
    "Pandas"
  ],
  summary:
    "Built an end-to-end sentiment analysis pipeline on 12,000+ Amazon Kindle reviews to classify customer sentiment and uncover preference patterns.",

  points: [
    "Processed and cleaned 12,000+ Amazon Kindle reviews using NLP techniques.",
    "Applied lemmatization, stopword removal and TF-IDF vectorization.",
    "Benchmarked Logistic Regression, Naive Bayes and SVM models.",
    "Achieved 75.54% accuracy with Logistic Regression.",
    "Generated actionable customer sentiment insights from unstructured text."
  ],

  metric: "75.54%",
  metricLabel: "Best Accuracy",

  icon: BrainCircuit
},
  {
    title: "Sales Data Analysis Dashboard",
    tech: ["Python", "Pandas","NumPy","Seaborn", "MySQL", "Tableau"],
    summary:
      "Interactive BI dashboard for revenue, segment, and performance analysis across 9K+ records.",
    points: [
      "Analyzed 9K+ records for segment and revenue behavior",
      "Built 25+ SQL queries for KPI and cohort analysis",
      "Found top 3 segments generated 60%+ revenue"
    ],
    metric: "60%+",
    metricLabel: "Revenue from top segments",
    icon: TrendingUp
  },
  {
    title: "Insurance Premium Predictor",
    tech: [
  "Python",
  "Scikit-Learn",
  "XGBoost",
  "Random Forest",
  "Pandas",
  "Flask",
  "Cross-Validation"
],
    summary:
      "End-to-end premium estimation workflow with EDA, model comparison, and prediction API deployment.",
    points: [
      "Performed EDA and feature analysis for risk variables",
      "Compared 5+ regression models before selection",
      "Deployed best model as a Flask prediction API"
    ],
    metric: "0.88",
    metricLabel: "Best model R2",
    icon: BrainCircuit
  },
  {
    title: "Credit Card Fraud Analytics",
    tech: [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-Learn",
],
    summary:
      "Imbalanced fraud detection analysis using transaction patterns, recall-first evaluation, and PR-AUC.",
    points: [
      "Modeled 284K+ transactions with a 0.17% fraud rate",
      "Reached 94% accuracy and 91% recall",
      "Reported PR-AUC of 0.87 for fraud class performance"
    ],
    metric: "91%",
    metricLabel: "Fraud recall",
    icon: ShieldCheck
  }
];


const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } }
};

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
};

function Counter({ value, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      })}
      {suffix}
    </span>
  );
}

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const delay = isDeleting ? 42 : 82;
    const hold = !isDeleting && charIndex === word.length ? 1150 : delay;

    const timer = window.setTimeout(() => {
      if (!isDeleting && charIndex < word.length) {
        setCharIndex((current) => current + 1);
        return;
      }

      if (!isDeleting && charIndex === word.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && charIndex > 0) {
        setCharIndex((current) => current - 1);
        return;
      }

      setIsDeleting(false);
      setWordIndex((current) => (current + 1) % words.length);
    }, hold);

    return () => window.clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return words[wordIndex].slice(0, charIndex);
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="grid size-11 place-items-center rounded-lg border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
      <Icon className="size-5" />
    </div>
  );
}
function SectionShell({
  id,
  kicker,
  title,
  children
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="mb-6">
        <h2 className="section-heading">{title}</h2>
      </div>

      {children}
    </motion.section>
  );
}

function Navigation() {
  return (
    <div className="fixed inset-x-0 top-3 z-50 px-3">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-lg px-3 py-3 sm:px-4">
        <a href="#hero" className="focus-ring flex items-center gap-2 rounded-md px-2 py-1">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-400 text-sm font-black text-slate-950">
            AB
          </span>
          <span className="hidden text-sm font-black text-white sm:block">Areef Baba</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace("github", "github-stats")}`}
              className="focus-ring rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={personal.github}
            aria-label="GitHub profile"
            className="focus-ring grid size-10 place-items-center rounded-lg border border-white/10 bg-white/10 text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            <Github className="size-[18px]" />
          </a>
          <a
            href="#resume"
            className="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-100"
          >
            <Download className="size-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.18 }}
      className="glass-strong relative overflow-hidden rounded-lg p-4 sm:p-5"
    >
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden bg-cyan-100/20">
        <div className="h-full w-1/2 animate-scan bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      </div>

      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
            Analytics command center
          </p>
          <h3 className="mt-2 text-xl font-black text-white">Revenue, Fraud and ML Insights</h3>
        </div>
        <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-bold text-emerald-100">
          Live-ready
        </div>
      </div>

      <div className="relative mb-4 overflow-hidden rounded-lg border border-white/10 bg-slate-950/50">
        <Image
          src="/analytics-dashboard-preview.png"
          width={1200}
          height={760}
          priority
          alt="Analytics dashboard preview for revenue, fraud, and machine learning metrics"
          className="h-auto w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["SQL queries", "25+", "from MySQL"],
          ["Accuracy", "94%", "fraud model"],
          ["Recall", "91%", "risk signals"]
        ].map(([label, value, hint]) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-black text-white">{value}</p>
            <p className="mt-1 text-xs text-cyan-100/70">{hint}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Hero() {
  const typedRole = useTypewriter(targetRoles);

  return (
    <section id="hero" className="relative mx-auto min-h-screen w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
      <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-2">
        <motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

          <div className="max-w-4xl">

  <p className="text-base text-[#dfff00] font-normal">
    Hello
  </p>

  <h1 className="mt-2 text-3xl md:text-4xl font-medium text-white">
    I'm Areef Baba
  </h1>

  <h2 className="mt-4 text-lg md:text-xl font-normal text-white">
  I am a{" "}
  <span className="gradient-text">
    {typedRole}
    <span className="ml-1 animate-pulse">|</span>
  </span>
</h2>

</div>

          <motion.p variants={fadeIn} className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Data Analyst student skilled in Python, SQL, Tableau, Excel, Statistics, EDA, BI,
            Machine Learning, and Data Storytelling. Passionate about transforming complex data
            into business insights for Data Analyst, Business Analyst, Analytics Engineer, ML
            Engineer.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 px-4 py-2 text-xs font-black text-slate-950 shadow-glow transition hover:scale-[1.02]"
            >
              View Projects
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/Areef_Baba_Resume_ATS.pdf"
              download
              className="rounded-lg bg-[#dfff00] px-3 py-2 text-sm font-medium text-black"
            >
              <Download className="size-4" />
              Download Resume
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/40 px-4 py-2 text-xs font-black text-cyan-100 transition hover:border-cyan-300/40"
            >
              <Mail className="size-4" />
              Contact
            </a>
          </motion.div>

        </motion.div>

        <motion.div
        className="flex justify-center"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/areef-hero-illustration.png"
          alt="Areef Baba"
          width={350}
          height={350}
          priority
          className="object-contain"
        />
</motion.div>
        </div>
    </section>
  );
}

function About() {

  return (
    <SectionShell id="about" kicker="About" title="About Me">

      <div className="glass-strong rounded-lg p-6">
        
                  <p className="text-base leading-8 text-slate-300">
            Hi there! 👋 I'm Areef Baba, a passionate Data Analyst and ML Engineer.
            I specialize in transforming raw data into meaningful business insights
            through analytics, visualization, machine learning, and statistical modeling.With expertise in Python, SQL, Tableau, Power BI, Excel, Statistics,Scikit-Learn, and Machine Learning, I build data-driven solutions that
            help organizations make smarter decisions.Whether it's performing exploratory data analysis, building dashboards,
            developing predictive models, or uncovering trends from large datasets,
            I focus on delivering impactful results.I'm always eager to learn, collaborate, and solve real-world problems
            using data and AI. Let's build something amazing together!
          </p>
          <div className="mt-4 text-sm text-slate-400 space-y-1">
  <p>📍 Hyderabad, India</p>
  <p>✉️ areefbaba17@gmail.com</p>
  <p>📱 +91 9398251405</p>
</div>
        </div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4">
            </motion.div>
        
    </SectionShell>
  );
}

function WhatIDo() {
  const services = [
    "Data Analysis",
    "Business Intelligence",
    "Dashboard Development",
    "Machine Learning",
    "Data Visualization",
    "Predictive Analytics"
  ];

  return (
    <SectionShell
      id="what-i-do"
      kicker=""
      title="What I Do"
    >
      <div className="grid gap-8 md:grid-cols-4">

        <div>
          <p className="text-lg font-medium text-white">
            📊 Data Analysis
          </p>
          
        </div>

        <div>
          <p className="text-lg font-medium text-white">
            🔮 AI Engineering
          </p>
         
        </div>

        <div>
          <p className="text-lg font-medium text-white">
            📈 Business Intelligence
          </p>
         
        </div>

        <div>
          <p className="text-lg font-medium text-white">
            🤖 Machine Learning Engineer
          </p>
        </div>

      </div>
    </SectionShell>
  );
}

function Skills() {
  return (
    <SectionShell
      id="skills"
      kicker="Skills"
      title="My Skills"
    >
      <div className="grid md:grid-cols-2 gap-12">

        <div>
          <h3 className="mb-6 text-lg font-medium text-[#dfff00]">
            ANALYTICS
          </h3>

          {[
            "Python",
            "SQL",
            "Excel",
            "Statistics",
            "EDA",
            "Power BI",
            "Tableau"
          ].map((skill) => (
            <div key={skill} className="mb-4">
              <p className="mb-2 text-sm text-white">{skill}</p>

              <div className="h-1 bg-gray-700">
                <div className="h-1 w-[85%] bg-[#dfff00]" />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-lg font-medium text-[#dfff00]">
            MACHINE LEARNING
          </h3>

          {[
            "Scikit-Learn",
            "XGBoost",
            "Feature Engineering",
            "Model Evaluation",
            "NLP",
            "Flask"
          ].map((skill) => (
            <div key={skill} className="mb-4">
              <p className="mb-2 text-sm text-white">{skill}</p>

              <div className="h-1 bg-gray-700">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.5 }}
                    className="h-1 bg-[#dfff00]"
                  />
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionShell>
  );
}


function Projects() {
  return (
    <SectionShell id="projects" kicker="Projects" title="Projects">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeIn}
            whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(223,255,0,0.3)"
                }}
            className="glass-strong rounded-lg p-3 h-full"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 opacity-80" />
            <div className="flex items-center gap-2">
              <IconBadge icon={project.icon} /><h3 className="text-sm font-medium text-white">{project.title}</h3>
            </div>


            <div className="mt-5 flex flex-wrap gap-1">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-md bg-white/[0.07] px-2.5 py-1.5 text-xs font-bold text-slate-200">
                  {tech}
                </span>
              ))}
            </div>

          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}


function Education() {
  return (
    <SectionShell id="education" kicker="Education" title="Academics">
      <div className="glass-strong rounded-lg p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2">
            <IconBadge icon={GraduationCap} />
            <div>
              <h3 className="text-xl font-medium">Sreenidhi Institute of Science and Technology - Hyderabad </h3>
              <p className="mt-2 text-slate-300">B.Tech CSE (AI/ML), 2023 - 2027     </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function JsonLd() {
  const json = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: personal.name,
      jobTitle: personal.role,
      email: personal.email,
      telephone: personal.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressCountry: "India"
      },
      sameAs: [personal.linkedIn, personal.github],
      knowsAbout: [
        "Python",
        "SQL",
        "Tableau",
        "Power BI",
        "Excel",
        "Statistics",
        "EDA",
        "Machine Learning",
        "Business Intelligence",
        "Data Visualization"
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Sreenidhi Institute of Science and Technology"
      }
    }),
    []
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

// function FloatingContacts() {
//   return (
//     <div className="fixed bottom-8 right-8 z-50 flex gap-3">

//       <motion.a
//           href="https://github.com/Areefbaba"
//               animate={{
//                   y: [0, -5, 0]
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity
//                 }}
//         target="_blank"
//         rel="noreferrer"
//         className="rounded-full bg-black/70 p-4 text-white border border-white/20 hover:bg-[#dfff00] hover:text-black"
//       >
//         <Github size={20} />
//       </motion.a>

//       <motion.a
       
//         href="https://linkedin.com/in/shaikareefbaba"
//         target="_blank"
//         rel="noreferrer"
//         className="rounded-full bg-black/70 p-4 text-white border border-white/20 hover:bg-[#dfff00] hover:text-black"
//       >
//         <Linkedin size={20} />
//       </motion.a>

//       <motion.a>
       
//         href="mailto:areefbaba17@gmail.com"
//         className="rounded-full bg-black/70 p-4 text-white border border-white/20 hover:bg-[#dfff00] hover:text-black"
    
//         <Mail size={20} />
//       </motion.a>

//       <motion.a>
      
//         href="https://wa.me/919398251405"
//         target="_blank"
//         rel="noreferrer"
//         className="rounded-full bg-black/70 p-4 text-white border border-white/20 hover:bg-[#dfff00] hover:text-black"
      
//         <Phone size={20} />
//       </motion.a>

//     </div>
//   );
// }

export default function Home() {
  return (
    <>
      <JsonLd />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <Education />
      </main>
      {/* <FloatingContacts /> */}
      <footer className="mx-auto max-w-7xl px-4 py-10">

  <div className="flex justify-center gap-6">

    <a
      href="https://github.com/Areefbaba"
      target="_blank"
      rel="noreferrer"
    >
      <Github className="h-6 w-6 text-slate-400 hover:text-[#dfff00]" />
    </a>

    <a
      href="https://linkedin.com/in/shaikareefbaba"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin className="h-6 w-6 text-slate-400 hover:text-[#dfff00]" />
    </a>

    <a href="mailto:areefbaba17@gmail.com">
      <Mail className="h-6 w-6 text-slate-400 hover:text-[#dfff00]" />
    </a>

    <a
      href="https://wa.me/919398251405"
      target="_blank"
      rel="noreferrer"
    >
      <Phone className="h-6 w-6 text-slate-400 hover:text-[#dfff00]" />
    </a>

  </div>

  <p className="mt-6 text-center text-sm text-slate-500">
    ©  Areef Baba
  </p>

</footer>
    </>
  );
}
