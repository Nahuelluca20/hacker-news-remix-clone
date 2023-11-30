import { IComment } from "~/utils/types";

export default function Comment({ comment }: { comment: IComment }) {
  return (
    <div key={comment.id}>
      <p>{comment.text}</p>
      {comment.children && (
        <div style={{ marginLeft: "20px" }}>
          {comment.children.map((child) => (
            <Comment key={child.id} comment={child} />
          ))}
        </div>
      )}
    </div>
  );
}
