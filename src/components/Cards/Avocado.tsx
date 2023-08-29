import Image from 'next/image';
import { AvocadoComponent } from './styled-component/AvocadoComponent';

interface Props {
    image: {
        src: string;
        alt: string;
    };
    name: string;
    price: number;
}

const Avocado = ({ image, name, price }: Props) => {
    return (
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
                <button className="avocado__bottom-add">+</button>
            </div>
        </AvocadoComponent>
    );
};

export { Avocado };
