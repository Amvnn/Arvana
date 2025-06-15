import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Printer, BookOpen, Users, Network, AlertTriangle, 
  CheckCircle, Zap, Trophy, BarChart, Star,
  Calendar, MessageSquare, MapPin, Clock
} from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import BackgroundEffects from '../components/BackgroundEffects';

interface TargetUser {
  icon: React.ReactNode;
  label: string;
}

interface TechStack {
  name: string;
  color: string;
}

interface Feature {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface Challenge {
  title: string;
  solution: string;
}

interface Impact {
  icon: React.ReactNode;
  stat: string;
  label: string;
}

interface Review {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface ProductData {
  name: string;
  icon: React.ReactNode;
  description: string;
  problem: string;
  solution: string;
  targetUsers: TargetUser[];
  techStack: TechStack[];
  features: Feature[];
  challenges: Challenge[];
  impact: Impact[];
  reviews: Review[];
}

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const products: Record<string, ProductData> = {
    uniprints: {
      name: "UniPrints",
      icon: <Printer size={32} />,
      description: "Blinkit for campus prints—order/pay digitally, grab & go. No queues, no lost docs, no cash leaks",
      problem: [
        "Traditional printing systems are plagued with inefficiencies—long wait times, payment disputes, and disorganized workflows. Customers waste valuable time standing in line just to print documents, while shop owners struggle with missed payments, lost orders, and chaotic manual processes. The lack of a streamlined solution leads to frustration, lost revenue, and unnecessary stress for everyone involved."
      ].join("\n"),
      solution: "UniPrints revolutionizes printing by eliminating queues, confusion, and inefficiency. Customers simply upload documents, pay online, and receive real-time notifications when their order is ready—no waiting, no lost files, no payment hassles. Shop owners get a streamlined dashboard to manage orders digitally, reducing errors and missed payments. By digitizing the entire process, we remove the friction of traditional printing—making it fast, reliable, and convenient for everyone.",
      targetUsers: [
        { icon: <Users className="text-blue-400" size={24} />, label: "Students" },
        { icon: <Users className="text-purple-400" size={24} />, label: "Shopkeepers" },
        { icon: <Users className="text-green-400" size={24} />, label: "Staff" }
      ],
      techStack: [
        { name: "React", color: "bg-blue-500" },
        { name: "Node.js", color: "bg-yellow-500" },
        { name: "Express", color: "bg-red-600" },
        { name: "TypeScript", color: "bg-blue-600" },
        { name: "FireBase", color: "bg-orange-600" },
        { name: "Tailwind CSS", color: "bg-blue-900" },
        { name: "WebSockets", color: "bg-green-600" },
      ],
      features: [
        {
          icon: <Zap size={24} />,
          title: "Smart Queue Management",
          description: "AI-powered queue optimization that reduces wait times by 75%"
        },
        {
          icon: <BarChart size={24} />,
          title: "Real-time Status Tracking",
          description: "Live updates on print job status and estimated completion time"
        },
        {
          icon: <CheckCircle size={24} />,
          title: "Cross-platform Support",
          description: "Seamless experience across all devices and operating systems"
        }
      ],
      challenges: [
        {
          title: "Legacy Printer Integration",
          solution: "Developed custom middleware to connect with various printer APIs"
        },
        {
          title: "Peak Load Management",
          solution: "Implemented smart load balancing and queue optimization"
        }
      ],
      impact: [
        {
          icon: <Trophy size={24} />,
          stat: "75%",
          label: "Reduction in wait times"
        },
        {
          icon: <Users size={24} />,
          stat: "10,000+",
          label: "Active users"
        },
        {
          icon: <CheckCircle size={24} />,
          stat: "99.9%",
          label: "Uptime"
        }
      ],
      reviews: [
        {
          name: "Krishna",
          role: "Student",
          content: "This product saved me hours of waiting time at the library!",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/1.jpg"
        }
      ]
    },
  eduflow: {
    name: "EduFlow",
    icon: <BookOpen size={32} />,
    description: "Streamlined educational workflow platform that connects students, teachers, and resources in one place.",
    problem: "Educational institutions struggle with fragmented systems for assignments, resources, and communication, leading to inefficiencies and missed opportunities for engagement.",
    solution: "EduFlow integrates all aspects of the learning journey into a single, intuitive platform that adapts to different learning styles and institutional needs.",
    targetUsers: [
      { icon: <Users className="text-blue-400" size={24} />, label: "Students" },
      { icon: <Users className="text-purple-400" size={24} />, label: "Teachers" },
      { icon: <Users className="text-green-400" size={24} />, label: "Administrators" }
    ],
    techStack: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "PostgreSQL", color: "bg-blue-700" }
    ],
    features: [
      {
        icon: <BookOpen size={24} />,
        title: "Unified Learning Dashboard",
        description: "Centralized access to all courses, assignments, and resources"
      },
      {
        icon: <CheckCircle size={24} />,
        title: "Automated Grading",
        description: "Save time with automated assignment grading and feedback"
      },
      {
        icon: <Users size={24} />,
        title: "Collaboration Tools",
        description: "Seamless communication between students and teachers"
      }
    ],
    challenges: [
      {
        title: "System Integration",
        solution: "Developed a robust API layer to connect with existing educational systems"
      },
      {
        title: "Scalability",
        solution: "Implemented microservices architecture to handle thousands of concurrent users"
      }
    ],
    impact: [
      {
        icon: <Trophy size={24} />,
        stat: "40%",
        label: "Increase in student engagement"
      },
      {
        icon: <Users size={24} />,
        stat: "50+",
        label: "Educational institutions"
      },
      {
        icon: <CheckCircle size={24} />,
        stat: "95%",
        label: "User satisfaction"
      }
    ],
    reviews: [
      {
        name: "Dr. Sarah Johnson",
        role: "Professor",
        content: "EduFlow has transformed how we deliver course content and track student progress.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      }
    ]
  },
  campusconnect: {
    name: "CampusConnect",
    icon: <Network size={32} />,
    description: "Comprehensive campus community platform that bridges the gap between students, faculty, and campus resources.",
    problem: "University campuses often suffer from communication silos, making it difficult for students to discover events, resources, and opportunities.",
    solution: "CampusConnect creates a vibrant digital ecosystem where every member of the campus community can connect, share, and engage meaningfully.",
    targetUsers: [
      { icon: <Users className="text-blue-400" size={24} />, label: "Students" },
      { icon: <Users className="text-purple-400" size={24} />, label: "Faculty" },
      { icon: <Users className="text-green-400" size={24} />, label: "Staff" }
    ],
    techStack: [
      { name: "React Native", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "TypeScript", color: "bg-blue-600" },
      { name: "MongoDB", color: "bg-green-600" }
    ],
    features: [
      {
        icon: <Calendar size={24} />,
        title: "Event Discovery",
        description: "Find and RSVP to campus events in real-time"
      },
      {
        icon: <MessageSquare size={24} />,
        title: "Campus Feed",
        description: "Stay updated with the latest campus news and announcements"
      },
      {
        icon: <MapPin size={24} />,
        title: "Campus Map",
        description: "Interactive map with building locations and directions"
      }
    ],
    challenges: [
      {
        title: "Real-time Updates",
        solution: "Implemented WebSockets for instant notifications and updates"
      },
      {
        title: "Offline Access",
        solution: "Developed a robust offline-first architecture for mobile users"
      }
    ],
    impact: [
      {
        icon: <Trophy size={24} />,
        stat: "60%",
        label: "Increase in event attendance"
      },
      {
        icon: <Users size={24} />,
        stat: "25,000+",
        label: "Active users"
      },
      {
        icon: <Clock size={24} />,
        stat: "24/7",
        label: "Campus engagement"
      }
    ],
    reviews: [
      {
        name: "Michael Chen",
        role: "Student",
        content: "CampusConnect made my transition to university so much smoother! I found all my classes and made new friends through the platform.",
        rating: 5,
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    ]
  }
};
    // Add other products with the same structure

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-navy text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl">Product not found</p>
          <Link 
            to="/products" 
            className="mt-4 inline-block bg-skyblue text-navy px-6 py-2 rounded-lg font-medium hover:bg-skyblue/90 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-navy pt-32 pb-20 relative overflow-hidden">
        <ParticlesBackground />
        <BackgroundEffects variant="dark" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-20 h-20 bg-skyblue/10 rounded-2xl flex items-center justify-center text-skyblue"
              >
                {product.icon}
              </motion.div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              {product.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              {product.description}
            </motion.p>
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <BackgroundEffects variant="light" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-skyblue/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-400" size={24} />
                <h2 className="text-2xl font-bold text-white">The Problem</h2>
              </div>
              <p className="text-gray-300">{product.problem}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-green-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-green-400" size={24} />
                <h2 className="text-2xl font-bold text-white">Our Solution</h2>
              </div>
              <p className="text-gray-300">{product.solution}</p>
            </motion.div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Target Users</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {product.targetUsers.map((user, index: number) => (
                <motion.div
                  key={user.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center flex-1 min-w-[120px]"
                >
                  <div className="w-16 h-16 bg-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-3 text-skyblue">
                    {user.icon}
                  </div>
                  <span className="text-gray-300">{user.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {product.techStack.map((tech, index: number) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full ${tech.color} text-white font-medium text-sm`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {product.features.map((feature, index: number) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-skyblue/50 transition-colors"
              >
                <div className="w-12 h-12 bg-skyblue/10 rounded-lg flex items-center justify-center mb-4 text-skyblue">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Challenges & Solutions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {product.challenges.map((challenge, index: number) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{challenge.title}</h3>
                  <p className="text-gray-300 text-sm">{challenge.solution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.impact.map((stat, index: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:border-skyblue/50 transition-colors text-center"
                >
                  <div className="w-16 h-16 bg-skyblue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-skyblue">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-skyblue to-purple-400">
                    {stat.stat}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.reviews.map((review, index: number) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="text-white font-medium">{review.name}</h4>
                      <p className="text-gray-400 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{review.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;