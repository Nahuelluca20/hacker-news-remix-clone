import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import ListItem from "~/components/list-item";
import { getStory } from "~/utils/fetch-data";

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

export async function loader() {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy=%22$key%22&limitToFirst=20`
  );

  const data = await res.json();

  const storyPromises = data.map(async (story: any) => getStory(story));

  const stories = await Promise.all(storyPromises);

  return stories;
}

export default function Index() {
  const stories = useLoaderData<typeof loader>();
  return (
    <Layout>
      <ul className="mt-5 w-full space-y-6 bg-slate-800 px-6 py-2 rounded-md">
        {stories &&
          stories.map((story: any) => (
            <li key={story.id}>
              <ListItem
                title={story.title}
                score={story.score}
                url={story.url}
                time={story.time}
                by={story.by}
                comments={story.kids}
              />
            </li>
          ))}
      </ul>
    </Layout>
  );
}
