import Link from "next/link";
import styles from "./layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <Link href="/products/men">남성 의류</Link>
          <Link href="/products/women">여성 의류</Link>
        </nav>
        <section className={styles.product}>{children}</section>
      </body>
    </html>
  );
}
