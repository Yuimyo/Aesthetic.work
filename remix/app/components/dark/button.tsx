import type { LinksFunction } from "@remix-run/node";
import styles from "./button.module.css";

export default function Button() {
    return (
        <div>
            <button className={styles.btn}>永いエラーと奮闘の末</button>
        </div>
    );
}
