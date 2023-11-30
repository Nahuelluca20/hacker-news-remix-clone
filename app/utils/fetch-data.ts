export async function getItem(id: number) {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  return response.json();
}

export async function getComments(ids: number[]) {
  const comments = await Promise.all(ids.map((id) => getItem(id)));
  return comments;
}
