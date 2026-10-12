import photo1 from './assets/photo_1_2026-10-12_08-44-12.jpg'
import photo2 from './assets/photo_2_2026-10-12_08-44-12.jpg'
import photo3 from './assets/photo_3_2026-10-12_08-44-12.jpg'
import photo4 from './assets/photo_4_2026-10-12_08-44-12.jpg'
import photo5 from './assets/photo_5_2026-10-12_08-44-12.jpg'
import photo6 from './assets/photo_6_2026-10-12_08-44-12.jpg'
import photo7 from './assets/photo_7_2026-10-12_08-44-12.jpg'
import photo8 from './assets/photo_8_2026-10-12_08-44-12.jpg'
import photo9 from './assets/photo_9_2026-10-12_08-44-12.jpg'
import photo10 from './assets/photo_10_2026-10-12_08-44-12.jpg'
import photo11 from './assets/photo_11_2026-10-12_08-44-12.jpg'
import photo12 from './assets/photo_12_2026-10-12_08-44-12.jpg'
import photo13 from './assets/photo_13_2026-10-12_08-44-12.jpg'
import photo14 from './assets/photo_14_2026-10-12_08-44-12.jpg'
import photo15 from './assets/photo_15_2026-10-12_08-44-12.jpg'

export const services = [
  {
    id: 'consultancy',
    title: 'Consultancy',
    desc: 'Professional advisory services that support business growth, strategic planning, and operational excellence.',
    icon: 'chart',
  },
  {
    id: 'freight',
    title: 'Freight Transport',
    desc: 'Reliable transport and logistics support for cargo movement with a strong focus on efficiency and coordination.',
    icon: 'code',
  },
  {
    id: 'agentship',
    title: 'Agentship',
    desc: 'Trusted representation and support services for clients, institutions, and business partners.',
    icon: 'bolt',
  },
]

export const processSteps = [
  { n: '01', title: 'Discovery', desc: 'Understanding your needs, challenges, and goals through in-depth consultation.' },
  { n: '02', title: 'Design', desc: 'Creating user-centric designs and system architecture for optimal solutions.' },
  { n: '03', title: 'Develop', desc: 'Building secure, scalable software using agile methodologies and best practices.' },
  { n: '04', title: 'Test', desc: 'Rigorous quality assurance to ensure reliability, security, and performance.' },
  { n: '05', title: 'Deploy', desc: 'Smooth implementation with comprehensive training and change management.' },
  { n: '06', title: 'Support', desc: '24/7 technical support to keep your systems running at peak performance.' },
  { n: '07', title: 'Iterate', desc: 'Continuous improvement based on feedback and evolving requirements.' },
  { n: '08', title: 'Scale', desc: 'Growing your solution with confidence as demand and capabilities expand.' },
]

export const feedbackProjectImages = [photo10, photo11, photo12, photo13, photo14, photo15]
export const transportationProjectImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9]

export const projects = [
  {
    id: 'seasonal-feedback',
    title: 'Final Report on Seasonal Mobile Workers Feedback Mechanism (SENNAY Project)',
    category: 'Consultancy',
    duration: 'Completed',
    desc: 'Lewegen Trading PLC completed and submitted the final report for the Seasonal Mobile Workers Feedback Mechanism under the consultancy agreement with HDAMA. The assignment focused on field-level coordination, documentation, analysis, and reporting to strengthen feedback systems for seasonal mobile workers.',
    detail:
      'The assignment focused on supporting an effective mechanism for gathering, documenting, and analyzing feedback from seasonal mobile workers. Through this engagement, Lewegen contributed to the systematic collection and organization of information that can help stakeholders better understand the experiences, concerns, and needs of seasonal mobile workers.',
    paragraphs: [
      'Lewegen Trading PLC has successfully completed and submitted the final report for the Seasonal Mobile Workers Feedback Mechanism undertaken under our consultancy agreement with the Health Development and Anti-Malaria Association (HDAMA).',
      'The assignment focused on supporting an effective mechanism for gathering, documenting, and analyzing feedback from seasonal mobile workers. This work required close coordination with relevant stakeholders, careful information management, and structured analysis to capture the realities and concerns of the target group.',
      'The final report brings together the relevant findings into a clear and practical document that can support decision-making and improve understanding of seasonal mobile workers’ experiences, challenges, and needs. The successful completion of this assignment demonstrates Lewegen’s capacity to manage consultancy work that requires field engagement, systematic documentation, and professional reporting.',
    ],
    stack: ['Consultancy', 'Field Coordination', 'Data Management', 'Reporting'],
    images: [photo15, ...feedbackProjectImages.filter((_, index) => index !== feedbackProjectImages.length - 1)],
    thumbnail: photo15,
  },
  {
    id: 'debre-brehan-oil',
    title: 'Debre Berhan University Edible Oil Tender',
    category: 'Institutional Supply',
    duration: 'Participation',
    desc: 'Lewegen Trading PLC participated in a competitive tender organized by Debre Berhan University for the supply of 60,000 liters of edible oil. The engagement reflects the company’s growing capacity in institutional supply, procurement, sourcing, and distribution.',
    stack: ['Procurement', 'Supply Chain', 'Distribution', 'Institutional Sales'],
    images: [],
  },
  {
    id: 'pharma-logistics',
    title: 'Pharmaceutical Supplies Delivery in Challenging Areas',
    category: 'Logistics',
    duration: 'Operational',
    desc: 'Through its last-mile delivery service, Lewegen successfully transported pharmaceutical products to Gondar, Bahir Dar, and Dessie routes. The work demonstrates dependable delivery capacity, route coordination, and commitment to essential health supplies.',
    detail:
      'The movement of pharmaceutical products requires careful handling, timely transportation, route coordination, and strong commitment to ensuring essential supplies reach their intended destinations. Despite difficult operating environments, the logistics team maintained continuity of service and supported the movement of health commodities.',
    paragraphs: [
      'Through its last-mile delivery service, Lewegen Trading PLC has successfully transported pharmaceutical products to Gondar, Bahir Dar, and Dessie routes.',
      'The movement of pharmaceutical goods requires careful handling, timely transportation, route coordination, and a strong commitment to ensuring that essential supplies reach their intended destinations. Despite difficult operating conditions, our logistics team worked to maintain continuity and support the delivery of health commodities.',
      'This experience demonstrates Lewegen Trading PLC’s ability to provide practical and dependable transportation solutions, including in demanding operating environments. It also reflects our broader commitment to supporting health-related supply chains and ensuring that essential products move efficiently from suppliers to final destinations.',
    ],
    stack: ['Last Mile Delivery', 'Pharmaceutical Logistics', 'Transport', 'Route Coordination'],
    images: [photo1, ...transportationProjectImages.filter((_, index) => index !== 0)],
    thumbnail: photo1,
  },
]

export const partners = [
  'Health Development and Anti-Malaria Association (HDAMA)',
  'Debre Berhan University',
  'Phi Bela Industrial PLC',
  'Universities and Higher Education Institutions',
  'Public Institutions',
  'Healthcare Supply Partners',
  'Logistics Service Partners',
  'Institutional Clients',
  'Regional Networks',
]

export const industries = [
  'Healthcare',
  'Consultancy',
  'Freight Transport',
  'Supply Chain',
  'Agentship',
  'Startups',
]

export const team = [
  { name: 'Endale Bekele', role: 'Role 1', focus: 'Focus 1' },
  { name: 'Beletech', role: 'Role 2', focus: 'Focus 2' },
  { name: 'Mulu Zerihun', role: 'Role 3', focus: 'Focus 3' },
  { name: 'Name 4', role: 'Role 4', focus: 'Focus 4' },
  { name: 'Name 5', role: 'Role 5', focus: 'Focus 5' },
  { name: 'Name 6', role: 'Role 6', focus: 'Focus 6' },
]

export const stats = [
  { value: '10+', label: 'Professionals with a decade of expertise' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '5+', label: 'Partners' },
  { value: '99%', label: 'Client Satisfaction' },
]

export const news = [
  {
    id: 'phi-bela-partnership',
    title: 'Lewegen Trading PLC Signs Distribution Agreement with Phi Bela Industrial PLC',
    category: 'Partnership',
    date: 'October 2026',
    readTime: '2 min read',
    excerpt:
      'Lewegen Trading PLC announced a contractual agreement with Phi Bela Industrial PLC to distribute edible oil to universities and higher education institutions across the Amhara Region and Addis Ababa.',
    body: [
      'Lewegen Trading PLC is pleased to announce the signing of a contractual agreement with Phi Bela Industrial PLC for the distribution of edible oil to universities and higher education institutions across the Amhara Region and Addis Ababa.',
      'Under the agreement, Lewegen will support the distribution and delivery of edible oil to institutional customers, strengthening its role in the supply and distribution sector. The partnership provides an opportunity to combine reliable sourcing, transportation, coordination, and institutional distribution to meet the requirements of universities and other public institutions.',
      'This agreement represents an important step in the expansion of Lewegen Trading PLC’s commercial activities and reflects its commitment to developing sustainable partnerships with established manufacturers and suppliers.',
    ],
  },
  {
    id: 'hdama-pharma-transport',
    title: 'Lewegen Trading PLC Signs Agreement with HDAMA for Pharmaceutical Transportation Across Ethiopia',
    category: 'Partnership',
    date: 'October 2026',
    readTime: '3 min read',
    excerpt:
      'The agreement with HDAMA strengthens Lewegen’s transportation and logistics business and supports the movement of essential health commodities across Ethiopia.',
    body: [
      'Lewegen Trading PLC has signed an agreement with the Health Development and Anti-Malaria Association (HDAMA) to provide transportation services for pharmaceutical products across Ethiopia.',
      'The agreement strengthens Lewegen’s growing transportation and logistics business, particularly in the movement of essential health commodities. Pharmaceutical transportation requires careful planning, reliable vehicles, timely delivery, proper coordination, and attention to the safe movement of products from their source to their intended destinations.',
      'Through this partnership, Lewegen Trading PLC will contribute its transportation and logistics capacity to support the movement of pharmaceutical supplies across different parts of the country. The agreement represents another important milestone in our development as a dependable transportation service provider and reinforces our commitment to supporting Ethiopia’s health supply chain.',
    ],
  },
  {
    id: 'seasonal-workers-report',
    title: 'Lewegen Trading PLC Submits Final Report on Seasonal Mobile Workers Feedback Mechanism (SENNAY Project)',
    category: 'Consultancy',
    date: 'October 2026',
    readTime: '3 min read',
    excerpt:
      'Lewegen completed and submitted the final report on the Seasonal Mobile Workers Feedback Mechanism, demonstrating its growing consultancy capacity in field coordination and analysis.',
    body: [
      'Lewegen Trading PLC has successfully completed and submitted the final report for the Seasonal Mobile Workers Feedback Mechanism undertaken under our consultancy agreement with the Health Development and Anti-Malaria Association (HDAMA).',
      'The assignment focused on supporting an effective mechanism for gathering, documenting, and analyzing feedback from seasonal mobile workers. Through this engagement, Lewegen contributed to the systematic collection and organization of information that can help stakeholders better understand the experiences, concerns, and needs of seasonal mobile workers.',
      'The successful completion and submission of the final report marks an important milestone in our consultancy services and demonstrates our capacity to manage assignments that require coordination, field-level engagement, information management, analysis, and professional reporting.',
    ],
  },
  {
    id: 'debre-brehan-tender',
    title: 'Lewegen Trading PLC Participates in Debre Berhan University Edible Oil Tender',
    category: 'Supply',
    date: 'October 2026',
    readTime: '2 min read',
    excerpt:
      'Lewegen participated in a competitive tender for 60,000 liters of edible oil, reflecting its commitment to institutional supply and distribution across Ethiopia.',
    body: [
      'Lewegen Trading PLC has participated in a competitive tender organized by Debre Berhan University for the supply of 60,000 liters of edible oil.',
      'The tender represents an important opportunity for Lewegen to demonstrate its growing capacity in institutional supply, sourcing, procurement, and distribution. Supplying products at this scale requires careful planning, reliable sourcing, quality consideration, transportation capacity, and effective coordination to ensure that the requirements of institutional clients are properly addressed.',
      'Our participation in this tender reflects Lewegen Trading PLC’s commitment to expanding its supply and distribution business and building sustainable relationships with universities, public institutions, private organizations, and other major customers.',
    ],
  },
  {
    id: 'last-mile-delivery',
    title: 'Lewegen Trading PLC Delivers Pharmaceutical Supplies in Challenging Areas',
    category: 'Logistics',
    date: 'October 2026',
    readTime: '2 min read',
    excerpt:
      'The company successfully transported pharmaceutical products to Gondar, Bahir Dar, and Dessie routes, demonstrating dependable handling and route coordination in difficult environments.',
    body: [
      'Through its Last Mile Delivery service, Lewegen Trading PLC has successfully transported pharmaceutical products to Gondar, Bahir Dar, and Dessie routes.',
      'The movement of pharmaceutical products requires careful handling, timely transportation, route coordination, and a strong commitment to ensuring that essential supplies reach their intended destinations. Despite difficult operating environments, our logistics team worked to maintain the continuity of delivery and support the movement of essential health commodities.',
      'This experience demonstrates Lewegen Trading PLC’s ability to provide practical and dependable transportation and last mile delivery solutions, including in demanding operating environments. Our involvement in pharmaceutical logistics reflects our broader commitment to supporting health-related supply chains and ensuring that essential products can move efficiently from suppliers to their final destinations.',
    ],
  },
  {
    id: 'health-supply-chain',
    title: 'Lewegen Trading PLC Strengthens Health-Related Supply Chains',
    category: 'Company',
    date: 'October 2026',
    readTime: '2 min read',
    excerpt:
      'The company continues to expand its practical logistics, consultancy, and supply capabilities to support Ethiopia’s health and institutional supply chains.',
    body: [
      'Lewegen Trading PLC is committed to strengthening the systems and relationships that support essential service delivery across Ethiopia.',
      'Our work in consultancy, logistics, supply, and distribution reflects a practical approach to building dependable operations that can serve institutions and communities with greater consistency and accountability.',
      'These recent achievements reinforce Lewegen’s role as a growing partner in the health, institutional, and logistics sectors, and they highlight the company’s dedication to delivering quality services and sustainable growth.',
    ],
  },
]
