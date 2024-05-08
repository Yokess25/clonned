import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] fixed top-0 backdrop-blur-sm">
      <div className="w-full h-[70px] flex flex-row items-start justify-between m-auto px[35px]">
        <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7x1 md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block"></div>
            </div>
          </div>
          <a href="#" className="">
            <Image
              src="/assets/images/capzient_logo_white.png"
              alt="Capzient Logo"
              width={250}
              height={250}
              className="cursor-pointer hover"
            />
            <div className="md:hidden">
              <button className="p-2 text-grey-700 rounded-md outline-none focus:border-grey"></button>
            </div>
          </a>

          {/* <div className="flex flex-row items-center justify-between"> */}
          <div className="flex items-center justify-between">
            <a href="#about" className="cursor-pointer text-white">
              About Us
            </a>
            <a href="#services" className="cursor-pointer flex-1 text-white">
              Services
            </a>
            <a
              href="#clientReviews"
              className="cursor-pointer  flex-1 text-white"
            >
              Client Reviews
            </a>
          </div>
        </nav>
      </div>
    </div>
    // </div>
  );
};
export default Navbar;
