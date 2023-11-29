import React from "react";
import JobsListItem from "~/components/jobs-list-item";
import Layout from "~/components/layout";

export default function Jobs() {
  return (
    <Layout>
      <ul className="mt-5 space-y-6 w-full bg-slate-800 px-6 py-2 rounded-md">
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
    </Layout>
  );
}
