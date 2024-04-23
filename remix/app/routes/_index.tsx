import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./index/index.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Component Expo" },
    { name: "description", content: "オタク" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div className="hoge">
      <h1>Velcome</h1>
    </div>
  );
}
