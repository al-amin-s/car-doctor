import bannar1 from '../../../../car-doctor-resources/assets/images/banner/1.jpg'
import bannar2 from '../../../../car-doctor-resources/assets/images/banner/2.jpg'
import bannar3 from '../../../../car-doctor-resources/assets/images/banner/3.jpg'
import bannar4 from '../../../../car-doctor-resources/assets/images/banner/4.jpg'
// import bannar5 from '../../../../car-doctor-resources/assets/images/banner/5.jpg'
// import bannar6 from '../../../../car-doctor-resources/assets/images/banner/6.jpg'
const Bannar = () => {
    return (
        <div>
            <div className="carousel ">
                <div id="slide1" className="carousel-item relative w-full  ">
                    <img
                        src={bannar1}
                        className="w-full " />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#221c1c91] to-[#0e0a0a8a] left-0 top-0 w-full  h-full">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4'>
                                <button className="text-white w-36 btn bg-[#FF3811] border-none btn-warning">Discover More</button>
                                <button className="text-white w-36 btn btn-outline ">Latest Project</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-4 flex -translate-y-1/2 transform justify-end gap-7">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={bannar4}
                        className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#221c1c91] to-[#0e0a0a8a] left-0 top-0 w-full  h-full">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4'>
                                <button className="text-white w-36 btn bg-[#FF3811] border-none btn-warning">Discover More</button>
                                <button className="text-white w-36 btn btn-outline ">Latest Project</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-4 flex -translate-y-1/2 transform justify-end gap-7">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={bannar3} className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#221c1c91] to-[#0e0a0a8a] left-0 top-0 w-full  h-full">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4'>
                                <button className="text-white w-36 btn bg-[#FF3811] border-none btn-warning">Discover More</button>
                                <button className="text-white w-36 btn btn-outline ">Latest Project</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-4 flex -translate-y-1/2 transform justify-end gap-7">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={bannar2}
                        className="w-full" />
                    <div className="absolute flex items-center bg-gradient-to-r from-[#221c1c91] to-[#0e0a0a8a] left-0 top-0 w-full  h-full">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-white text-6xl font-bold'>Affordable Price For <br /> Car Servicing</h1>
                            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4'>
                                <button className="text-white w-36 btn bg-[#FF3811] border-none btn-warning">Discover More</button>
                                <button className="text-white w-36 btn btn-outline ">Latest Project</button>
                            </div>
                        </div>
                        <div className="absolute left-5 right-5 bottom-4 flex -translate-y-1/2 transform justify-end gap-7">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;