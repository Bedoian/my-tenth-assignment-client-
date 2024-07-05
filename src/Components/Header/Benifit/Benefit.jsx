import Img1 from '../../../assets/Img1.png'
import Img2 from '../../../assets/Img2.png'
import Img3 from '../../../assets/Img3.png'
import Img4 from '../../../assets/Img4.png'

const Benefit = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1'>
                <div className='relative bottom-1'>
                    <img className='relative left-20 w-32' src={Img1} alt="" />
                    <div>
                        <p className='text-xl font-semibold'>Discover the possibilities</p>
                        <p className='text-gray-500'>With nearly half a million attractions. <br />
                        hotels & more, you're sure to find joy</p>
                    </div>
                </div>
                <div className='relative top-1'>
                    <img className='relative left-20 w-36' src={Img2} alt="" />
                    <div>
                        <p className='text-xl font-semibold'>Enjoy Deals & delights</p>
                        <p className='text-gray-500'>Quality activities.Great price.Plus,earn <br />
                        credit to seve more</p>
                    </div>
                </div>
                <div >
                    <img  className='relative left-20 w-40' src={Img3} alt="" />
                    <div>
                        <p className='text-xl font-semibold'>ExPloring made easy</p>
                        <p className='text-gray-500'>Book last minute,skip lines & get free  <br />
                        cancellation for easier exploring</p>
                    </div>
                </div>
                <div >
                    <img  className='relative left-20 w-36' src={Img4} alt="" />
                    <div>
                        <p className='text-xl font-semibold'>Travel you can trust</p>
                        <p className='text-gray-500'>Read reviews & get reliable customer<br />
                        support.We're with you at every step</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;