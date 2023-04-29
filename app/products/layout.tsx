import styles from "./layout.module.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className={styles.nav}>
          <a href="">남성 의류</a>
          <a href="">여성 의류</a>
        </nav>
        <section className={styles.product}>{children}</section>
      </body>
    </html>
  );
}
