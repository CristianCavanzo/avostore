import { apolloClient } from '@client';
import { montserrat } from '@components/Layout';
import {
    AvoFieldsFragment,
    GetAllAvocadosIDsDocument,
    GetByIdDocument,
} from '@service/graphql';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const AvocadoComponent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    .avocado__description-title {
        font-weight: bold;
        margin-bottom: 8px;
    }
    .avocado__description-text {
        font-size: 15px;
        color: #58585e;
    }
    .avocado__price {
        display: flex;
        justify-content: space-between;
        background: #76c270;
        border-radius: 8px;
        p {
            color: #252525;
        }
        .avocado__price-left {
            padding: 16px 0;
            padding-left: 24px;
        }
        .avocado__price-left-price {
            font-weight: bold;
        }
        .avocado__price-left-text {
            font-weight: 300;
        }
        .avocado__price-right {
            padding: 16px 24px;
            background: #52834e;
            border: none;
            border-radius: 0 8px 8px 0;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
        }
        .avocado__attributes {
        }
    }
`;

export const getStaticPaths = async () => {
    const response = await apolloClient.query({
        query: GetAllAvocadosIDsDocument,
        fetchPolicy: 'network-only',
    });
    const paths = response.data.avos.map((avocado) => ({
        params: { id: avocado.id },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};
export const getStaticProps: GetStaticProps<{
    product: AvoFieldsFragment;
}> = async ({ params }) => {
    const { data: avo } = await apolloClient.query({
        query: GetByIdDocument,
        variables: {
            avoId: params.id as string,
        },
    });
    return {
        props: {
            product: avo.avo,
        },
    };
};
const Avocado = ({
    product: avocado,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <AvocadoComponent>
            <Image
                src={avocado.image}
                alt={avocado.name}
                width={250}
                height={250}
            />
            <h2 className="avocado__name">{avocado.name}</h2>

            <div className="avocado__description">
                <p className="avocado__description-title">Avocado info</p>
                <p className="avocado__description-text">
                    {avocado.attributes.description}
                </p>
            </div>

            <div className="avocado__price">
                <div className="avocado__price-left">
                    <p className="avocado__price-left-price">
                        ${avocado.price}
                    </p>
                    <p className="avocado__price-left-text">Unit Price</p>
                </div>
                <button
                    className={`avocado__price-right ${montserrat.className}`}
                >
                    Add to cart
                </button>
            </div>

            <div className="avocado__attributes">
                <table>
                    <thead>
                        <tr>
                            <th>Attributes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>shape</td>
                            <td>Oval</td>
                        </tr>
                        <tr>
                            <td>hardiness</td>
                            <td>1 °C</td>
                        </tr>
                        <tr>
                            <td>taste</td>
                            <td>Catchy, is an avocado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </AvocadoComponent>
    );
};

export default Avocado;
