import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/header";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => [
  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  },
  { title: "New Remix App" },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-900 my-6 md:max-w-[610px] lg:max-w-[1082px] xl:max-w-[1444px] w-full mx-auto">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-900 h-screen flex justify-center items-center  my-6 md:max-w-[610px]  lg:max-w-[1082px] xl:max-w-[1444px] w-full mx-auto text-white">
        <h1 className="text-4xl font-bold">Oh no! Something went wrong </h1>
        <Scripts />
      </body>
    </html>
  );
}
