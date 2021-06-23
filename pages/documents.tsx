import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";

export const pageTitle = 'Next.js Documentation List'

export default function Documents() {

    return (
        <Layout>
            <Head>
                <title>{ pageTitle }</title>
                <meta name={'og:title'} content={ pageTitle  }/>
                <meta name="description" content="A place to find Next.Js documentation" />
            </Head>
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
        </Layout>
    )
}