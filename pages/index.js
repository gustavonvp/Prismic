import React from 'react'
import Prismic from 'prismic-javascript'
import Link from '../components/Link'
import Head from 'next/head'



const Index = props => {
    const items = props.data.body[0].items

    return (
<div className="max-w-xl mx-auto">
    <Head>
        <title>Portifolio</title>
    </Head>
    <h1><img src={props.data.header_image.url} alt="PRISMIC" /></h1>
        <ul>
            {items.map(item =>{
                return (
                    <li>
                        <Link href={item.link.url}>{item.texto}</Link>
    
                    </li> 
                )
            })}

        
        </ul>
    
        <div>


        </div>    

</div>
    )
}

export async function getServerSideProps ({res}) {
    res.setHeader('Cache-control','s-maxage=60, stale-while-revalidate')
    const client = Prismic.client('https://myfirstrepositoy.cdn.prismic.io/api/v2')
    const page = await client.getSingle('home')
    return {
        props:{
            data:page.data,

        }
    }
}

export default Index