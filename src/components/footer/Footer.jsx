
const Footer = () => {
  return (
    <footer className=" bg__bg text-black">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Information */}
          <div>
            <h2 className="text-xl font-bold mb-4">Information</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Shipping Information</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>123 Main Street</li>
              <li>City, State 12345</li>
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
