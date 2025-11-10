import Head from "next/head";
import LandingPage from "./home/page";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>
      </Head>
      <div>
        <LandingPage/>
      </div>
    </>
   
  );
}
