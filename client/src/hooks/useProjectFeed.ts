/* Style reminder: Editorial Command Desk — async states should be explicit, recoverable, and visible to the reviewer. */
import { useCallback, useEffect, useState } from "react";
import { fetchProjectCatalog, type Project } from "@/lib/project-feed";

type FeedStatus = "loading" | "success" | "error";

export function useProjectFeed() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<FeedStatus>("loading");

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const nextProjects = await fetchProjectCatalog();
      setProjects(nextProjects);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  return { projects, status, retry: load };
}

export type { FeedStatus };
