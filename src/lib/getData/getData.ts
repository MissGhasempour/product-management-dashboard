import { useQuery, gql } from "@apollo/client";

const product_query = gql`
  {
    countries {
      code
      name
      capital
    }
  }
`;

export default function getData () {
  const { data, loading, error } = useQuery(product_query);

    if (loading) return "loading..";
    if (error) return "An error occured";
    return data;
}