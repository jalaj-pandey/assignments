import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative mx-auto mt-5 flex justify-between px-[clamp(0.75rem,3.9630rem+-14.8148vw,0rem)] text-black sm:mt-8 md:max-w-[1440px] md:px-3 lg:px-[clamp(1.5rem,2vw,3rem)] xl:px-5">
  <div className="z-50">
    <a className="z-50 grid w-[93px] place-items-center sm:w-[110px] md:h-[clamp(3.125rem,-0.8750rem+8.3333vw,5.375rem)] md:w-[clamp(6.875rem,-1.1250rem+16.6667vw,11.375rem)] md:text-3xl" 
       href="/" aria-label="click here to go to the tranch home page">
      <svg viewBox="0 0 302 147" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M11.68 11.81v43.76a91.5 91.5 0 0 0 91.51 91.5h198.13V11.81H11.68Z" fill="#000"></path>
        <path d="M92.18 129.9H284V7.22H7v37.47a85.311 85.311 0 0 0 85.18 85.21Z" fill="#fff"></path>
        <path d="M.68.93v43.76a91.61 91.61 0 0 0 91.5 91.5h198.14V.93H.68ZM284 129.9H92.18A85.31 85.31 0 0 1 7 44.69V7.22h277V129.9Z" fill="#000"></path>
        <path d="M63.37 57.69v16.54c0 3.21 2 5.06 5.47 5.06a9.89 9.89 0 0 0 4.58-1.09v6.69a18.531 18.531 0 0 1-7.45 1.58c-7.31 0-11.62-4.11-11.62-11.08v-17.7h-4.92v-6.22h5.47V40h9v2.87c0 4.38-3.28 7.45-8.75 8.48v.13H74v6.22l-10.63-.01ZM102.3 51.88 99.71 60a10.2 10.2 0 0 0-4.79-1.23c-5.26 0-8.4 4.3-8.4 11.55v15.51h-9V51.47h9v14.15h.13c0-9.36 3.9-14.83 10.39-14.83a12.25 12.25 0 0 1 5.26 1.09ZM136.91 51.47v34.31h-9V74h-.14c0 7.86-4.57 12.51-12.23 12.51-8.61 0-13.67-6.63-13.67-17.84s5.06-17.84 13.67-17.84c7.66 0 12.23 4.65 12.23 12.44h.14v-11.8h9Zm-8.54 17.16c0-6.36-3.21-10.73-8.68-10.73s-8.68 4-8.68 10.73 3.21 10.66 8.68 10.66 8.68-4.37 8.68-10.66ZM174.3 64.87v20.91h-9v-20.5c0-4.65-2.46-7.38-6.7-7.38-4.79 0-7.59 3.48-7.59 9.29v18.59h-9V51.47h9v12h.14c0-8 4.17-12.71 11.14-12.71 7.57.03 12.01 5.24 12.01 14.11ZM178.32 68.63c0-11.21 6.63-17.84 17.7-17.84 9.36 0 15.45 4.92 16.81 13.4H204c-1.16-4-3.9-6.29-7.93-6.29-5.33 0-8.47 4-8.47 10.73s3.14 10.66 8.47 10.66c4.24 0 7-2.46 8.07-6.7H213c-1.3 8.82-7.38 13.88-17 13.88-11 0-17.68-6.63-17.68-17.84ZM249.38 64.87v20.91h-9v-20.5c0-4.65-2.46-7.38-6.7-7.38-4.78 0-7.59 3.48-7.59 9.29v18.59h-9V33.16h9V63.5h.14c0-8 4.17-12.71 11.14-12.71 7.57 0 12.01 5.21 12.01 14.08Z" fill="#000"></path>
      </svg>
    </a>
  </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="absolute top-0 right-3 z-50 sm:hidden"
        aria-label="Toggle menu"
      >
        <div className="relative flex h-[1.65rem] w-[2rem] flex-col justify-between">
          <div
            className={`m-0 h-[0.35rem] w-full bg-black transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : "rotate-0"
            }`}
          ></div>
          <div
            className={`m-0 h-[0.35rem] w-full bg-black transition-all ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`m-0 h-[0.35rem] w-full bg-black transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : "rotate-0"
            }`}
          ></div>
        </div>
      </button>

      {/* Navigation */}
      <nav
        className={`absolute top-[120%] z-50 flex  min-h-[100px] w-full origin-left items-start flex-col justify-between pt-4 font-headline text-xl font-bold  bg-white p-6 shadow-md transition-all  sm:static sm:flex sm:flex-row sm:bg-transparent sm:shadow-none ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <span className="flex h-full flex-col items-start pl-12 gap-2.5 sm:block sm:h-fit sm:gap-3 sm:space-x-3 md:space-x-6">
        <div className="inline-block pt-4  ">
          <div className="relative inline-block text-left">
            <div>
              <button className="flex items-center gap-1 font-headline font-bold capitalize decoration-tranch-purple-500 lg:gap-2 hover:underline hover:decoration-tranch-purple-500 hover:decoration-4 hover:underline-offset-4 hover:transition hover:delay-75">
                Products
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 stroke-2 lg:h-5">
                  
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="inline-block">
          <div className="relative inline-block text-left">
            <div>
              <button className="flex items-center gap-1 font-headline font-bold capitalize decoration-tranch-purple-500 lg:gap-2 hover:underline hover:decoration-tranch-purple-500 hover:decoration-4 hover:underline-offset-4 hover:transition hover:delay-75">
                Solutions
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 stroke-2 lg:h-5">
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="inline-block">
          <div className="relative inline-block text-left">
            <div>
              <button className="flex items-center gap-1 font-headline font-bold capitalize decoration-tranch-purple-500 lg:gap-2 hover:underline hover:decoration-tranch-purple-500 hover:decoration-4 hover:underline-offset-4 hover:transition hover:delay-75">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 stroke-2 lg:h-5">
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="inline-block">
          <div className="relative inline-block text-left">
            <div>
              <button className="flex items-center gap-1 font-headline font-bold capitalize decoration-tranch-purple-500 lg:gap-2 hover:underline hover:decoration-tranch-purple-500 hover:decoration-4 hover:underline-offset-4 hover:transition hover:delay-75">
                About Us
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-4 stroke-2 lg:h-5">
                </svg>
              </button>
            </div>
          </div>
        </div>
      </span>

      <span className="absolute flex flex-col w-[calc(100vw-10%)] gap-2 items-center lg:gap-5 border-t-3 border-tranch-grey-300 bg-white pt-4 sm:flex-row sm:flex-grow sm:justify-end sm:static sm:w-fit sm:border-t-0 sm:border-transparent   sm:pt-0 bottom-[-120%] hidden sm:flex">
        <a className="btn-tertiary btn-base inline-flex w-full sm:w-auto sm:hidden md:inline-block text-xl px-2 text-black shadow-tranch-blue-300 hover:border-black hover:bg-white hover:text-black sm:border-none sm:text-sm sm:leading-none sm:shadow-none lg:leading-6 md:text-[clamp(0.875rem,0.2083rem+1.3889vw,1.25rem)]" aria-label="click here to go to tranch contact sales page" href="/contact-sales/">Contact Sales</a>
        

        
        <a className="btn-tertiary btn-base inline-flex w-full sm:w-auto rounded-tr-2xl rounded-br-none text-xl  decoration-tranch-purple-500 sm:ml-4 md:ml-0 text-black shadow-tranch-lime-300 hover:border-black hover:bg-white hover:text-black sm:text-sm sm:leading-none lg:leading-6 md:text-[clamp(0.875rem,0.2083rem+1.3889vw,1.25rem)]" aria-label="click here to go to the tranch login page" href="/auth/login/">Login</a>
      </span>
        
      </nav>
    </header>
  );
};

export default Navbar;
