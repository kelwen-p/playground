import Head from 'next/head'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Growing up as an Asian American in the United States, I knew very little about the AAPI experience. I’m starting to fix that here.
        </p>
        <p>
        In honor of Asian American and Pacific Islander (AAPI) Heritage Month, this site will post a small writeup on an AAPI topic or a figure part of the AAPI community, along with additional resources for further reading. 
        These passages are not meant to be an authoritative source of truth but rather a starting point to better understand the diverse cultures and rich histories of the AAPI peoples.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>May 2021</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}