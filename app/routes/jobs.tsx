import React from "react";
import JobsListItem from "~/components/jobs-list-item";

export default function Jobs() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ul className="mt-5 space-y-6 w-full bg-slate-500 px-6 py-2 rounded-md">
        <li>
          <JobsListItem />
        </li>
        <li>
          <JobsListItem />
        </li>
        <li>
          <JobsListItem />
        </li>
      </ul>
    </main>
  );
}
