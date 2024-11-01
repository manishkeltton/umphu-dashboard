import App from "@/component/App";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ludo Umphu</title>
        <link
          rel="icon"
          href="https://phume.s3.ap-south-1.amazonaws.com/logo.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Play offline and online ludo without interruption, win coins
          participate in event and get a chance to win exciting prizes."
        />
        <meta name="keywords" content="Umphu App" />
        <meta
          property="og:image"
          content={`https://phume.s3.ap-south-1.amazonaws.com/logo.png`}
        />
        <link
          rel="canonical"
          href={`https://phume.s3.ap-south-1.amazonaws.com/app-release.apk`}
        />
      </Head>
      <App />
    </>
  );
}
