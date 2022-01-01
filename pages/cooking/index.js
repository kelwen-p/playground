import Head from 'next/head'
import Link from 'next/link'

import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'

import Layout, { siteTitle } from '../../components/layout'
import Date from '../../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>31 Days of Cooking</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I have a 2022 New Year's Resolution to check out new cuisines, practice techniques and improve my cooking/baking skills. This section is an accountability for that. 
        </p>
        <p>
          Not all dishes were made on the day they were posted. However, they were all created between December 22nd, 2021 through January 31st, 2022.   
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>January 2022</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/cooking/${id}`}>
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
  const allPostsData = getSortedPostsData('cooking')
  return {
    props: {
      allPostsData
    }
  }
}