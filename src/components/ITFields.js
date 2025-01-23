import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ITFields.css"; // Import the CSS file

const itFields = [
  // Software Development & Engineering
  { title: "Frontend Web Development", category: "Development", description: "Develop the visual part of websites  that user interact with using HTML, CSS, JavaScript, and frameworks like React.js, Vue.js, or Angular.", icon: "🌐", link: "/frontend-development" },
  { title: "Backend Web Development", category: "Development", description: "Handle the server-side logic, databases, and APIs using  languages like Node.js, Python, PHP, or Java.", icon: "💻", link: "/backend-development" },
  { title: "Full-Stack Web Development", category: "Development", description: "Combine frontend and backend skills to build complete web applications from UI to database management.", icon: "⚙️", link: "/fullstack-development" },
  { title: "Android App Development", category: "Development", description: "Build mobile applications for Android devices using Java, Kotlin, or Flutter.", icon: "📱", link: "/android-development" },
  { title: "iOS App Development", category: "Development", description: "Develop iPhone and iPad applications using Swift or Objective-C with Xcode.", icon: "📲", link: "/ios-development" },
  { title: "Flutter App Development", category: "Development", description: "Create cross-platform apps(Android & iOS) with a single codebase using Flutter & Dart.", icon: "🔄", link: "/flutter-development" },
  { title: "React Native App Development", category: "Development", description: "Build native-like mobile apps for Android & iOS using React.js and JavaScript.", icon: "📟", link: "/react-native-development" },
  { title: "Unity Game Development", category: "Game Development", description: "Create 2D & 3D games for PC, Mobile and Consoles using C# and Unity Engine.", icon: "🎮", link: "/unity-development" },
  { title: "Unreal Engine Game Development", category: "Game Development", description: "Develop high-quality, realistic 3D games using C++ and Unreal Engine.", icon: "🕹️", link: "/unreal-development" },
  { title: "Desktop Application Development", category: "Development", description: "Build software for Windows, macOS, and Linux using Python, Java, or C#.", icon: "💾", link: "/desktop-development" },
  { title: "Embedded Systems Development", category: "Development", description: "Develop hardware-software integrated systems like IoT devices and smart appliances.", icon: "🔌", link: "/embedded-development" },
  { title: "DevOps Engineering", category: "Development", description: "Automate software development and deployment and several management using tools like Docker, Kubernetes, and CI/CD pipelines.", icon: "🚀", link: "/devops-engineering" },

  // Data & AI Fields
  { title: "Data Science", category: "Data", description: "Analyze large datasets to find patterns and insights for decision-making using Python, R, and SQL.", icon: "📊", link: "/data-science" },
  { title: "Machine Learning", category: "AI", description: "Train computers to learn and improve from data for automation and predictions in various industries.", icon: "🤖", link: "/machine-learning" },
  { title: "Artificial Intelligence", category: "AI", description: "Build smart systems like chatbots, virtual assistants, and image recognition models.", icon: "🧠", link: "/ai" },
  { title: "Business Intelligence", category: "Data", description: "Collect and analyze business data to improve efficiency and decision-making." },
  { title: "Big Data Engineering", category: "Data", description: "Manage and process massive amounts of data using Hadoop, Spark, and cloud technologies.", icon: "📡", link: "/big-data" },
  { title: "Data Analytics", category: "Data", description: "Protect digital systems from hacking, malware, and cyber threats using security tools and policies.", icon: "📋", link: "/data-analytics" },

  // Networking & Cybersecurity
  { title: "Network Administration", category: "Networking", description: "Manage and maintain computer networks, ensuring smooth data communication.", icon: "🔗", link: "/network-administration" },
  { title: "Cybersecurity", category: "Security", description: "Manage and maintain computer networks, ensuring smooth data communication.", icon: "🔐", link: "/cybersecurity" },
  { title: "Ethical Hacking", category: "Security", description: "Identify and fix security loopholes by testing systems just like hackers do, but legally.", icon: "🛡️", link: "/ethical-hacking" },
  { title: "Cloud Security", category: "Security", description: "Identify and fix security loopholes by testing systems just like hackers do, but legally.", icon: "☁️", link: "/cloud-security" },
  { title: "System Administration", category: "Networking", description: "Install, configure, and manage IT infrastructure like servers and databases", icon: "🖥️", link: "/system-administration." },
  { title: "IT Support & Helpdesk", category: "Support", description: "Provide technical support to users, troubleshoot hardware/software issues, and maintain IT systems.", icon: "📞", link: "/it-support" },

  // UI/UX & Design
  { title: "UI/UX Design", category: "Design", description: "Design user-friendly and visually appealing digital products like websites and mobile apps.", icon: "🎨", link: "/ui-ux-design" },
  { title: "Graphic Design", category: "Design", description: "Create visuals like logos, banners, posters, and social media content using Photoshop and Illustrator.", icon: "🖌️", link: "/graphic-design" },
  { title: "Motion Graphics", category: "Design", description: "Make animated videos, advertisements, and visual effects using After Effects and Blender.", icon: "🎥", link: "/motion-graphics" },
  { title: "Product Design", category: "Design", description: "Design and prototype physical and digital products to improve user experience.", icon: "📐", link: "/product-design" },
  { title: "3D Modeling", category: "Design", description: "Create 3D assets for games, movies, architecture, and virtual reality using software like Maya and Blender.", icon: "🔧", link: "/3d-modeling" },
  // IT Management & Consulting
  { title: "IT Project Management", category: "Management", description: "Plan and oversee IT projects to ensure they are completed on time and within budget.", icon: "📅", link: "/it-project-management" },
  { title: "IT Business Analysis", category: "Management", description: "Analyze business needs and suggest IT solutions for better performance.", icon: "📊", link: "/it-business-analysis" },
  { title: "IT Consultancy", category: "Consulting", description: "– Provide expert advice on technology solutions and improvements for businesses.", icon: "💼", link: "/it-consultancy" },
  { title: "Enterprise Resource Planning (ERP)", category: "Management", description: "Implement and manage business software for finance, HR, and operations.", icon: "⚙️", link: "/erp" },
  //Cloud Computing & DevOps
  { title: "Cloud Engineering", category: "Cloud", description: "Develop and maintain cloud-based solutions on platforms like AWS, Azure, and Google Cloud.", icon: "☁️", link: "/cloud-engineering" },
  { title: "Site Reliability Engineering (SRE)", category: "Cloud", description: "Ensure that online services run smoothly with minimal downtime.", icon: "🛠️", link: "/site-reliability-engineering" },
  { title: "DevOps Engineering", category: "Cloud", description: "Automate the development and deployment of software using CI/CD pipelines.", icon: "🚀", link: "/devops-engineering" },
  { title: "Virtualization", category: "Cloud", description: "Automate the development and deployment of software using CI/CD pipelines.", icon: "💾", link: "/virtualization" },

  // Digital Marketing & E-Commerce
  { title: "SEO (Search Engine Optimization)", category: "Marketing", description: "Implement and manage business software for finance, HR, and operations.", icon: "🔍", link: "/seo" },
  { title: "Social Media Marketing", category: "Marketing", description: "Promote businesses on platforms like Facebook, Instagram, and LinkedIn.", icon: "📱", link: "/social-media-marketing" },
  { title: "E-Commerce Development", category: "Marketing", description: "Promote businesses on platforms like Facebook, Instagram, and LinkedIn.", icon: "🛒", link: "/e-commerce-development" },
  { title: "Content Marketing", category: "Marketing", description: "Create blogs, videos, and infographics to engage and educate audiences.", icon: "📝", link: "/content-marketing" },
  { title: "Affiliate Marketing", category: "Marketing", description: "Earn commissions by promoting products and services online.", icon: "💸", link: "/affiliate-marketing" },
  // Blockchain & Web3
  { title: "Blockchain Development", category: "Blockchain", description: "Build decentralized applications (DApps) and smart contracts using Ethereum and Solidity.", icon: "⛓️", link: "/blockchain-development" },
  { title: "Smart Contracts", category: "Blockchain", description: "Develop self-executing contracts that automate transactions on blockchain networks.", icon: "📜", link: "/smart-contracts" },
  { title: "Cryptocurrency & NFTs", category: "Blockchain", description: "Work with digital currencies and tokenized assets in the Web3 space.", icon: "💰", link: "/cryptocurrency-nfts" },
  { title: "Decentralized Apps (DApps)", category: "Blockchain", description: "Create applications that run on blockchain without central control.", icon: "🔗", link: "/decentralized-apps" },

  // IT Education & Training
  { title: "Technical Training & IT Certifications", category: "Education", description: "Teach IT skills through bootcamps and certification programs like AWS, Cisco, and Google.", icon: "🎓", link: "/technical-training" },
  { title: "IT Lecturing & Research", category: "Education", description: "Educate students in universities and conduct research on emerging technologies.", icon: "📚", link: "/it-lecturing-research" },
  { title: "Freelancing & IT Entrepreneurship", category: "Education", description: "Work independently or start IT-based businesses for global clients.", icon: "💼", link: "/freelancing-entrepreneurship" },
];

const ITFields = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFields = itFields.filter((field) =>
    field.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="it-container">
      <h2 className="it-title">Explore IT Careers</h2>

      {/* Search Bar */}
      <div className="it-search-container">
        <input
          type="text"
          placeholder="Search IT Fields..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="it-search-input"
        />
      </div>

      {/* Cards Grid */}
      <div className="it-cards-grid">
        {filteredFields.map((field, index) => (
          <motion.div
            key={index}
            className="it-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="it-icon">{field.icon}</div>
            <h3 className="it-card-title">{field.title}</h3>
            <p className="it-card-description">{field.description}</p>
            
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredFields.length === 0 && (
        <p className="it-no-results">No matching IT fields found.</p>
      )}
    </div>
  );
};

export default ITFields;