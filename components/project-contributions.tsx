"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type ProjectContributionsProps = {
  role?: string;
  team?: string;
  contributions?: string[];
};

// Mostra o papel do Mateus no projeto e, num botão recolhível, o que ele fez.
export function ProjectContributions({ role, team, contributions }: ProjectContributionsProps) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  if (!role && !contributions?.length) return null;

  return (
    <div className="mt-4">
      {role && (
        <p className="inline-flex flex-wrap items-center gap-x-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span>{role}</span>
          {team && <span className="text-muted-foreground">· {team}</span>}
        </p>
      )}

      {contributions && contributions.length > 0 && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={listId}
            className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground transition hover:text-primary"
          >
            {open ? "Ocultar o que eu fiz" : "Ver o que eu fiz"}
            <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <ul id={listId} className="mt-1 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-primary">
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
