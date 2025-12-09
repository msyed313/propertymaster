import { type FC, useState, useEffect } from "react";
import { Search, Filter, MapPin, Bed, Bath, Car, ChevronDown, Check, Home, Building, Heart } from "lucide-react";

interface Property {
  id: number;
  title: string;
  price: string;
  type: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  image: string;
  description: string;
  category: 'residential' | 'commercial';
}

const Lettings: FC<{ category?: 'residential' | 'commercial' }> = ({ category = 'residential' }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    bathrooms: "",
    furnishing: "",
  });
  const [advancedFilters, setAdvancedFilters] = useState({
    garden: false,
    parking: false,
    petsAllowed: false,
    furnished: false,
    elevator: false,
    balcony: false,
  });
  const [properties, setProperties] = useState<Property[]>([
    // Residential Properties
    {
      id: 1, title: "Modern 2 Bed Apartment", price: "£1,200 pcm", type: "TO LET",
      location: "Ilford, IG1", bedrooms: 2, bathrooms: 1, parking: 1, area: 750,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=350&fit=crop",
      description: "Modern apartment with balcony", category: 'residential'
    },
    {
      id: 2, title: "Spacious 3 Bed House", price: "£1,800 pcm", type: "TO LET",
      location: "Barkingside, IG6", bedrooms: 3, bathrooms: 2, parking: 2, area: 1200,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&h=350&fit=crop",
      description: "Family home with garden", category: 'residential'
    },
    {
      id: 3, title: "Studio Apartment", price: "£850 pcm", type: "TO LET",
      location: "Stratford, E15", bedrooms: 1, bathrooms: 1, parking: 0, area: 450,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=350&fit=crop",
      description: "Modern studio for professionals", category: 'residential'
    },
    {
      id: 4, title: "Luxury 4 Bed House", price: "£2,500 pcm", type: "TO LET",
      location: "Chigwell, IG7", bedrooms: 4, bathrooms: 3, parking: 3, area: 1800,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=350&fit=crop",
      description: "Detached house with garden", category: 'residential'
    },
    // Commercial Properties
    {
      id: 5, title: "Office Space - 500 sq ft", price: "£1,500 pcm", type: "TO LET",
      location: "City Center, EC1", bedrooms: 0, bathrooms: 2, parking: 2, area: 500,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=350&fit=crop",
      description: "Modern office space with facilities", category: 'commercial'
    },
    {
      id: 6, title: "Retail Unit - High Street", price: "£2,200 pcm", type: "TO LET",
      location: "Oxford Street, W1", bedrooms: 0, bathrooms: 1, parking: 0, area: 800,
      image: "https://images.unsplash.com/photo-1600585154340-963ed7476c07?w=500&h=350&fit=crop",
      description: "Prime retail location", category: 'commercial'
    },
    {
      id: 7, title: "Warehouse Unit", price: "£3,500 pcm", type: "TO LET",
      location: "East London, E16", bedrooms: 0, bathrooms: 1, parking: 5, area: 3000,
      image: "https://images.unsplash.com/photo-1503387769-00a112127ca0?w=500&h=350&fit=crop",
      description: "Industrial warehouse with loading bay", category: 'commercial'
    },
    {
      id: 8, title: "Medical Practice", price: "£2,800 pcm", type: "TO LET",
      location: "Harrow, HA1", bedrooms: 0, bathrooms: 3, parking: 4, area: 1500,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&h=350&fit=crop",
      description: "Fully fitted medical practice", category: 'commercial'
    },
  ]);

  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>(category);

  useEffect(() => {
    filterProperties();
  }, [filters, advancedFilters, searchTerm, activeTab]);

  const filterProperties = () => {
    let result = properties.filter(property => property.category === activeTab);

    // Text search
    if (searchTerm) {
      result = result.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by location
    if (filters.location) {
      result = result.filter(property =>
        property.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType) {
      result = result.filter(property => {
        if (activeTab === 'residential') {
          return filters.propertyType === 'any' ||
            property.title.toLowerCase().includes(filters.propertyType.toLowerCase());
        } else {
          return filters.propertyType === 'any' ||
            property.title.toLowerCase().includes(filters.propertyType.toLowerCase());
        }
      });
    }

    // Filter by price
    if (filters.minPrice) {
      const min = parseInt(filters.minPrice.replace(/[^0-9]/g, ''));
      result = result.filter(property => {
        const price = parseInt(property.price.replace(/[^0-9]/g, ''));
        return price >= min;
      });
    }

    if (filters.maxPrice) {
      const max = parseInt(filters.maxPrice.replace(/[^0-9]/g, ''));
      result = result.filter(property => {
        const price = parseInt(property.price.replace(/[^0-9]/g, ''));
        return price <= max;
      });
    }

    // Filter by bedrooms (residential only)
    if (filters.bedrooms && activeTab === 'residential') {
      const bedrooms = parseInt(filters.bedrooms);
      if (!isNaN(bedrooms)) {
        result = result.filter(property => property.bedrooms >= bedrooms);
      }
    }

    // Filter by bathrooms
    if (filters.bathrooms) {
      const bathrooms = parseInt(filters.bathrooms);
      if (!isNaN(bathrooms)) {
        result = result.filter(property => property.bathrooms >= bathrooms);
      }
    }

    // Advanced filters
    if (advancedFilters.garden) {
      result = result.filter(property => property.description.toLowerCase().includes('garden'));
    }
    if (advancedFilters.parking) {
      result = result.filter(property => property.parking > 0);
    }
    if (advancedFilters.furnished) {
      result = result.filter(property => property.description.toLowerCase().includes('furnished') ||
        property.description.toLowerCase().includes('modern'));
    }

    setFilteredProperties(result);
  };

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleAdvancedFilterChange = (filter: keyof typeof advancedFilters) => {
    setAdvancedFilters(prev => ({ ...prev, [filter]: !prev[filter] }));
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: "",
      bathrooms: "",
      furnishing: "",
    });
    setAdvancedFilters({
      garden: false,
      parking: false,
      petsAllowed: false,
      furnished: false,
      elevator: false,
      balcony: false,
    });
    setSearchTerm("");
  };

  const propertyTypes = {
    residential: ["Any", "House", "Flat", "Apartment", "Studio", "Bungalow"],
    commercial: ["Any", "Office", "Retail", "Warehouse", "Medical", "Industrial"]
  };

  const priceRanges = ["Any", "£500", "£750", "£1,000", "£1,500", "£2,000", "£2,500", "£3,000", "£3,500", "£4,000+"];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="relative py-14 bg-gradient-to-r from-slate-900 to-gray-900 text-white">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&h=400&fit=crop')",
            height: '100%',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg shadow">
                  PM
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    RESIDENTIAL LETTINGS
                  </h1>
                  <p className="text-blue-200 text-sm md:text-base">
                    Your trusted partner in property lettings
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Badges */}
            <div className="flex flex-wrap gap-2">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 rounded-lg flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span className="font-bold text-sm">COMMERCIAL</span>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-3 py-2 rounded-lg flex items-center gap-2">
                <Heart className="w-4 h-4" />
                <span className="font-bold text-sm">CAN CARE</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-blue-400">500+</div>
              <div className="text-xs text-gray-300">Properties Listed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-green-400">98%</div>
              <div className="text-xs text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-blue-400">24/7</div>
              <div className="text-xs text-gray-300">Support Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-xl font-bold text-green-400">10+</div>
              <div className="text-xs text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-2">
            {activeTab === 'residential' ? <Home className="w-8 h-8" /> : <Building className="w-8 h-8" />}
            <h1 className="text-3xl font-bold">
              {activeTab === 'residential' ? 'RESIDENTIAL LETTINGS' : 'COMMERCIAL LETTINGS'}
            </h1>
          </div>
          <p className="text-blue-100">Find your perfect {activeTab === 'residential' ? 'home' : 'business space'}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('residential')}
            className={`px-6 py-3 font-semibold text-sm md:text-base ${activeTab === 'residential'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-600'}`}
          >
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Residential
            </div>
          </button>
          <button
            onClick={() => setActiveTab('commercial')}
            className={`px-6 py-3 font-semibold text-sm md:text-base ${activeTab === 'commercial'
              ? 'border-b-2 border-green-600 text-green-600'
              : 'text-gray-600 hover:text-green-600'}`}
          >
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5" />
              Commercial
            </div>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Compact Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Main Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={`Search ${activeTab === 'residential' ? 'homes' : 'properties'}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Location */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  placeholder="Enter location"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Property Type */}
            <div className="flex-1">
              <select
                value={filters.propertyType}
                onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Property Type</option>
                {propertyTypes[activeTab].map((type, idx) => (
                  <option key={idx} value={type.toLowerCase()}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Second Row - Compact Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div>
              <select
                value={filters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Min Price</option>
                {priceRanges.map((price, idx) => (
                  <option key={idx} value={price}>{price}</option>
                ))}
              </select>
            </div>

            <div>
              <select
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Max Price</option>
                {priceRanges.map((price, idx) => (
                  <option key={idx} value={price}>{price}</option>
                ))}
              </select>
            </div>

            {activeTab === 'residential' && (
              <div>
                <select
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Bedrooms</option>
                  <option value="1">1+ Bed</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                </select>
              </div>
            )}

            <div>
              <select
                value={filters.bathrooms}
                onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Bathrooms</option>
                <option value="1">1+ Bath</option>
                <option value="2">2+ Baths</option>
                <option value="3">3+ Baths</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
            >
              <Filter className="w-4 h-4" />
              {showAdvanced ? "Hide Advanced" : "Show Advanced"}
              <ChevronDown className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex gap-2">
              <button
                onClick={resetFilters}
                className="px-4 py-2 border border-1 border-gray-500 rounded-lg hover:bg-gray-500 hover:text-white text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Advanced Filters - Compact */}
          {showAdvanced && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Additional Features</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {activeTab === 'residential' ? (
                  <>
                    {['garden', 'parking', 'petsAllowed', 'furnished', 'elevator', 'balcony'].map((filter) => (
                      <label key={filter} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={advancedFilters[filter as keyof typeof advancedFilters]}
                          onChange={() => handleAdvancedFilterChange(filter as keyof typeof advancedFilters)}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 border rounded flex items-center justify-center ${advancedFilters[filter as keyof typeof advancedFilters]
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-gray-300'}`}
                        >
                          {advancedFilters[filter as keyof typeof advancedFilters] && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="capitalize">{filter.replace(/([A-Z])/g, ' $1')}</span>
                      </label>
                    ))}
                  </>
                ) : (
                  <>
                    {['parking', 'elevator', 'loadingBay', 'airConditioning', 'security', 'kitchen'].map((filter) => (
                      <label key={filter} className="flex items-center gap-2 text-sm cursor-pointer">
                        <input
                          type="checkbox"
                          checked={advancedFilters[filter as keyof typeof advancedFilters]}
                          onChange={() => handleAdvancedFilterChange(filter as keyof typeof advancedFilters)}
                          className="hidden"
                        />
                        <div className={`w-4 h-4 border rounded flex items-center justify-center ${advancedFilters[filter as keyof typeof advancedFilters]
                          ? 'bg-green-600 border-green-600'
                          : 'border-gray-300'}`}
                        >
                          {advancedFilters[filter as keyof typeof advancedFilters] && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="capitalize">{filter.replace(/([A-Z])/g, ' $1')}</span>
                      </label>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {filteredProperties.length} Properties Found
            </h2>
            <p className="text-gray-600 text-sm">
              {activeTab === 'residential' ? 'Residential lettings' : 'Commercial spaces'} in your area
            </p>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Sort by: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Properties Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded ${property.type === 'TO LET' ? 'bg-green-600' : 'bg-blue-600'} text-white`}>
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm font-bold">
                  {property.price}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">{property.title}</h3>
                <p className="text-blue-600 text-sm mb-2 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {property.location}
                </p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{property.description}</p>

                <div className="flex justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                  {property.category === 'residential' && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4 text-blue-600" />
                      <span>{property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-green-600" />
                    <span>{property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-4 h-4 text-blue-700" />
                    <span>{property.parking} park{property.parking !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="text-gray-700">
                    {property.area} sq ft
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No properties found</h3>
            <p className="text-gray-500">Try adjusting your search filters</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredProperties.length > 0 && (
          <div className="text-center mt-8">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium rounded-lg transition">
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lettings;