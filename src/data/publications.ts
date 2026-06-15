export type Publication = {
  title: string;
  venue: string;
  year: string;
  link?: string;
  type: "paper" | "patent";
};

// Newest first.
export const PUBLICATIONS_LIST: Publication[] = [
  {
    title: "Reasoning Graph-Structured Question Answering: Datasets and Insights from LLM Benchmarking",
    venue: "Language Resources and Evaluation Conference (LREC)",
    year: "2026",
    link: "https://lrec.elra.info/lrec2026-main-414",
    type: "paper",
  },
  {
    title: "ViBe: A Text-to-Video Benchmark for Evaluating Hallucination in Large Multimodal Models",
    venue: "Workshop on Trustworthy Natural Language Processing (TrustNLP)",
    year: "2025",
    link: "https://aclanthology.org/2025.trustnlp-main.15/",
    type: "paper",
  },
  {
    title: "NLP at UC Santa Cruz at SemEval-2024 Task 5: Legal Answer Validation using Few-Shot Multi-Choice QA",
    venue: "International Workshop on Semantic Evaluation (SemEval)",
    year: "2024",
    link: "https://aclanthology.org/2024.semeval-1.189/",
    type: "paper",
  },
  {
    title: "System, Apparatus and Method of Managing Knowledge Generated from Technical Data",
    venue: "US Patent",
    year: "2022",
    link: "https://patents.google.com/patent/US20220358379A1",
    type: "patent",
  },
];

export const SCHOLAR_URL =
  "https://scholar.google.com/citations?hl=en&user=x7fpLDUAAAAJ";
