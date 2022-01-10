import { useStaticQuery, graphql } from "gatsby"

export const useQuoteQuery = () => {
  const data = useStaticQuery(graphql`
    query QuoteQuery {
      wpPage(databaseId: { eq: 46 }) {
        ACF_HomePage {
          quote1Author
          quote1Text
        }
      }
    }
  `)
  return data
}
