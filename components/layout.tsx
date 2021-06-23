import React from "react";
import Head from "next/head";
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export const siteTitle = 'Next.js rae-dev'

export default function Layout({ children, home,  }: {
    children: React.ReactNode
    home?: boolean
}) {
    console.log('our children', children)
    return (
        <div>
            <Head>
                <link rel={'icon'} href={'/favicon.ico'}/>
                <meta
                    property={'og:image'}
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=dark&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg`}
                />
                <meta name={'twitter:card'} content={'summary_large_image'}/>
            </Head>
            <header>

            </header>
            <main className={ styles.main }>
                { children }
                {!home && (
                    <div>
                        <Link href={'/'}>
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </main>
            <footer className={styles.footer}>
                <Link href={'https://rae-dev.com'}>
                    <a>My Other NeXt.js Site</a>
                </Link>
                <Link href={'https://nextjs-starter-ivory-ten.vercel.app'}>
                    <a>My Other Other NeXt.js Site</a>
                </Link>
            </footer>
        </div>
    )
}