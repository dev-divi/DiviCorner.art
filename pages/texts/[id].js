// Anything I name the parent folder I can use as a path 

//This code loads the post data on the actual post page

import { getAllPostIds, getPostData } from '/library_system/texts'
import Head from 'next/head'
//import Layout from '/Design/Layout'
import utilStyles from '/styles/utils.module.css'
import Date from '/library_system/date';

//import FooterArticle from '../../Design/FooterArticle';
//import MoneyModule from '../MainMoney/MoneyModule';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className="open-book2">
      <article className={utilStyles.articleClass}>
        <span className={utilStyles.linksUnderline}> 
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          {/* some article spacing between date and article */}
          <div >
          <span className={utilStyles.articlestyling}> 
          <div className="open-book2" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </span>
          </div>
        </span>
      </article>
      </section>
      {/* <MoneyModule /> <FooterArticle />  */} 
      
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
