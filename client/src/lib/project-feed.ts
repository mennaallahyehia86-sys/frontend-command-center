/* Style reminder: Editorial Command Desk — data is explicit, typed, recoverable, and separate from presentation. */
export type ProjectHealth = "مستقر" | "مراجعة";
export type ProjectStatus = "قيد العرض" | "مكتمل" | "قيد التحسين";

export type Project = {
  name: string;
  type: string;
  status: ProjectStatus;
  health: ProjectHealth;
  color: "orange" | "sage" | "blue" | "navy";
  progress: number;
  updated: string;
  repo: string;
};

export const projectCatalog: Project[] = [
  { name: "Castel Pro", type: "Product UX", status: "قيد العرض", health: "مستقر", color: "orange", progress: 86, updated: "منذ ساعتين", repo: "castel-pro" },
  { name: "Arabic Todo", type: "Frontend app", status: "مكتمل", health: "مستقر", color: "sage", progress: 100, updated: "أمس", repo: "arabic-todo" },
  { name: "Carousel Factory", type: "Interactive editor", status: "قيد التحسين", health: "مراجعة", color: "blue", progress: 72, updated: "منذ 3 أيام", repo: "carousel-factory" },
  { name: "CodeRise", type: "Studio landing", status: "مكتمل", health: "مستقر", color: "navy", progress: 100, updated: "الأسبوع الماضي", repo: "coderise-site" },
];

export async function fetchProjectCatalog(): Promise<Project[]> {
  await new Promise((resolve) => window.setTimeout(resolve, 650));
  return projectCatalog.map((project) => ({ ...project }));
}
