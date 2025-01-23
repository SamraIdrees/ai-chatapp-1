import React from "react";
import "./Universities.css"; // Import external CSS

const universities = [
  { 
    name: "National University of Sciences and Technology (NUST)", 
    link: "https://www.nust.edu.pk",
    description: "One of Pakistan's top engineering & IT universities."
  },
  { 
    name: "Lahore University of Management Sciences (LUMS)", 
    link: "https://www.lums.edu.pk",
    description: "A prestigious university with strong CS & AI programs."
  },
  { 
    name: "COMSATS Institute of Information Technology (Lahore Campus)", 
    link: "https://www.comsats.edu.pk",
    description: "Leading university for Computer Science & Software Engineering."
  },
  { 
    name: "FAST - National University", 
    link: "https://www.nu.edu.pk",
    description: "Known for its strong software development curriculum."
  },
  { 
    name: "University of Engineering and Technology (UET)", 
    link: "https://www.uet.edu.pk",
    description: "Specialized in engineering and computer science."
  },
  { 
    name: "Quaid-i-Azam University (QAU)", 
    link: "https://www.qau.edu.pk",
    description: "Offers quality IT programs in Pakistan's capital."
  },
  { 
    name: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Lahore Garrison University, DHA", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Bahria University", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Superior University, Lahore", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Beaconhouse National University", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of South-Asia, Lahore", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Government College University, Lahore", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "National University of Computer and Emerging Sciences", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Lahore College for Women University", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Punjab University College of Information Technology", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Institute of Business and Information Technology ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of the Punjab", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Central Punjab ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Education (Lahore Campus) ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  }, 
  { 
    name: "University of Sargodha,  ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Lahore", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Engineering and Technology, Lahore", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Management and Technology, Lahore", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Forman Christian College", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Namal College", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Bahauddin Zakariya University", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Education (Multan Campus)", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },

  { 
    name: "Air University", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Institute of Southern Punjab", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "NFC Institute of Engineering and Technology", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Army Public College of Management Sciences (APCOMS) ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "COMSATS Institute of Information Technology (Wah Cantonment Campus)  ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "National University of Sciences and Technology (Pakistan) (NUST)  ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "HITEC University, Taxila (HITEC) ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "Pir Mehr Ali Shah Arid Agriculture University", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Engineering and Technology, Taxila ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Wah ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "	MASIA Institute", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
   { 
    name: "Galaxy Institute of Technology and Languages •	COMSATS Institute of Information Technology ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "COMSATS Institute of Information Technology (Sahiwal Campus) ", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: "University of Sargodha", 
    link: "https://www.pieas.edu.pk",
    description: "One of the best universities for engineering & AI."
  },
  { 
    name: " Isra University  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE"
  },
  { 
    name: " SZABIST", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: " 	HIAST Affiliated with Mehran University of Engineering & Technology  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-IT, MS-BIT"
  },
  { 
    name: " Sindh Agriculture University ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-IT, MS-IT, MS-SE"
  },
  { 
    name: " University of Sindh  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE, BS-IT, M.Phil - CS, M.Phil - SE, M.Phil - IT"
  },
  { 
    name: " Mehran University of Engineering & Technology ", 
    link: "https://www.pieas.edu.pk",
    description: "BE-SE, BE-CS, ME-SE, ME-CIE, ME-IT"
  },
  { 
    name: " Aligarh Institute of Technology  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: " Bahria University", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-IT"
  },
  { 
    name: " DHA Suffa University  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Habib University", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: " Hamdard University   ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: " Indus University", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE, BS-IT"
  },
  { 
    name: " Institute of Business Administration, Karachi  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Karachi School of Business & Leadership(KSBL)", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-IT"
  },
  { 
    name: " Institute of Business & Technology (Biztek)   ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Institute of Business Management", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Iqra University ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Jinnah University for Women ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE, BS-IT"
  },
  { 
    name: " Karachi Institute of Economics and Technology  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Muhammad Ali Jinnah University (MAJU) ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	National University of Computer and Emerging Sciences (FAST)  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	NED University of Engineering and Technology  ", 
    link: "https://www.pieas.edu.pk",
    description: "BE-CISE, BS-CSIT, BE-SE"
  },
  { 
    name: "	Pakistan Navy Engineering College ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-IS"
  },
  { 
    name: "	Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology (SZABIST)  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: " Sindh Madrasatul Islam University (SMI)   ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Sir Syed University of Engineering and Technology (SSUET)  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-CE"
  },
  { 
    name: "	University of Karachi (KU), UBIT  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE"
  },
  { 
    name: " Usman Institute of Technology ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
  { 
    name: "	Sukkur Institute of Business Administration ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE"
  },
  { 
    name: "	Mirpur University of Science and Technology (MUST) ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-SE"
  },
  { 
    name: " University of Azad Jammu and Kashmir  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS, BS-SE"
  },
  { 
    name: "	University of Poonch  ", 
    link: "https://www.pieas.edu.pk",
    description: "BS-CS"
  },
];

const Universities = () => {
  return (
    <div className="universities-section">
      {/* Heading Section */}
      <header>
        <h2>Top Universities Offering IT Programs in Pakistan</h2>
        <p>Explore the best institutions for a career in IT!</p>
      </header>

      {/* Flip Cards Section */}
      <div className="university-container">
        {universities.map((uni, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <h3>{uni.name}</h3>
              </div>

              {/* Back Side */}
              <div className="flip-card-back">
                <p>{uni.description}</p>
                <a href={uni.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;