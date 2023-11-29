export default function ListItem({
  title,
  score,
  url,
  time,
  by,
  comments,
}: {
  title: string;
  score: number;
  url: string;
  time: number;
  by: string;
  comments: number[];
}) {
  return (
    <div>
      <div className="flex gap-2">
        <a
          className="text-zinc-400 font-bold text-md"
          target="_blank"
          href={url}
        >
          {title}
        </a>
        {/* <span className="text-white hover:underline font-medium text-sm">
          <a href="www.ycombinator.com">(prettier.io)</a>
        </span> */}
      </div>
      <span className="text-white text-sm">
        {score} points by{" "}
        <a
          className="hover:underline"
          href="https://remix.hnclone.win/user?id=conaclos"
        >
          {by}
        </a>{" "}
        3 hours ago |{" "}
        <span className="hover:underline cursor-pointer">hide</span> |
        <a className="hover:underline" href="item?id=38434613">
          {comments.length} comments
        </a>
      </span>
    </div>
  );
}
