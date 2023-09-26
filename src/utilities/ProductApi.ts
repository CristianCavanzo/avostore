import axios from 'axios';
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

export class ProductApi {
    private query = `query {
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

    private requester = axios.create({
        baseURL: 'https://api.escuelajs.co',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    constructor() {}

    async getProducts(): Promise<Products[]> {
        const { data } = await this.requester.post('/graphql', {
            query: this.query,
        });
        return data.data.products;
    }
}
