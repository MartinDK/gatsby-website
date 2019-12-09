import React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/Layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
    	allMarkdownRemark(sort: {
    		order: DESC,
    		fields: [frontmatter___date]
    	}) {
    		edges {
    			node {
    				frontmatter {
    					title
    					date
    				}
    				fields {
    					slug
    				}
    			}
    		}
    	}
    }
  `)

  return (
    <Layout>
      <h1>Projects</h1>
      <p>Things I'm currently working on.</p>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
      })}
      </ol>
    </Layout>
  )
}

export default BlogPage