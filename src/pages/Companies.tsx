import { Link } from "react-router-dom";
import { Truck, Shield, Gem, ArrowRight, Building2, Users, Globe, Award, TrendingUp, Clock } from "lucide-react";
import logoDcm from "@/assets/logo-dcm.png";
import logoDcs from "@/assets/logo-dcs.png";
import logoDcp from "@/assets/logo-dcp-continental-projects.png";
import machineryImage from "@/assets/machinery_image_of_202604161655.jpeg";
import securityImage from "@/assets/ds-continental-security.jpeg";
import tradingImage from "@/assets/Geological_surveys,_mineral_202604161707.jpeg";

const companies = [
  {
    name: "DS Continental Motors",
    tagline: "Powering Industrial Growth",
    description: "Heavy equipment sourcing, industrial machinery supply, import services, maintenance support, and machinery inspection across Africa.",
    logo: logoDcm,
    image: machineryImage,
    path: "/companies/motors",
    color: "from-electric-blue to-blue-700",
    bgColor: "bg-electric-blue",
    icon: Truck,
    stats: [
      { label: "Equipment Types", value: "50+", icon: Truck },
      { label: "Projects", value: "150+", icon: Award },
      { label: "Countries", value: "6", icon: Globe }
    ]
  },
  {
    name: "DS Continental Security",
    tagline: "Protecting What Matters",
    description: "Corporate, industrial, and mining security services, VIP protection, CCTV solutions, and risk assessment across East and Central Africa.",
    logo: logoDcs,
    image: securityImage,
    path: "/companies/security",
    color: "from-industrial-red to-red-700",
    bgColor: "bg-industrial-red",
    icon: Shield,
    stats: [
      { label: "Personnel", value: "200+", icon: Users },
      { label: "Active Sites", value: "50+", icon: Building2 },
      { label: "Response", value: "<15min", icon: Clock }
    ]
  },
  {
    name: "DS Continental Trading",
    tagline: "Unearthing Africa's Wealth",
    description: "Geological surveys, mineral exploration, mining operations, mineral processing, laboratory testing, and mineral export.",
    logo: logoDcp,
    image: tradingImage,
    path: "/companies/trading",
    color: "from-steel-grey to-gray-700",
    bgColor: "bg-steel-grey",
    icon: Gem,
    stats: [
      { label: "Exploration Sites", value: "12+", icon: TrendingUp },
      { label: "Active Mines", value: "5+", icon: Gem },
      { label: "Partners", value: "20+", icon: Globe }
    ]
  }
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-electric-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -right-40 w-80 h-80 bg-industrial-red rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-steel-grey rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-fade-in-up">
            <Building2 className="w-4 h-4 text-electric-blue" />
            <span className="text-sm font-medium text-white">Our Family of Companies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            World-Class Subsidiaries
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Three specialized divisions delivering integrated industrial solutions across East and Central Africa
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {companies.map((company, idx) => (
              <Link
                key={company.name}
                to={company.path}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${company.color} opacity-60 group-hover:opacity-50 transition-opacity`} />
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 ${company.bgColor} rounded-full flex items-center justify-center shadow-lg`}>
                      <company.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={company.logo} alt={company.name} className="h-10 w-auto" />
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${company.bgColor}/10 text-${company.bgColor}`}>
                      {company.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-electric-blue transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {company.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 mb-4">
                    {company.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <stat.icon className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-gray-500">Learn More</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-electric-blue group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Bar */}
                <div className={`h-1 bg-gradient-to-r ${company.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose DS Continental?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Integrated solutions backed by years of experience and a commitment to excellence</p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pan-African Presence</h3>
              <p className="text-gray-600">Operating across East and Central Africa with a strong local network</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-industrial-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-industrial-red" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">Decades of combined experience in heavy equipment, security, and mining</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-steel-grey/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-steel-grey" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Solutions</h3>
              <p className="text-gray-600">Integrated services from sourcing to delivery and ongoing support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
