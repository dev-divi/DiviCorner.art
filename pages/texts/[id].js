// Anything I name the parent folder I can use as a path 

//This code loads the post data on the actual post page

import { getAllPostIds, getPostData } from '/library_system/texts'
import Head from 'next/head'
import Layout from '/Design/Layout'
import utilStyles from '/styles/utils.module.css'
import Date from '/library_system/date';

import FooterArticle from '../../Design/FooterArticle';
//import MoneyModule from '../MainMoney/MoneyModule';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <span className={utilStyles.linksUnderline}> 
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>

          <span className={utilStyles.articlestyling}> 
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </span>
        </span>
      </article>
      {/* <MoneyModule /> */} 
      <br /> <br /> 
      <FooterArticle /> 
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
