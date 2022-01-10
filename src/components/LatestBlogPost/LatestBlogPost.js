import React from "react"
import { Link } from "gatsby"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatesBlogPost.styles"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()
  console.log(data)
  return (
    <Wrapper>
      <h1>Latest blog post</h1>
      <h4>{data.allWpPost.edges[0].node.title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />
      <Link to={data.allWpPost.edges[0].node.uri}>
        <h5>Read more</h5>
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
