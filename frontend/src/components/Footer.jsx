const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 px-10 text-white">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <img
            className="w-32 px-2 py-1"
            src="/FILMZAP.svg"
            alt="FILMZAP Logo"
          />

          <p className="text-gray-400">
            © {new Date().getFullYear()} codeninja-404
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 className="text-xs uppercase tracking-wider mb-4">Menu —</h4>
          <div className="flex flex-wrap mb-4">
            <div className="w-1/2">
              <ul className="list-none p-0">
                <li className="py-1">
                  <a
                    href="#"
                    className="text-white font-bold uppercase hover:text-gray-300"
                  >
                    Item 1
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-white font-bold uppercase hover:text-gray-300"
                  >
                    Item 2
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="text-white font-bold uppercase hover:text-gray-300"
                  >
                    Item 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="list-none p-0">
                <li className="py-1">
                  <a href="#" className="text-gray-300 hover:text-gray-200">
                    About Us
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-gray-300 hover:text-gray-200">
                    Contacts
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-gray-300 hover:text-gray-200">
                    Terms & Condition
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="text-gray-300 hover:text-gray-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/6 mb-8 md:mb-0">
          <h4 className="text-xs uppercase tracking-wider mb-4">Follow Us</h4>
          <ul className="list-none p-0">
            <li className="py-1">
              <a href="#" className="text-white hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="text-white hover:text-gray-300">
                RSS
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-xs uppercase tracking-wider mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">
            Fillin' your mail with spam since, woah, a lot of time.
          </p>
          <div className="flex">
            <input
              type="text"
              className="form-input w-full py-2 px-4 rounded-l-md border-gray-700 bg-gray-800 text-white"
              placeholder="Search for..."
            />
            <button className="bg-gray-700 text-white py-2 px-4 rounded-r-md border border-gray-600">
              <span className="glyphicon glyphicon-envelope"></span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
