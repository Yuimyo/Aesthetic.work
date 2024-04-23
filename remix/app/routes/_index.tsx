import type { LinksFunction, MetaFunction } from "@remix-run/node";
import styles from "./index/index.css?url";
import destyles from "./index/destyle.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Component Expo" },
    { name: "description", content: "オタク" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: destyles },
];

export default function Index() {
  return (
    <div>
      <div className="window">
        <div className="expo-dark">
        </div>
      </div>
    </div>
  );
}
