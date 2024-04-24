import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Button from "~/components/dark/button";
import styles from "./index.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Component Expo" },
    { name: "description", content: "オタク" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className={styles.window}>
        <div className={styles.expo_dark}>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}
