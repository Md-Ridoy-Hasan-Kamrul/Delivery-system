import { Link } from 'react-router-dom';
import {
  Truck,
  Clock,
  Shield,
  Users,
  TrendingUp,
  MapPin,
  Package,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Star,
} from 'lucide-react';

const HomeView = () => {
  const services = [
    {
      icon: Truck,
      title: 'Same-Day Delivery',
      description: 'Urgent deliveries completed within hours across North Wales',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Scheduled Deliveries',
      description: 'Choose AM or PM slots to fit your schedule perfectly',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Shield,
      title: 'Secure Handling',
      description: 'Professional care for fragile and valuable items',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Package,
      title: 'Weight-Based Pricing',
      description: 'Transparent pricing calculated by weight and distance',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: MapPin,
      title: 'Proof of Delivery',
      description: 'Digital signatures and photos for every completed delivery',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Tracking',
      description: 'Monitor your deliveries from pickup to completion',
      color: 'from-teal-500 to-blue-600',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Local Expertise, Nationwide Reach',
      description:
        'Rooted in Wrexham, we combine local knowledge with extensive delivery networks to serve clients across the UK.',
    },
    {
      title: 'Reliable & Timely',
      description:
        'Our commitment to punctuality and secure handling ensures your shipments reach their destination safely and on schedule.',
    },
    {
      title: 'Customer-Centric Approach',
      description:
        'We prioritize your business needs, offering flexible services and dedicated support.',
    },
    {
      title: 'Competitive Pricing',
      description:
        "Quality delivery doesn't have to come at a high cost — enjoy affordable rates with no compromise on service quality.",
    },
    {
      title: 'Environmental Responsibility',
      description:
        'We adopt eco-friendly practices to reduce our carbon footprint and promote sustainable logistics.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Deliveries Monthly', icon: Package },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'On-Time Delivery', icon: Clock },
    { number: '24/7', label: 'Customer Support', icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern & Clean */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyLTEyLTUuMzczLTEyLTEyIDUuMzczLTEyIDEyLTEyek0wIDI2YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzczIDEyLTEyIDEyVjI2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Trusted Courier Service in North Wales
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Professional Courier
              <span className="mt-2 block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                Delivery Solutions
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100 sm:text-xl md:text-2xl">
              Fast, reliable deliveries across North Wales and beyond. Same-day service available
              with real-time tracking.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/login"
                className="group inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-teal-600 shadow-xl transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-2xl sm:w-auto"
              >
                Request a Delivery
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute right-0 bottom-0 left-0">
          <svg className="w-full fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center transition-all hover:shadow-lg"
                >
                  <Icon className="mx-auto mb-3 h-8 w-8 text-teal-600 transition-transform group-hover:scale-110" />
                  <div className="text-3xl font-bold text-gray-900 sm:text-4xl">{stat.number}</div>
                  <div className="mt-1 text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Delivery Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive courier solutions tailored for businesses across North Wales
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div
                    className={`absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br ${service.color} opacity-10 transition-transform group-hover:scale-150`}
                  ></div>

                  <div className="relative">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Redesigned */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Choose M19 Logistics?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We're more than just a courier service — we're your reliable logistics partner.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-100">
                    <CheckCircle className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Local Expertise</h3>
                    <p className="mt-1 text-gray-600">
                      Based in Wrexham with deep knowledge of North Wales delivery routes
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Reliable & Timely</h3>
                    <p className="mt-1 text-gray-600">
                      99% on-time delivery rate with real-time tracking updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                    <CheckCircle className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Transparent Pricing</h3>
                    <p className="mt-1 text-gray-600">
                      Weight and distance-based pricing with no hidden fees
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                    <CheckCircle className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Proof of Delivery</h3>
                    <p className="mt-1 text-gray-600">
                      Digital signatures and photos for every completed delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-blue-600 p-8 text-white shadow-2xl sm:p-12">
                <Truck className="mb-6 h-16 w-16" />
                <h3 className="mb-4 text-2xl font-bold">Ready to Get Started?</h3>
                <p className="mb-6 text-blue-100">
                  Join dozens of businesses across North Wales who trust M19 Logistics for their
                  delivery needs.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-yellow-300" />
                    <span>Same-day delivery available</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-yellow-300" />
                    <span>Real-time tracking included</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5 text-yellow-300" />
                    <span>Dedicated customer support</span>
                  </li>
                </ul>
                <Link
                  to="/login"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-teal-600 transition-transform hover:scale-105"
                >
                  Request Your First Delivery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Get in Touch Today</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
              Contact our team for a quote or to discuss your delivery requirements
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:07971415430"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-teal-700 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>07971 415430</span>
              </a>
              <a
                href="tel:01978439739"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>01978 439739</span>
              </a>
              <a
                href="mailto:enquiries@m19logistics.com"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-gray-600 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
