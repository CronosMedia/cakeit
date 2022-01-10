import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 46 }) {
        id
        ACF_HomePage {
          heroText
          heroImage {
            localFile {
              id
              childImageSharp {
                id
                gatsbyImageData(
                  width: 1920
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  `)

  return data
}
