import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Office Address',
      details: '123 Property Street, London, E1 6AN',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      color: 'bg-blue-600'
    },
    {
      title: 'Phone Number',
      details: '+44 20 7123 4567',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      color: 'bg-emerald-600'
    },
    {
      title: 'Email Address',
      details: 'info@propertymasterz.co.uk',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      color: 'bg-indigo-600'
    },
    {
      title: 'Opening Hours',
      details: 'Mon - Fri: 9am - 6pm\nSat: 10am - 4pm\nSun: Closed',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: 'bg-purple-600'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section - More Compact */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Contact Property Masterz
            </h1>
            <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm">
              Get in touch with our friendly team. We're here to help with all your property needs.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - More Compact */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4 text-sm">
                Whether you're a landlord looking to list your property or a tenant searching for your next home, 
                our team is ready to assist you.
              </p>
              <p className="text-gray-700 text-sm">
                You can reach us via phone, email, or by filling out the contact form.
              </p>
            </div>

            {/* Contact Cards - More Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className={`${item.color} text-white p-2 rounded-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-xs whitespace-pre-line">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                <span className="bg-blue-100 text-blue-800 p-1.5 rounded-lg mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                </span>
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {['Redbridge', 'Newham', 'Barking & Dagenham', 'Havering', 'Epping Forest', 'Waltham Forest', 'Surrounding Areas'].map((area, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - More Compact */}
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Send us a <span className="text-emerald-600">Message</span>
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="+44 20 7123 4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="property-listings">Property Listings</option>
                    <option value="property-management">Property Management</option>
                    <option value="tenant-inquiry">Tenant Inquiry</option>
                    <option value="landlord-services">Landlord Services</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-xs text-gray-700">
                  Subscribe to our newsletter for property updates
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-2.5 px-4 rounded-md shadow hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                Send Message
                <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Map Section with Real Map */}
        <div className="mt-12 bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Find Our <span className="text-blue-600">Office</span>
            </h2>
            <div className="h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.422839186515!2d-0.1277582842294409!3d51.50735097960578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sLondon!5e0!3m2!1sen!2suk!4v1647351562341!5m2!1sen!2suk"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Masterz UK Ltd Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-700 text-sm">
                <strong>Property Masterz UK Ltd</strong><br />
                123 Property Street, London, E1 6AN<br />
                Phone: +44 20 7123 4567 | Email: info@propertymasterz.co.uk
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section - More Compact */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                q: "What areas do you cover?",
                a: "We cover Redbridge, Newham, Barking & Dagenham, Havering, Epping Forest, Waltham Forest and surrounding areas."
              },
              {
                q: "How quickly do you respond?",
                a: "We aim to respond to all inquiries within 24 hours during business days."
              },
              {
                q: "Do you handle both sales and lettings?",
                a: "Yes, we specialize in both property sales and rentals across East London."
              },
              {
                q: "What are your office hours?",
                a: "Monday to Friday: 9am - 6pm, Saturday: 10am - 4pm, Sunday: Closed"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                  <span className="bg-purple-100 text-purple-800 p-1.5 rounded-lg mr-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-xs pl-10">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;