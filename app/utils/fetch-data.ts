import { IComment } from "./types";

export async function getItem(id: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return response.json();
}

async function fetchComment(commentId: number) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`
  );
  const comment = await res.json();
  const childComments = await getComments(comment.kids);

  if (childComments.length > 0) {
    comment.children = childComments;
  }

  return comment;
}

export async function getComments(commentIds: number[]) {
  if (!commentIds) {
    return [];
  }

  const comments: IComment[] = [];

  await Promise.all(
    commentIds.map(async (commentId) => {
      const comment = await fetchComment(commentId);
      comments.push(comment);
    })
  );

  return comments;
}
