/* Style reminder: Editorial Command Desk — keep project evidence typed, explicit, and easy to verify independently from presentation. */
export type ProjectStatus = "الكل" | "مكتمل" | "قيد العرض";

export type ProjectRecord = {
  name: string;
  type: string;
  status: string;
};

export function filterProjectList<T extends ProjectRecord>(projects: T[], query: string, status: ProjectStatus): T[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return projects.filter((project) => {
    const searchableText = `${project.name} ${project.type}`.toLocaleLowerCase();
    const matchesQuery = searchableText.includes(normalizedQuery);
    const matchesStatus = status === "الكل" || project.status === status;
    return matchesQuery && matchesStatus;
  });
}
