# 0xDivi.art

# TBA 
a
Add [Home], [All Texts] to footer of posts located at /pages/texts/[id].js

underline the page on /alltexts  

# ###########

className={utilStyles.thepointer}  
className={utilStyles.thepointer}  

# ###########

[Texts have been temporarily? renamed to datapoints]  
Texts loader: /library_system/texts.js   
Posts location [calls loader]: /pages/texts/[id].js   
Texts output location: /pages/index.js   
Texts storage location: /Texts   
Texts all: /pages/alltexts.js   
  
# ###########

npm install next 
npm i react-mailchimp-subscribe
npm install html-react-parser  
npm install gray-matter    
npm install remark-html    
npm install date-fns    

npm install 98.css
# ###########

ReferenceError: getSortedPostsData is not defined   
^ import { getSortedPostsData } from '../library_system/texts'



# ### 

TypeError: Cannot read properties of undefined (reading 'map')   

^this usually means I need this function in that file   

```
export async function getStaticProps() {   
    const allPostsData = getSortedPostsData()   
    return {   
        props: {   
            allPostsData  
        }  
    }   
}  
```

# ### 

error- Allpostsdata   

^probably forgot to pass in   
const yay = ({ allPostsData }) => {   

# ###

error - ./library_system/magic.js:1:0  
Module not found: Can't resolve 'fs'  

^ usually means the folder doesn't exist  

# ###

RangeError: Invalid time value   
^ didn't format the date right on a .md file 


# ###########

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
