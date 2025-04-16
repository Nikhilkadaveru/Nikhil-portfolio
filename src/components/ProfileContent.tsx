import ContentRow from './ContentRow';
import { Users, Mail, Linkedin } from 'lucide-react';
import React, { useRef } from 'react';
import ModalOverlay from './ModalOverlay';

interface ProfileContentProps {
  profileId: string;
}

const getProfileContent = (profileId: string) => {
  const baseContent = {
    hero: {
      id: 'hero',
      title: 'AWS Cloud Engineer',
      image: 'https://cdn.nextgov.com/media/featured/presidio_frame-animation-2.gif',
      description: 'AWS Cloud & Python Expert | 7+ Yrs in Serverless, Automation, AI/NLP & Data Visualization (Lambda, Connect, Terraform, RDS, Power BI)',

    },
    featured: [
      {
        id: '1',
        title: 'AWS Cloud Support Engineer/ PayPal',
        image: 'https://miro.medium.com/v2/resize:fit:7112/1*la44VLTYT8SzZQea4T28OQ.jpeg',
        description: 'Developed custom contact flows and IVR logic on AWS.',
        bullets: [
            'Developed custom contact flows and IVR logic with dynamic Lambda integrations to enhance customer service efficiency',
            'Leveraged AI/ML services such as Amazon Lex, Comprehend, and Polly to implement chatbots, sentiment analysis, and speech analytics for smarter customer interactions.',
            'Utilized Python (Boto3) scripts for automating AWS resource monitoring and report generation.',
            'Implemented scalable storage with Amazon S3 and MySQL RDS, enabling cost-effective data retention and access.',
            'Employed SNS, SQS, and CloudWatch for reliable, event-driven processing and escalation.',
            'Applied Amazon Comprehend for NLP with Python to enhance chatbot feedback accuracy.',
            'Collaborated cross-functionally with product managers and UX teams to align technology solutions with business goals and improve user experience.'
          ],

      },
      {
        id: '2',
        title: 'Cloud Engineer/ DevBytes',
        image: 'https://images.unsplash.com/photo-1579888286284-692fa4bdc42b?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'Developed an AI-powered Customer Support Analytics Platform.',
        bullets: [
            'Built a Customer Support Analytics Platform analyzing 100,000+ tickets, using Python for sentiment analysis and data cleaning.',
            'Automated data pipelines using AWS Lambda and stored insights in MySQL for reporting.',
            'Created visualization dashboards with Power BI; utilized AWS S3 for report storage and backup.',
            'Deployed infrastructure using Terraform and CloudFormation to manage AWS environments consistently.',
            'Established real-time analytics dashboards for monitoring contact center KPIs, performance metrics, and user behavior.',
            'Ensured the operational integrity of production-grade AWS Connect solutions through robust monitoring, logging (e.g., CloudWatch, X-Ray), and automated alerting.',
            'Reduced response times and boosted satisfaction through Python-based AI analytics.'
            ],

      },
      {
        id: '3',
        title: 'Software Developer/ USAA',
        image: 'https://cdn.prgloo.com/media/18c7757829ad4020936506db54f8c138.png?width=1200&height=1800',
        description: 'Created a task management system using React.js, Node.js.',
        bullets: [
            'Created a task management system using React.js, Node.js, and MySQL, reducing manual tracking by 50%.',
            'Used Python scripts for automating email reminders and data exports.',
            'Leveraged AWS Lambda and API Gateway to create scalable serverless APIs.',
            'Built real-time productivity dashboards with AWS QuickSight, sourcing data from MySQL.',
            'Employed Terraform for AWS resource provisioning, ensuring secure and repeatable deployments.'

            ],

      },
      {
        id: '4',
        title: 'AWS Cloud Engineer/ KPMG',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnCg6O9JG01qGKujk4z9ZYEqtOHZZpEWZWA&s',
        description: 'Architected multi-region AWS Connect environments with auto-scaling.',
        bullets: [
            'Architected multi-region AWS Connect environments with auto-scaling Lambda backends and secure API Gateway integrations to support high-volume, low-latency customer interactions.',
            'Integrated AWS Connect with EventBridge to trigger downstream automation workflows and notify stakeholders of key events in the contact flow lifecycle.',
            'Created customized routing profiles, quick connects, and contact attributes for tailored agent-customer experiences and improved first-call resolution rates.',
            'Designed cloud analytics dashboards via QuickSight with backend data in MySQL RDS.',
            'Implemented Terraform modules to maintain consistent cloud environments.',
            'Conducted trend analysis on support data using Python and AWS-native tools.'

            ],

      },
      {
        id: '5',
        title: 'Graduate Assistant/ SUNY Poly',
        image: 'https://bloximages.chicago2.vip.townnews.com/romesentinel.com/content/tncms/assets/v3/editorial/9/27/9275b016-88ae-11ee-bac2-0fc65b5f4ec0/655d16812f3c3.image.jpg?resize=801%2C500',
        description: 'Designed and deployed serverless ETL workflows.',
        bullets: [
            'Designed and deployed serverless ETL workflows with AWS Glue, Lambda, and S3 using Python.',
            'Managed structured datasets using MySQL and DynamoDB for scalable academic data pipelines.',
            'Built QuickSight dashboards integrating MySQL sources for reporting faculty research performance.',
            'Automated deployments via AWS CloudFormation and Terraform, reducing operational overhead.',
            'Conducted cloud workshops covering AWS Lambda, Python SDKs (Boto3), and MySQL integration.'

            ],

      },

    ],
    recent: [
      {
        id: '4',
        title: 'DBA',
        image: 'https://iwugear.com/cdn/shop/products/original_25f1d296-2c4a-465f-a77d-283b027e285a.jpg?v=1540870603',
        description: 'Doctorate in Business Administration and IT. (Expected grad 2026), GPA-3.8',

      },
      {
        id: '5',
        title: 'Masters',
        image: 'https://iwugear.com/cdn/shop/products/original_25f1d296-2c4a-465f-a77d-283b027e285a.jpg?v=1540870603',
        description: 'Masters in Information Technology and Management. 2023, GPA-3.6',

      },
      {
        id: '6',
        title: 'Masters',
        image: 'https://bloximages.chicago2.vip.townnews.com/romesentinel.com/content/tncms/assets/v3/editorial/9/27/9275b016-88ae-11ee-bac2-0fc65b5f4ec0/655d16812f3c3.image.jpg?resize=801%2C500',
        description: 'Masters in Computers and Information Science. 2020, GPA-3.5',

      },
      {
        id: '7',
        title: 'Bachelors',
        image: 'https://i.pinimg.com/736x/da/4b/2d/da4b2db86016866deb7ad6a9b84ff176.jpg',
        description: 'BTech in Computer Science and Engineering. 2017, GPA-3.50',

      }
    ],
    hobbies: [
      {
        id: 'h1',
        title: 'Cricket',
        image: 'https://media.istockphoto.com/id/1459955387/photo/cricket-ball-hitting-wicket-stumps-knocking-bails-out.jpg?s=612x612&w=0&k=20&c=CafKqDiLIPCfO6sShpOQ0CUDnXNgX55d0ROyI08Cx1g=',
        description: 'Competitive cricket league player for Royal Risers, Dallas.',
      },
      {
        id: 'h2',
        title: 'Gaming',
        image: 'https://images8.alphacoders.com/121/1215785.jpg',
        description: 'One Tap Machine | Valorant Main',
      }
]
  };

  const profileSpecificContent = {
    recruiter: {
      recommended: [
        {
          id: '7',
          title: '5+ Years Experience',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
          description: 'Extensive experience in full-stack development and team leadership.',
          link: 'https://linkedin.com/in/yourusername'
        },
        {
          id: '8',
          title: 'Awards & Recognition',
          image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d',
          description: 'Recognized for outstanding contributions and innovations.',
          link: '#'
        },
        {
          id: '9',
          title: 'Speaking Engagements',
          image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
          description: 'Regular speaker at tech conferences and meetups.',
          link: '#'
        }
      ]
    },
    developer: {
      recommended: [
        {
          id: '10',
          title: 'Open Source',
          image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea',
          description: 'Active contributor to various open-source projects.',
          link: 'https://github.com/yourusername'
        },
        {
          id: '11',
          title: 'Technical Blog',
          image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713',
          description: 'Regular articles about web development and software engineering.',
          link: '#'
        },
        {
          id: '12',
          title: 'Code Samples',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
          description: 'Showcase of clean, maintainable, and efficient code.',
          link: '#'
        }
      ]
    },
    friends: {
      recommended: [
        {
          id: '13',
          title: 'Hobbies',
          image: 'https://images.unsplash.com/photo-1511649475669-e288648b2339',
          description: 'Beyond coding: Photography, gaming, and outdoor adventures.',
          link: '#'
        },
        {
          id: '14',
          title: 'Travel Blog',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
          description: 'Documenting adventures and experiences around the world.',
          link: '#'
        },
        {
          id: '15',
          title: 'Personal Projects',
          image: 'https://images.unsplash.com/photo-1552308995-2baac1ad5490',
          description: 'Creative projects and experiments outside of work.',
          link: '#'
        }
      ]
    }
  };

  return { ...baseContent, ...(profileSpecificContent as any)[profileId] };
};

const ProfileContent: React.FC<ProfileContentProps> = ({ profileId }) => {
  const content = getProfileContent(profileId);
  const featuredRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [showContact, setShowContact] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={content.hero.image}
            alt={content.hero.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="absolute bottom-32 left-0 p-8 md:p-16 w-full md:w-2/3 lg:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            {content.hero.description}
          </p>
          <div className="flex space-x-4 pt-4">
            <button
              onClick={scrollToFeatured}
              className="bg-[#E50914] hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              View Projects
            </button>

            <button
              onClick={() => setShowContact(true)}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      {showContact && (
        <div className="bg-black/80 border border-gray-700 rounded-xl max-w-[800px] mx-auto mt-8 p-6 text-white space-y-4 text-lg text-center">
          <h2 className="text-3xl font-bold text-[#E50914]">Get in Touch</h2>
          <p>Email: <a href="mailto:nikhi.kadaveru@gmail.com" className="text-blue-400 hover:underline">nikhi.kadaveru@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/nikhil-kadaveru-60b2a91b3/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/Nikhil</a></p>
          <p>Phone: +1 (513)-488-3228</p>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto pt-8">
        <div ref={featuredRef}>
          <ContentRow
            title="Featured Projects"
            items={content.featured}
            onCardClick={(project) => {
              console.log("Clicked Project:", project);
              setSelectedProject(project);
            }}
          />
        </div>
        <ContentRow title="Education Details" items={content.recent} />
        <ContentRow title="Hobbies" items={content.hobbies} />

      </div>
      {selectedProject && (
        <ModalOverlay
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProfileContent;