import { Parallax } from 'react-parallax';
import stock from './stock_exchange_02.jpg'
import stock1 from './stock_exchange_01.jpg'
import lnd from './lnd_stock_exchange_03.jpg'
import cosmic from './cosmic_space_01.jpg'

const ImageOne = () => (
    <Parallax blur={10} className='image' bgImage={lnd} strength={800}>
        <div className='content'>
            <span className='img-txt'>lnd Stock Exchange Inside View</span>
        </div>
    </Parallax>
);

export default ImageOne;

/*

blur={10}
bgImageAlt="the cat"

*/