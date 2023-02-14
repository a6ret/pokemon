import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <Navbar />

            <div className='flex flex-col justify-center gap-5 text-white py-[50px]'>
                <h1 className='text-xl font-bold'>What is Pokemon?</h1>
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odit, doloribus sequi nam beatae enim voluptatum, aut
                    cupiditate ipsam quae illo libero exercitationem fugit
                    adipisci blanditiis. Praesentium vel distinctio eos magnam?
                </p>
            </div>
        </div>
    );
};

export default Header;
