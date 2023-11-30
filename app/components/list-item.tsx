import { timeAgo } from "~/utils/timeAgo";

export default function ListItem({
  title,
  id,
  score,
  url,
  time,
  by,
  comments,
}: {
  title: string;
  score: number;
  id: number;
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
      </div>
      <span className="text-white text-sm">
        {score} points by{" "}
        <a
          className="hover:underline"
          href="https://remix.hnclone.win/user?id=conaclos"
        >
          {by}
        </a>{" "}
        {timeAgo(time)} |{" "}
        <span className="hover:underline cursor-pointer">hide</span> |
        <a className="hover:underline" href={`item?id=${id}`}>
          {" "}
          {comments?.length} comments
        </a>
      </span>
    </div>
  );
}
