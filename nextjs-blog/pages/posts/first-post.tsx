import { Button } from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/" passHref>
        <Button>Back to home</Button>
      </Link>
    </Layout>
  );
}
