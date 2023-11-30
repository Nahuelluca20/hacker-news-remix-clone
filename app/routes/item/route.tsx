import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  URLSearchParamFields,
  getSearchParamsFromRequest,
} from "~/utils/http-handlers";
import { IStory } from "~/utils/types";

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = getSearchParamsFromRequest(request);
  const newsItemId = searchParams.get(URLSearchParamFields.ID);

  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${newsItemId}.json?print=pretty`
  );
  const data: IStory = await res.json();
  let headers = { "Cache-Control": "public, max-age=120" };

  return json(data, { headers });
}

export default function Item() {
  const comments = useLoaderData<typeof loader>();
  console.log(comments);
  return (
    <div>
      <h1>HOLA</h1>
    </div>
  );
}
