import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import ListItem from "~/components/list-item";
import { getStory } from "~/utils/fetch-data";
import { json } from "@remix-run/node";
import { IStory } from "~/utils/types";

export async function loader() {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=30&orderBy=%22$key%22`
  );

  const data = await res.json();

  const storyPromises = data.map(async (story: any) => getStory(story));

  const stories: IStory[] = await Promise.all(storyPromises);
  let headers = { "Cache-Control": "public, max-age=120" };
  return json(stories, {
    headers,
  });
}

export default function Index() {
  const stories = useLoaderData<typeof loader>();
  return (
    <Layout>
      <ul className="mt-5 w-full space-y-6 bg-slate-800 px-6 py-2 rounded-md">
        {stories &&
          stories.map((story: IStory) => (
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
