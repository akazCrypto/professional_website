import { Parallax } from 'react-parallax';
import stock from './stock_exchange_02.jpg'
import stock1 from './stock_exchange_01.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={stock1} strength={800}>
        <div className='content'>
            <span className='img-txt'>NY stock exchange outside view</span>
        </div>
    </Parallax>
);

export default ImageOne;

/*

blur={10}
bgImageAlt="the cat"

*/