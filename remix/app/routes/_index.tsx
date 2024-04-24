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
          <Button>永いエラーと奮闘と奮闘の末</Button>
          <AssemblyCodeInput />
          <StackItem width={100} height={70} description={"text"} lore={"13"} />
          <StackItem width={100} height={70} description={"aataateatea-^p12p@"} lore={"5"} />
          <AssemblyCodeSelector defaultValue={0} data={["sub rax, 8", "mov 2, rax"]}></AssemblyCodeSelector>
          <BracketEnd width={50} height={50} thickness={4} />
        </div>
      </div>
    </div>
  );
}
