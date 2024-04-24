import type { LinksFunction } from "@remix-run/node";
import styles from "./button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    return (
        <div>
            <button className={styles.btn} onClick={onClick}>{children}</button>
        </div>
    );
}
