import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Documents() {

    return (
        <div className={styles.container}>
            <section>
                <h1>Documentation Links:</h1>
                <div className={styles.grid}>
                    <Link href={'https://nextjs.org/docs'}>
                        <a className={styles.card}>
                            <h2>Getting Started Docs &rarr;</h2>
                        </a>
                    </Link>
                    <Link href={'https://nextjs.org/docs/basic-features/typescript'}>
                        <a className={styles.card}>
                            <h2>TypeScript Docs &rarr;</h2>
                        </a>
                    </Link>
                    <Link href={'https://nextjs.org/learn/basics/create-nextjs-app'}>
                        <a className={styles.card}>
                            <h2>Tutorial Project &rarr;</h2>
                        </a>
                    </Link>
                    <Link href={'https://nextjs.org/docs/advanced-features/preview-mode'}>
                        <a className={styles.card}>
                            <h2>Advanced Features &rarr;</h2>
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    )
}