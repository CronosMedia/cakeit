import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query Header {
      site {
        siteMetadata {
          title
          siteUrl
          description
          author
        }
      }
      menu: wpMenu(name: { eq: "mainMenu" }) {
        menuItems {
          nodes {
            label
            url
            parentId
            id
            childItems {
              nodes {
                label
                url
                parentId
                id
              }
            }
          }
        }
      }
    }
  `)

  return data
}
