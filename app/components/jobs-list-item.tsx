export default function JobsListItem() {
  return (
    <div>
      <div className="flex gap-2">
        <a
          className="text-stone-950 font-bold text-md"
          target="_blank"
          href={
            "https://www.ycombinator.com/companies/spine-ai/jobs/Z1hz3BZ-founding-ml-engineer-scientist"
          }
        >
          Spine AI (YC S23) Is Hiring
        </a>
        <span className="text-white hover:underline font-medium text-sm">
          <a href="www.ycombinator.com">(www.ycombinator.com)</a>
        </span>
      </div>
      <span className="text-white text-[9px]">8 hours ago</span>
    </div>
  );
}
