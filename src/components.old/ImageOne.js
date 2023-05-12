import { Parallax } from 'react-parallax';
import lnd from './lnd_stock_exchange_03.jpg'
import cosmic from './cosmic_space_01.jpg'
import stock from './stock_exchange_02.jpg'

const ImageOne = () => (
    <Parallax blur={10} className='image' bgImage={cosmic} strength={-500}>
        <div className='content'>
            <span className='img-txt'>Milky Way Space View</span>
        </div>
    </Parallax>
);

export default ImageOne;

/*

blur={10}
bgImageAlt="the cat"

*/

