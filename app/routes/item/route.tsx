import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  URLSearchParamFields,
  getSearchParamsFromRequest,
} from "~/utils/http-handlers";

export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = getSearchParamsFromRequest(request);
  const newsItemId = searchParams.get(URLSearchParamFields.ID);
  return newsItemId;
}

export default function Item() {
  const id = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
