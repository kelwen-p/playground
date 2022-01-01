import Head from 'next/head'
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>31 Days</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          A hub for all 31 Days projects. 
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
        <li className={utilStyles.listItem} key='aapi'>
          <Link href={`/aapi/`}>
            <a>31 Days of AAPI</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            May 2021
          </small>
        </li>
        <li className={utilStyles.listItem} key='cooking'>
          <Link href={`/cooking/`}>
            <a>31 Days of Cooking</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            January 2022
          </small>
        </li>
        </ul>
      </section>
    </Layout>
  )
}