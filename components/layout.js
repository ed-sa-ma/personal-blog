import { useCallback, useRef } from "react";
import Head from "next/head";
import Link from "next/link";

import Background from "@components/background";
import Logo from "@components/logo";
import { useElementResize } from "@hooks";
import styles from "@styles/layout.module.css";

export default function Layout({ children }) {
  // We write the height of the logo in css to be used in mobile screen layout.
  const layoutRef = useRef();
  const setCssVar = useCallback(
    (logoElement) => {
      if (layoutRef.current) {
        const logoHeight = logoElement.getBoundingClientRect().height;
        layoutRef.current.style.setProperty("--logo-height", `${logoHeight}px`);
      }
    },
    [layoutRef.current]
  );
  const logoRef = useElementResize(setCssVar);

  return (
    <div className={styles.layout} ref={layoutRef}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <div ref={logoRef} className={styles.logo}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
}
