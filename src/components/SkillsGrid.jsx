import React from "react";
import "aos/dist/aos.css";

const skillsData = [
  {
    category: "Full-Stack Development",
    skills: [
      { name: "C#", custom: "/tech/csharp.svg", level: 95 },
      { name: "React", icon: "react", level: 97 },
      { name: "Next.js", icon: "nextjs", level: 95 },
      { name: "TypeScript", icon: "typescript", level: 90 },
      { name: "Node.js", icon: "nodejs", level: 98 },
      { name: "ASP.NET Core", custom: "/tech/dotnet.svg", level: 95 },
      
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Kali Linux", icon: "linux", level: 99 },
      { name: "Burp Suite", custom: "/tech/burp.svg", level: 87 },
      { name: "Metasploit", custom: "/tech/metasploit.svg", level: 92 },
      { name: "Wireshark", custom: "/tech/wireshark.svg", level: 97 },
      { name: "Nmap", custom: "/tech/nmap.svg", level: 99 },
    ],
  },
  {
    category: "IT Support",
    skills: [
      { name: "Windows Server", icon: "windows8", level: 100 },
      { name: "Linux", icon: "linux", level: 99 },
      { name: "PowerShell", icon: "powershell", level: 94 },
      { name: "Office 365", custom: "/tech/office.svg", level: 100 },
      { name: "VMware", custom: "/tech/vmware.svg", level: 100 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: "docker", level: 85 },
      { name: "Kubernetes", icon: "kubernetes", level: 75 },
      { name: "GitHub Actions", icon: "github", level: 99 },
      { name: "Terraform", custom: "/tech/terraform.svg", level: 82 },
      { name: "Ansible", custom: "/tech/ansible.svg", level: 77 },
    ],
  },
  {
    category: "Design & CMS",
    skills: [
      { name: "Photoshop", custom: "/tech/photoshop.svg", level: 98 },
      { name: "Illustrator", custom: "/tech/illustrator.svg", level: 90 },
      { name: "WordPress", icon: "wordpress", level: 100 },
      { name: "OpenCart", custom: "/tech/opencart.svg", level: 100 },
      { name: "Magento", custom: "/tech/magento.svg", level: 85 },
    ],
  },
];

const SkillsGrid = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      {skillsData.map((category, index) => (
        <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
          <h3 className="text-lg font-semibold mb-4 text-center">{category.category}</h3>
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="w-12 h-12">
                  {skill.custom ? (
                    <img
                      src={skill.custom}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <i
                      className={`devicon-${skill.icon}-plain colored text-2xl`}
                    ></i>
                  )}
                </div>
                <div className="w-full">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-black h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;