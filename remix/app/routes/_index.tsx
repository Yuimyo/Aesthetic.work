import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Button from "~/components/dark/Button";
import AssemblyCodeInput from "~/components/dark/AssemblyCodeInput";
import AssemblyCodeSelector from "~/components/dark/AssemblyCodeSelector";
import StackItem from "~/components/dark/StackItem";
import BracketEnd from "~/components/dark/BracketEnd";
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
          <AssemblyCodeInput></AssemblyCodeInput>
          <StackItem description={"text"} lore={"13"}></StackItem>
          <StackItem description={"aataateatea-^p12p@"} lore={"5"}></StackItem>
          <AssemblyCodeSelector></AssemblyCodeSelector>
          <BracketEnd></BracketEnd>
        </div>
      </div>
    </div>
  );
}
