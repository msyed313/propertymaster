import { type FC } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight, Building2, Home as HomeIcon, Globe, Banknote, Users } from "lucide-react";

const Home: FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop')",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-bold text-2xl shadow-lg">
              ZM
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Zm Estates LTD
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <NavLink 
              to="/sales"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              PROPERTIES FOR SALE
            </NavLink>
            <NavLink 
              to="/lettings"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded-lg text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              PROPERTIES TO LET
            </NavLink>
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-lg md:text-xl text-gray-200">
            Your trusted partner in finding the perfect property
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronRight className="w-8 h-8 text-white transform rotate-90" />
          </div>
        </div>
      </section>

      {/* Featured Properties Section - Compact */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Featured Properties
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Property Card 1 */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=350&fit=crop" 
                  alt="4 Bedroom House"
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                  £2,800 pcm
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-xs">
                  TO LET
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white p-4">
                <h3 className="text-lg font-bold mb-1">A lovely 4 bedroom</h3>
                <p className="text-red-400 mb-2 text-sm flex items-center gap-1">
                  📍 Purfleet, RM19
                </p>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  A lovely 4 bedroom house with modern kitchen and bathrooms
                </p>
                <div className="flex justify-between text-xs pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 p-1 rounded">🛏️</span>
                    <span>4 Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-600 p-1 rounded">🛁</span>
                    <span>2 Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-700 p-1 rounded">🚗</span>
                    <span>2 Park</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=350&fit=crop" 
                  alt="2 Bedroom Flat"
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                  £285,000
                </div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xs">
                  FOR SALE
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white p-4">
                <h3 className="text-lg font-bold mb-1">2 bedroom Flat</h3>
                <p className="text-blue-400 mb-2 text-sm flex items-center gap-1">
                  📍 14 Roman Road, IG1
                </p>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  Great location with easy walking distance to Ilford station
                </p>
                <div className="flex justify-between text-xs pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 p-1 rounded">🛏️</span>
                    <span>2 Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-600 p-1 rounded">🛁</span>
                    <span>1 Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-700 p-1 rounded">🚗</span>
                    <span>1 Park</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=350&fit=crop" 
                  alt="3 Bedroom House"
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-lg font-bold text-sm shadow-lg">
                  £1,950 pcm
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-xs">
                  TO LET
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-gray-900 text-white p-4">
                <h3 className="text-lg font-bold mb-1">3 bedroom House</h3>
                <p className="text-green-400 mb-2 text-sm flex items-center gap-1">
                  📍 Dagenham, RM8
                </p>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  Semi-detached house with modern amenities and spacious garden
                </p>
                <div className="flex justify-between text-xs pt-3 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-600 p-1 rounded">🛏️</span>
                    <span>3 Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-600 p-1 rounded">🛁</span>
                    <span>1 Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-700 p-1 rounded">🚗</span>
                    <span>2 Park</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <NavLink 
              to="/buy"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-8 rounded-lg text-md transition-all duration-300 shadow-lg"
            >
              View All Properties
              <ChevronRight size={20} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Download App Section - Compact */}
      <section className="py-12 px-6 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Phone Image */}
            <div className="flex justify-center">
              <div className="relative w-32 h-64 bg-black rounded-2xl border-4 border-slate-700 shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=800&fit=crop" 
                  alt="Property Masterz App"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Download Property Masterz UK LTD APP
                <br />
                <span className="text-blue-400 text-lg">from the App Store / Google Play</span>
              </h2>

              {/* App Store */}
              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white">⭐</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Download on the</p>
                  <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300">
                    <span>🍎</span>
                    App Store
                  </a>
                </div>
              </div>

              {/* Google Play */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white">▶️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Get it on</p>
                  <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300">
                    <span>▶️</span>
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section - Clean Minimal */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Our Trusted Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with industry leaders to provide you with the best property solutions
            </p>
          </div>
          
          {/* Clean Partners Marquee */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {/* First Set */}
              <div className="mx-8 text-4xl font-bold text-blue-600 opacity-90">NATIONWIDE</div>
              <div className="mx-8 text-4xl font-bold text-green-600 opacity-90">HALIFAX</div>
              <div className="mx-8 text-4xl font-bold text-blue-700 opacity-90">BARCLAYS</div>
              <div className="mx-8 text-4xl font-bold text-red-600 opacity-90">SANTANDER</div>
              <div className="mx-8 text-4xl font-bold text-blue-800 opacity-90">LLOYDS BANK</div>
              <div className="mx-8 text-4xl font-bold text-red-700 opacity-90">HSBC</div>
              <div className="mx-8 text-4xl font-bold text-blue-500 opacity-90">RIGHTMOVE</div>
              <div className="mx-8 text-4xl font-bold text-purple-600 opacity-90">ZOOPLA</div>
              
              {/* Duplicate for seamless loop */}
              <div className="mx-8 text-4xl font-bold text-blue-600 opacity-90">NATIONWIDE</div>
              <div className="mx-8 text-4xl font-bold text-green-600 opacity-90">HALIFAX</div>
              <div className="mx-8 text-4xl font-bold text-blue-700 opacity-90">BARCLAYS</div>
              <div className="mx-8 text-4xl font-bold text-red-600 opacity-90">SANTANDER</div>
              <div className="mx-8 text-4xl font-bold text-blue-800 opacity-90">LLOYDS BANK</div>
              <div className="mx-8 text-4xl font-bold text-red-700 opacity-90">HSBC</div>
              <div className="mx-8 text-4xl font-bold text-blue-500 opacity-90">RIGHTMOVE</div>
              <div className="mx-8 text-4xl font-bold text-purple-600 opacity-90">ZOOPLA</div>
            </div>
          </div>
          
          {/* Simple Icon-Based Partners */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-12 h-12 text-blue-600" />, name: "Commercial Partners" },
              { icon: <HomeIcon className="w-12 h-12 text-green-600" />, name: "Property Developers" },
              { icon: <Banknote className="w-12 h-12 text-blue-700" />, name: "Financial Institutions" },
              { icon: <Globe className="w-12 h-12 text-purple-600" />, name: "Global Networks" },
            ].map((partner, index) => (
              <div key={index} className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300">
                <div className="mb-3">{partner.icon}</div>
                <p className="font-semibold text-gray-700 text-center">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Compact */}
      <section className="py-12 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Team",
                description: "Our experienced professionals guide you through every step of the process.",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-600 to-blue-700"
              },
              {
                title: "Wide Selection",
                description: "Browse hundreds of properties available for sale or rent in your desired location.",
                icon: <HomeIcon className="w-8 h-8" />,
                color: "from-green-600 to-green-700"
              },
              {
                title: "Best Prices",
                description: "Get competitive pricing and exclusive deals matching your budget and requirements.",
                icon: <Banknote className="w-8 h-8" />,
                color: "from-blue-600 to-green-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;