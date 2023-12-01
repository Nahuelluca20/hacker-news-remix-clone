import type { LoaderFunctionArgs, HeadersFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getComments } from "~/utils/fetch-data";
import Comment from "~/components/comment";
import {
  URLSearchParamFields,
  getSearchParamsFromRequest,
} from "~/utils/http-handlers";

import { IStory } from "~/utils/types";

export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": "public,  max-age=120",
  };
};

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = getSearchParamsFromRequest(request);
  const newsItemId = searchParams.get(URLSearchParamFields.ID);

  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${newsItemId}.json?print=pretty`
  );
  const data: IStory = await res.json();
  const getAllComments = await getComments(data.kids);

  return json(getAllComments);
}

export default function Item() {
  const comments = useLoaderData<typeof loader>();
  return (
    <ul className="mt-5 w-full space-y-6 bg-slate-800 px-6 py-2 rounded-md">
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}
