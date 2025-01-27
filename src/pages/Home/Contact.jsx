const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-5 text-center">
        Contact Information
      </h1>
      <div>
        <p className="font-bold">
          Email: <span className="font-thin">healthcare@gmail.com</span>
        </p>
        <p className="font-bold">
          Contact: <span className="font-thin">+88010000000</span>
        </p>
      </div>
      <div className="flex items-center justify-center border rounded-lg my-5">
        <div className="bg-white p-5 rounded-2xl shadow-lg w-full">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#058789] focus:border-[#058789] sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#058789] focus:border-[#058789] sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#058789] focus:border-[#058789] sm:text-sm"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#058789] focus:border-[#058789] sm:text-sm"
                placeholder="Enter your address"
                rows="3"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-[#058789] rounded-lg shadow-md hover:bg-[#046c68] focus:ring-2 focus:ring-[#058789] focus:ring-opacity-75"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
