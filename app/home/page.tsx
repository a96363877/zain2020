"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Smartphone,
  Wifi,
  Globe,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Check,
  ChevronDown,
  ChevronUp,
  Cloud,
  Brain,
  Cpu,
  Satellite,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TelecommunicationsInfo() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId)
  }

  const telecomCompanies = [
    {
      name: "Zain Kuwait",
      description: "Leading provider of mobile communications and internet services",
      features: ["Advanced 5G network", "Digital payment services", "Comprehensive coverage", "IoT solutions"],
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      name: "Ooredoo Kuwait",
      description: "Integrated telecommunications solutions for individuals and businesses",
      features: ["Ultra-fast internet", "Business services", "Advanced technologies", "Cloud solutions"],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      name: "stc Kuwait",
      description: "Modern telecommunications network with innovative digital services",
      features: ["5G technology", "Cloud solutions", "Cybersecurity", "AI-powered services"],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      name: "VIVA Kuwait",
      description: "Dynamic telecommunications provider with cutting-edge solutions",
      features: ["Next-gen connectivity", "Smart city solutions", "Enterprise services", "Digital transformation"],
      icon: <Satellite className="h-6 w-6" />,
    },
  ]

  const services = [
    {
      id: "mobile",
      title: "Mobile Services",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Advanced networks supporting 5G technology with comprehensive coverage across Kuwait",
      details: [
        "5G coverage in major urban areas and expanding",
        "Flexible packages for all needs and budgets",
        "International roaming services",
        "Smart apps for account management",
        "eSIM technology support",
        "Edge computing capabilities",
      ],
    },
    {
      id: "internet",
      title: "Internet Services",
      icon: <Wifi className="h-6 w-6" />,
      description: "High-speed internet for homes and businesses with guaranteed stability and security",
      details: [
        "Speeds up to 10 Gbps for enterprise customers",
        "Advanced fiber optic network infrastructure",
        "24/7 customer service and technical support",
        "Customized solutions for businesses",
        "SD-WAN and network optimization",
        "Low-latency connections for gaming and streaming",
      ],
    },
    {
      id: "digital",
      title: "Digital Services",
      icon: <Globe className="h-6 w-6" />,
      description: "Comprehensive digital solutions including e-payments and cloud services",
      details: [
        "Secure digital wallets and payment platforms",
        "Electronic payment and fintech services",
        "Cloud storage and computing solutions",
        "Advanced information security",
        "Blockchain and cryptocurrency support",
        "Digital identity verification",
      ],
    },
    {
      id: "iot",
      title: "IoT & Smart Solutions",
      icon: <Cpu className="h-6 w-6" />,
      description: "Internet of Things solutions for smart cities and connected devices",
      details: [
        "Smart home automation systems",
        "Industrial IoT for manufacturing",
        "Smart city infrastructure solutions",
        "Connected vehicle technologies",
        "Environmental monitoring systems",
        "Asset tracking and management",
      ],
    },
    {
      id: "ai",
      title: "AI & Cloud Services",
      icon: <Brain className="h-6 w-6" />,
      description: "Artificial intelligence and cloud computing solutions for modern businesses",
      details: [
        "Machine learning and AI analytics",
        "Cloud-native application development",
        "Data center and colocation services",
        "Automated customer service solutions",
        "Predictive maintenance systems",
        "Edge AI processing capabilities",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Telecommunications in Kuwait</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Kuwait's advanced telecommunications landscape with cutting-edge technologies and innovative digital
            services
          </p>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="text-center border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Users className="h-6 w-6 text-gray-700 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">5.2M+</div>
              <div className="text-sm text-gray-600">Subscribers</div>
            </CardContent>
          </Card>

          <Card className="text-center border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <TrendingUp className="h-6 w-6 text-gray-700 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">5G Coverage</div>
            </CardContent>
          </Card>

          <Card className="text-center border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Zap className="h-6 w-6 text-gray-700 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">10GB/s</div>
              <div className="text-sm text-gray-600">Max Speed</div>
            </CardContent>
          </Card>

          <Card className="text-center border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Shield className="h-6 w-6 text-gray-700 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">99.95%</div>
              <div className="text-sm text-gray-600">Reliability</div>
            </CardContent>
          </Card>

          <Card className="text-center border shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Cloud className="h-6 w-6 text-gray-700 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Cloud Adoption</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Telecom Companies Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Leading Telecommunications Providers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {telecomCompanies.map((company, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="border-b bg-gray-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-full">{company.icon}</div>
                    <CardTitle className="text-lg font-medium">{company.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{company.description}</p>
                  <div className="space-y-2">
                    {company.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-gray-700 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Services & Solutions</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="cursor-pointer border-b bg-gray-50 p-6" onClick={() => toggleCard(service.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-full">{service.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-medium text-gray-900">{service.title}</CardTitle>
                        <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
                      </div>
                    </div>
                    {expandedCard === service.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {expandedCard === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="p-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-3 text-gray-900">Key Features:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Future Vision Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border shadow-md">
            <div className="bg-gray-900 text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/10 rounded-full">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Kuwait Vision 2035</h2>
                  <p className="text-white/80">Future of Telecommunications & Digital Transformation</p>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-6 text-gray-900">Strategic Objectives</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 bg-gray-50">
                        1
                      </Badge>
                      <div>
                        <h4 className="font-medium text-gray-900">Comprehensive Digital Transformation</h4>
                        <p className="text-sm text-gray-600">Digitization of all government and private services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 bg-gray-50">
                        2
                      </Badge>
                      <div>
                        <h4 className="font-medium text-gray-900">Smart Cities Initiative</h4>
                        <p className="text-sm text-gray-600">
                          Development of intelligent and sustainable infrastructure
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 bg-gray-50">
                        3
                      </Badge>
                      <div>
                        <h4 className="font-medium text-gray-900">Digital Economy Growth</h4>
                        <p className="text-sm text-gray-600">Promoting innovation and technological entrepreneurship</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 bg-gray-50">
                        4
                      </Badge>
                      <div>
                        <h4 className="font-medium text-gray-900">Cybersecurity Excellence</h4>
                        <p className="text-sm text-gray-600">Building robust national cybersecurity infrastructure</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-6 text-gray-900">Future Investments</h3>
                  <div className="space-y-4">
                    <Card className="border shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900">6G Networks</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Development of next-generation communication technologies
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900">Artificial Intelligence</h4>
                        <p className="text-sm text-gray-600 mt-1">Integration of AI across all service sectors</p>
                      </CardContent>
                    </Card>
                    <Card className="border shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900">Internet of Things</h4>
                        <p className="text-sm text-gray-600 mt-1">Connecting smart devices and services nationwide</p>
                      </CardContent>
                    </Card>
                    <Card className="border shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-gray-900">Quantum Computing</h4>
                        <p className="text-sm text-gray-600 mt-1">Research and development in quantum technologies</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border shadow-md bg-gray-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Join the Future of Telecommunications</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Discover the latest services and offers from Kuwait's leading telecommunications companies and enjoy an
                exceptional digital experience with cutting-edge technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gray-900 hover:bg-gray-800">Explore Services</Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Compare Plans
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
