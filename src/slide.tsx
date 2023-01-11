import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './slide.sass'

const Example = () => {
    const images = [
        "https://img.freepik.com/free-psd/social-media-banner-summer-pool-party_220664-2483.jpg?w=740&t=st=1673099609~exp=1673100209~hmac=01e090266114b1a19b624af5276b3e32231ca1452f6068dec72e0619b6788df5",
        "https://img.freepik.com/free-psd/social-media-banner-summer-festival-with-best-deals_220664-2448.jpg?w=740&t=st=1673099637~exp=1673100237~hmac=a29ae0031216cd17beaed8af54e279a9015550f15ad25902e59da223ec51996d",
        "https://img.freepik.com/free-psd/social-media-banner-summer-with-everything-with-up-50-off-brazil_220664-2485.jpg?w=740&t=st=1673099682~exp=1673100282~hmac=7845098d068265d6cf7307fd2b9d464f17e9bc453800850adc1cc79bd866b95d",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default Example; 