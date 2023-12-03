import { useState } from "react";
import { timeAgo } from "~/utils/timeAgo";
import { IComment } from "~/utils/types";

export default function Comment({ comment }: { comment: IComment }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const createMarkup = (html: any) => ({ __html: html });

  return (
    <div key={comment.id} className="text-zinc-400 mt-10 w-full">
      <div className="flex items-center">
        <span className="text-white mr-2">
          {comment.by} {timeAgo(comment.time)}
        </span>
        {comment?.text?.length > 100 && (
          <button className="text-blue-500" onClick={toggleExpand}>
            {isExpanded ? "Hide" : "Show more"}
          </button>
        )}
      </div>
      <div style={{ overflowX: "auto" }}>
        <p
          dangerouslySetInnerHTML={createMarkup(
            isExpanded ? comment.text : `${comment.text.slice(0, 100)}...`
          )}
        />
      </div>
      {comment.children && isExpanded && (
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
