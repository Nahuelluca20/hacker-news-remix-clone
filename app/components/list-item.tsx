export default function ListItem() {
  return (
    <div>
      <div className="flex gap-2">
        <a
          className="text-black font-bold text-md"
          target="_blank"
          href={
            "https://www.ycombinator.com/companies/spine-ai/jobs/Z1hz3BZ-founding-ml-engineer-scientist"
          }
        >
          $20k bounty was claimed
        </a>
        <span className="text-white hover:underline font-medium text-sm">
          <a href="www.ycombinator.com">(prettier.io)</a>
        </span>
      </div>
      <span className="text-white text-sm">
        462 points by{" "}
        <a
          className="hover:underline"
          href="https://remix.hnclone.win/user?id=conaclos"
        >
          conachols
        </a>{" "}
        3 hours ago |{" "}
        <span className="hover:underline cursor-pointer">hide</span> |
        <a className="hover:underline" href="item?id=38434613">
          181 comments
        </a>
      </span>
    </div>
  );
}
