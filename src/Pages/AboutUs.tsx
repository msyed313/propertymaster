
const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gray-900">
        {/* Background Image - Replace with your actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Zm Estates Ltd
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Your trusted property partner in East London for over 15 years
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Zm Estates?
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                At Zm Estates Ltd., we pride ourselves on being different from 
                typical estate agents. Our friendly, down-to-earth approach and 
                genuine commitment to our clients' success is what sets us apart 
                and keeps clients coming back year after year.
              </p>
              <p>
                As a totally independent agency, we offer flexible hours and fees 
                tailored to your specific needs. We're not bound by corporate 
                restrictions, which means we can provide truly personalized service.
              </p>
            </div>
          </div>
        </div>

        {/* Services - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* For Landlords */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">For Landlords</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We connect you with a wide range of professional and DHSS tenants 
              who have excellent budgets for quality properties.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Areas We Cover:</h4>
              <div className="flex flex-wrap gap-2">
                {['Redbridge', 'Newham', 'Barking & Dagenham', 'Havering', 'Epping Forest', 'Waltham Forest', 'Surrounding Areas'].map((area, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* For Tenants */}
          <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-600 text-white p-3 rounded-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">For Tenants</h3>
            </div>
            <p className="text-gray-700 mb-4">
              We offer a comprehensive selection of 1, 2, 3, and 4-bedroom properties 
              across all the areas mentioned above, catering to various budgets and needs.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Property Types:</h4>
              <div className="grid grid-cols-4 gap-3">
                {['1 Bed', '2 Bed', '3 Bed', '4 Bed'].map((type, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-emerald-100 text-emerald-800 rounded-lg p-3 font-bold text-lg">
                      {type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Approach to Property Management
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Service</h3>
              <p className="text-gray-700">
                We build personal relationships with every client, understanding your unique needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-700">
                With extensive knowledge of East London markets, we provide expert advice and insights.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Solutions</h3>
              <p className="text-gray-700">
                Our independent status allows us to create flexible arrangements that work for you.
              </p>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commitment to You
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Property Masterz, we believe that successful property management is about 
              more than just transactions—it's about building lasting relationships. 
              Whether you're a landlord looking to maximize your investment or a tenant 
              searching for the perfect home, we're committed to providing exceptional 
              service that exceeds your expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our track record of repeat clients is a testament to our dedication, 
              expertise, and the trust we've built within the East London community. 
              We look forward to helping you achieve your property goals.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AboutUs;