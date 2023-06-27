
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className=" bg__bg text-black">
      <div className="container mx-auto py-8 px-4 ">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        <div className="flex lg:flex-row md:flex-row flex-col gap-5 w-full  justify-between">
          {/* Information */}
          <div>
            <h2 className="text-xl font-bold mb-4 ">Information</h2>
            <ul className="space-y-2">
              <li><a href="/About" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Delivery Information</a></li>
              <li><a href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <div className="flex  items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                  <p className="text-base  ml-1 tracking-widest">Ashulia</p>
                </div> </li>
              <li>
                <div className="flex  items-center ">
                  <svg className="text-md " xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                  <p className="text-base  ml-1 tracking-widest">glaazex@gmail.com</p>
                </div> </li>
              <li>
                <div className="flex flex-row mr-3 gap-1 items-center">
                  <svg className="text-md" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                  <p className="text-base ml-1 tracking-widest">01904-598185</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="divider mb-0"></div>
      <div className="w-full">
      <p className="text-center py-5">
        Copyright &copy; Glaazex {year} all the right reserved | Designed
        by Md. Rakib Mia
      </p>
      </div>
    </footer>
  );
};

export default Footer;
