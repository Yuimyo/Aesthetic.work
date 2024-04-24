import type { LinksFunction } from "@remix-run/node";
import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick }: ButtonProps) {
    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <div>
            <button className={styles.btn} onClick={handleChange}>{children}</button>
        </div>
    );
}
