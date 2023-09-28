import { gql, useQuery } from '@apollo/client';
import { useGetAllProductsQuery } from '@service/graphql';
export interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

export interface Category {
    id: number;
    name: string;
    image: string;
}
const query = `query {
    products(limit: 10, offset: 0) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }`;

export const useProducts = () => {
    const result = gql`
        ${query}
    `;
    const { data, loading, error } = useQuery(result);
    return { data, loading, error };
};
export const useProduct = (id: string) => {
    
    const result = gql`
        query {
            products(id: ${id}) {
                id
                title
                price
                description
                images
                category {
                    id
                    name
                    image
                }
            }
        }
    `;
    const { data, loading, error } = useQuery(result);
    return { data, loading, error };
};
