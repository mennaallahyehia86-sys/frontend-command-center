import { describe, it, expect } from "vitest";
import { filterProjectList, ProjectRecord } from "./project-utils";

const mockProjects: ProjectRecord[] = [
  { name: "Castel Pro", type: "Product UX", status: "قيد العرض" },
  { name: "Arabic Todo", type: "Frontend app", status: "مكتمل" },
  { name: "CodeRise", type: "Studio landing", status: "مكتمل" },
];

describe("filterProjectList", () => {
  it("returns all projects when query is empty and status is 'الكل'", () => {
    const result = filterProjectList(mockProjects, "", "الكل");
    expect(result).toHaveLength(3);
  });

  it("filters by search query (case insensitive)", () => {
    const result = filterProjectList(mockProjects, "castel", "الكل");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Castel Pro");
  });

  it("filters by status", () => {
    const result = filterProjectList(mockProjects, "", "مكتمل");
    expect(result).toHaveLength(2);
    expect(result.every(p => p.status === "مكتمل")).toBe(true);
  });

  it("combines query and status filters", () => {
    const result = filterProjectList(mockProjects, "todo", "مكتمل");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Arabic Todo");
  });

  it("returns empty array when no matches found", () => {
    const result = filterProjectList(mockProjects, "nonexistent", "الكل");
    expect(result).toHaveLength(0);
  });
});
