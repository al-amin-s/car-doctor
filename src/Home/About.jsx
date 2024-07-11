import about1 from '../../../../car-doctor-resources/assets/images/about_us/person.jpg'
import about2 from '../../../../car-doctor-resources/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="flex ">
            <div className="relative w-1/2 p-11">
                <div className='' ><img className='rounded-md w-4/5 h-96' src={about1} alt="" /></div>
                <div className='rounded-md  absolute shadow-lg w-80 h-80 -bottom-14 right-28 p-2 bg-white'>
                    <img className='rounded-sm w-full h-full' src={about2} alt="" /></div>
            </div>
            <div className="w-1/2 flex-col items-center py-11 pr-44 ">
            <div className=' flex-col '>
                <span >
                    <p className='text-[#FF3811] font-bold'>About Us</p>
                </span>
                <h1 className='text-4xl font-bold my-10'>We are qualified & of experience in this field</h1>
                <p className='text-[#afaeae] my-10'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='text-[#a3a1a1]'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

                <button className="btn bg-[#FF3811] mt-10">Get More Info</button>
            </div>
            </div>
        </div>
    );
};

export default About;