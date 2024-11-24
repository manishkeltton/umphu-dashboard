import HomePage from "@/components/Home";
import Head from "next/head";

// const awsUrl=process.env.AWS_URL;

export default function Home() {
  const url = "https://phume.s3.ap-south-1.amazonaws.com";

  return (
    <>
      <Head>
        <title>Somwall</title>
        <link rel="icon" href={`${url}/logo.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Play offline and online ludo without interruption, win coins
          participate in event and get a chance to win exciting prizes."
        />
        <meta name="keywords" content="Somwall App" />
        <meta property="og:image" content={`${url}/logo.png`} />
        <link rel="canonical" href={`${url}/app-release.apk`} />
      </Head>

      <HomePage />
    </>
  );
}
