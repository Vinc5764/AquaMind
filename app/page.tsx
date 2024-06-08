// pages/index.tsx
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Index = () => {
  return (
    <div className="bg-blue-100 min-h-screen">
      <nav className="py-4 px-8 flex justify-between items-center bg-white">
        <div className="text-2xl font-bold">Smart Home Application</div>
        <div>
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white">
            Download
          </button>
        </div>
      </nav>

      <div className="flex flex-col items-center py-16">
        <h1 className="text-4xl font-bold mb-4">Smart Home Application</h1>
        <p className="text-gray-600 mb-8 text-center max-w-lg">
          Control your smart home devices with our intuitive application
        </p>
        <div className="flex space-x-4">
          <Image
            src="/phone-mockup.png"
            alt="Phone Mockup"
            width={200}
            height={400}
          />
          <Image
            src="/phone-mockup.png"
            alt="Phone Mockup"
            width={200}
            height={400}
          />
          <Image
            src="/phone-mockup.png"
            alt="Phone Mockup"
            width={200}
            height={400}
          />
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-600 mb-8">
            Smart Home &amp; Smart Services. Our app allows you to control smart
            devices, monitor energy usage, and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">What app can do?</h3>
              <p className="text-gray-600">
                Control your smart home devices, monitor energy usage, set
                schedules, and more.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                Control Electric Appliances
              </h3>
              <p className="text-gray-600">
                Remotely control your electric appliances like lights, air
                conditioners, and more.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Image
              src="/client-logo.png"
              alt="Client Logo"
              width={150}
              height={50}
            />
            <Image
              src="/client-logo.png"
              alt="Client Logo"
              width={150}
              height={50}
            />
            <Image
              src="/client-logo.png"
              alt="Client Logo"
              width={150}
              height={50}
            />
            <Image
              src="/client-logo.png"
              alt="Client Logo"
              width={150}
              height={50}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-100 p-8 rounded-lg">
              <p className="text-gray-600 mb-4">
                "This app has made controlling my smart home devices so easy and
                convenient."
              </p>
              <div className="flex items-center">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-600">Customer</p>
                </div>
              </div>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </div>

      <div className="bg-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-2">
                What devices are compatible with the app?
              </h4>
              <p className="text-gray-600">
                Our app is compatible with a wide range of smart home devices
                from various brands.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">
                Is the app free to use?
              </h4>
              <p className="text-gray-600">
                Yes, the app is free to download and use, but some advanced
                features may require a subscription.
              </p>
            </div>
            {/* Add more FAQs */}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-8">Download App</h2>
          <p className="text-gray-600 mb-8 text-center">
            Get the app now and start controlling your smart home devices with
            ease.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center bg-black text-white py-2 px-4 rounded-lg">
              <FaApple className="mr-2" />
              <span>Download on the App Store</span>
            </button>
            <button className="flex items-center bg-black text-white py-2 px-4 rounded-lg">
              <FaGooglePlay className="mr-2" />
              <span>Get it on Google Play</span>
            </button>
          </div>
        </div>
      </div>

      <footer className="bg-blue-500 py-8 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Smart Home Application. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
