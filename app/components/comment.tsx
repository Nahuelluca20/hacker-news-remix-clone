import { timeAgo } from "~/utils/timeAgo";
import { IComment } from "~/utils/types";

export default function Comment({ comment }: { comment: IComment }) {
  const createMarkup = (html: any) => ({ __html: html });
  return (
    <div key={comment.id} className="text-zinc-400 mt-10 w-full">
      <span className="text-white">
        {comment.by} {timeAgo(comment.time)}
      </span>
      <div style={{ overflowX: "auto" }}>
        <p dangerouslySetInnerHTML={createMarkup(comment.text)} />
      </div>
      {comment.children && (
        <div style={{ marginLeft: "20px" }}>
          {comment.children.map((child) => (
            <div className="mt-[-25px]" key={child.id}>
              <Comment comment={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
