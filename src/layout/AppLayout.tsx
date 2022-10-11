import Head from "next/head";

export default function AppLayout({ children }: { children: any }) {
    return (
        <>
            <Head>
                <title>
                    DMX Controller
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
        </>
    );
}
