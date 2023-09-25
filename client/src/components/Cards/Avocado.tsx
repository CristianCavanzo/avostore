import Image from 'next/image';
import { AvocadoComponent } from './styled-component/AvocadoComponent';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@redux/store';
import { addToCard } from '@redux/slices/cartSlice';
import Link from 'next/link';
import { MouseEvent } from 'react';

interface Props {
    image: {
        src: string;
        alt: string;
    };
    name: string;
    price: number;
    id: string;
}

const Avocado = ({ image, name, price, id }: Props) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleAddCard = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(addToCard(id));
    };
    return (
        <Link style={{ textDecoration: 'none' }} href={`/avo/${id}`}>
            <AvocadoComponent>
                <Image
                    src={`${image.src}`}
                    alt={image.alt}
                    width={300}
                    height={300}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '24px',
                    }}
                />
                <div className="avocado__bottom">
                    <div className="avocado__bottom-text">
                        <p className="avocado__text-name">{name}</p>
                        <p className="avocado__text-price">{price}</p>
                    </div>
                    <button
                        className="avocado__bottom-add"
                        onClick={handleAddCard}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            width={20}
                            height={20}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                    </button>
                </div>
            </AvocadoComponent>
        </Link>
    );
};

export { Avocado };
