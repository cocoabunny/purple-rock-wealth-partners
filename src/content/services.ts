
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  introduction: string;
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "growth-strategy",
    title: "Growth Strategy & Execution",
    shortTitle: "Growth Strategy",
    eyebrow: "Business Growth",
    description:
      "Strategic planning and implementation for financial advice businesses ready to build scale, strengthen performance and create long-term value.",
    introduction:
      "Growth requires more than ambition. For financial advice businesses, sustainable expansion depends on sound commercial decisions, effective operating structures and the ability to act on emerging opportunities. Purple Rock Wealth Partners works with business owners to evaluate their position, establish priorities and develop practical strategies for the next stage of growth.",
    challenges: [
      "Identifying opportunities for organic and inorganic growth",
      "Improving operational capacity while maintaining service quality",
      "Aligning ownership objectives with commercial priorities",
      "Evaluating expansion, acquisition and partnership opportunities",
      "Translating strategic plans into measurable actions"
    ],
    solutions: [
      {
        title: "Strategic Business Assessment",
        description:
          "Review the commercial position, operating model, business capabilities and growth opportunities of an existing financial advice practice."
      },
      {
        title: "Growth Planning",
        description:
          "Develop a structured growth direction that considers market positioning, service delivery, business economics and ownership priorities."
      },
      {
        title: "Opportunity Evaluation",
        description:
          "Assess potential acquisitions, partnerships and expansion opportunities against business objectives and practical constraints."
      },
      {
        title: "Execution Support",
        description:
          "Support the coordination of strategic initiatives, external specialists and commercial relationships as plans move toward implementation."
      }
    ],
    outcomes: [
      "Greater clarity around growth priorities",
      "A more structured approach to business expansion",
      "Better alignment between strategy and execution",
      "Stronger preparation for future opportunities"
    ],
    relatedServices: [
      "mergers-acquisitions",
      "strategic-partnerships",
      "technology-integration"
    ],
    seoTitle:
      "Financial Advice Business Growth Strategy | Purple Rock",
    seoDescription:
      "Business growth strategy and execution support for financial advice practices in Melbourne and across Australia."
  },
  {
    slug: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    shortTitle: "Mergers & Acquisitions",
    eyebrow: "Business Transactions",
    description:
      "Strategic support for financial advice business owners considering acquisitions, mergers, divestments and ownership transitions.",
    introduction:
      "A business transaction can reshape the future of a financial advice practice. Whether acquiring, merging or preparing to sell, successful outcomes require careful consideration of commercial value, cultural alignment, operational compatibility and transaction structure. Purple Rock helps business owners navigate these decisions and establish connections with relevant counterparties and advisers.",
    challenges: [
      "Identifying suitable acquisition or merger opportunities",
      "Understanding commercial value and transaction expectations",
      "Assessing compatibility between businesses",
      "Preparing a practice for a potential sale",
      "Coordinating the commercial stages of a transaction"
    ],
    solutions: [
      {
        title: "Acquisition Strategy",
        description:
          "Define acquisition objectives and evaluate opportunities in relation to business scale, strategic fit and commercial priorities."
      },
      {
        title: "Vendor Preparation",
        description:
          "Help owners identify business considerations that may influence buyer interest, transaction readiness and future value."
      },
      {
        title: "Strategic Introductions",
        description:
          "Facilitate relevant commercial connections between prospective buyers, sellers and specialist transaction advisers."
      },
      {
        title: "Transaction Coordination",
        description:
          "Assist with commercial discussions and coordination while legal, tax, regulatory and due diligence matters are handled by appropriately qualified professionals."
      }
    ],
    outcomes: [
      "Improved transaction preparedness",
      "Clearer acquisition or divestment objectives",
      "More informed commercial decision-making",
      "Access to relevant industry connections"
    ],
    relatedServices: [
      "business-valuation",
      "succession-planning",
      "funding-capital"
    ],
    seoTitle:
      "Financial Advice Mergers & Acquisitions | Purple Rock",
    seoDescription:
      "Strategic merger, acquisition and practice sale support for Australian financial advice business owners."
  },
  {
    slug: "succession-planning",
    title: "Succession Planning & Implementation",
    shortTitle: "Succession Planning",
    eyebrow: "Ownership Transition",
    description:
      "Planning and coordinating ownership transitions that protect business continuity and support long-term commercial objectives.",
    introduction:
      "A considered succession strategy provides business owners with greater choice about the future. Whether retirement, management succession, an internal buyout or an external sale is being considered, early preparation can help align the interests of owners, successors and stakeholders. Purple Rock supports the development of practical transition pathways for financial advice businesses.",
    challenges: [
      "Clarifying the owner's preferred exit or transition pathway",
      "Preparing successors and leadership structures",
      "Considering business continuity and client relationships",
      "Evaluating internal and external ownership options",
      "Coordinating implementation across stakeholders"
    ],
    solutions: [
      {
        title: "Succession Readiness Review",
        description:
          "Examine ownership objectives, business dependencies and the practical considerations associated with a future transition."
      },
      {
        title: "Transition Strategy",
        description:
          "Explore internal succession, staged ownership changes, merger opportunities and external sale pathways."
      },
      {
        title: "Stakeholder Alignment",
        description:
          "Help structure discussions between owners, successors and relevant professional advisers."
      },
      {
        title: "Implementation Coordination",
        description:
          "Support the staged execution of an agreed transition plan alongside the appropriate legal, financial and regulatory specialists."
      }
    ],
    outcomes: [
      "Greater clarity around future ownership",
      "Improved transition preparation",
      "Reduced dependence on last-minute succession decisions",
      "A structured pathway toward ownership change"
    ],
    relatedServices: [
      "business-valuation",
      "mergers-acquisitions",
      "strategic-partnerships"
    ],
    seoTitle:
      "Financial Advice Succession Planning | Purple Rock",
    seoDescription:
      "Succession and ownership transition strategy for financial advice businesses across Melbourne and Australia."
  },
  {
    slug: "funding-capital",
    title: "Funding & Capital Solutions",
    shortTitle: "Funding & Capital",
    eyebrow: "Capital Strategy",
    description:
      "Commercial funding strategy and connections to support business acquisition, expansion, restructuring and ownership transitions.",
    introduction:
      "Access to appropriate capital can influence when and how a financial advice business pursues new opportunities. Funding decisions should consider cash flow, ownership objectives, commercial structure and long-term obligations. Purple Rock helps businesses evaluate their funding requirements and explore relevant pathways with suitable capital providers and professional advisers.",
    challenges: [
      "Establishing funding requirements for acquisitions or expansion",
      "Comparing potential capital structures",
      "Preparing commercial information for funding discussions",
      "Understanding the implications of external investment",
      "Connecting with suitable funding participants"
    ],
    solutions: [
      {
        title: "Funding Needs Assessment",
        description:
          "Consider the amount, purpose and timing of capital required to support a proposed business initiative."
      },
      {
        title: "Capital Pathway Evaluation",
        description:
          "Explore relevant funding approaches and their potential implications for ownership, cash flow and future flexibility."
      },
      {
        title: "Funding Preparation",
        description:
          "Assist with organising business information and articulating the commercial rationale for a funding proposal."
      },
      {
        title: "Capital Introductions",
        description:
          "Facilitate connections with potentially relevant funding participants, subject to the applicable regulatory and professional requirements."
      }
    ],
    outcomes: [
      "Clearer understanding of capital requirements",
      "Better preparation for funding discussions",
      "Improved alignment between funding and business strategy",
      "Access to relevant specialist connections"
    ],
    relatedServices: [
      "growth-strategy",
      "mergers-acquisitions",
      "business-valuation"
    ],
    seoTitle:
      "Financial Advice Business Funding Strategy | Purple Rock",
    seoDescription:
      "Commercial capital and funding strategy support for Australian financial advice businesses pursuing growth and acquisitions."
  },
  {
    slug: "licensing-solutions",
    title: "Licensing & Structural Solutions",
    shortTitle: "Licensing Solutions",
    eyebrow: "Business Structure",
    description:
      "Strategic consideration of licensing arrangements, business structures and transitions within Australia's financial advice industry.",
    introduction:
      "A financial advice business's licensing and operating arrangements can materially influence its commercial flexibility, costs and growth potential. Whether evaluating an existing licensee relationship, considering self-licensing or planning a structural transition, informed decisions require a clear assessment of business objectives and regulatory obligations.",
    challenges: [
      "Assessing the suitability of existing licensee arrangements",
      "Evaluating the commercial implications of structural change",
      "Considering self-licensing or alternative licensee models",
      "Managing business disruption during a transition",
      "Identifying appropriate compliance and legal specialists"
    ],
    solutions: [
      {
        title: "Structural Review",
        description:
          "Review current business and licensing arrangements in the context of ownership, operating needs and strategic objectives."
      },
      {
        title: "Transition Planning",
        description:
          "Consider potential transition pathways, key dependencies and commercial implementation requirements."
      },
      {
        title: "Specialist Coordination",
        description:
          "Connect businesses with appropriately qualified licensing, legal and compliance professionals where required."
      },
      {
        title: "Commercial Implementation Support",
        description:
          "Assist with the non-regulated commercial aspects of an agreed structural or licensing transition."
      }
    ],
    outcomes: [
      "Clearer understanding of structural alternatives",
      "Better alignment between operating arrangements and strategy",
      "Improved transition planning",
      "Access to appropriate regulatory specialists"
    ],
    relatedServices: [
      "growth-strategy",
      "strategic-partnerships",
      "technology-integration"
    ],
    seoTitle:
      "Financial Advice Licensing & Business Structure | Purple Rock",
    seoDescription:
      "Strategic licensing and structural transition support for Australian financial advice businesses."
  },
  {
    slug: "strategic-partnerships",
    title: "Strategic Partnership Facilitation",
    shortTitle: "Strategic Partnerships",
    eyebrow: "Industry Connections",
    description:
      "Identifying and developing commercial relationships that complement business capabilities and create opportunities for collaboration.",
    introduction:
      "The right commercial relationship can open opportunities that are difficult to pursue independently. For financial advice businesses, partnerships may create pathways to additional expertise, new markets, operating efficiencies or future transactions. Purple Rock brings a relationship-led perspective to evaluating strategic fit and facilitating relevant industry introductions.",
    challenges: [
      "Identifying partners with complementary objectives",
      "Evaluating commercial and cultural alignment",
      "Defining realistic partnership expectations",
      "Building relationships with prospective collaborators",
      "Translating introductions into practical opportunities"
    ],
    solutions: [
      {
        title: "Partnership Strategy",
        description:
          "Identify the capabilities, resources and relationships needed to advance a business's commercial objectives."
      },
      {
        title: "Partner Identification",
        description:
          "Explore suitable commercial counterparties based on strategic fit and the nature of the proposed opportunity."
      },
      {
        title: "Relationship Facilitation",
        description:
          "Support relevant introductions and preliminary commercial conversations."
      },
      {
        title: "Collaboration Planning",
        description:
          "Assist with defining objectives, responsibilities and implementation considerations for potential partnerships."
      }
    ],
    outcomes: [
      "More purposeful commercial relationships",
      "Access to complementary business capabilities",
      "Greater visibility of collaboration opportunities",
      "A clearer framework for evaluating partnerships"
    ],
    relatedServices: [
      "growth-strategy",
      "mergers-acquisitions",
      "licensing-solutions"
    ],
    seoTitle:
      "Strategic Partnerships for Financial Advice | Purple Rock",
    seoDescription:
      "Strategic partnership facilitation and industry connections for financial advice businesses in Australia."
  },
  {
    slug: "business-valuation",
    title: "Business Valuation & Enhancement",
    shortTitle: "Business Valuation",
    eyebrow: "Enterprise Value",
    description:
      "Understanding the drivers of financial advice business value and identifying opportunities to strengthen commercial readiness.",
    introduction:
      "Business value is shaped by more than revenue alone. Profitability, client concentration, recurring income quality, operational efficiency, management capability and future growth prospects may all influence how a financial advice practice is assessed. Purple Rock helps owners consider these commercial drivers and prepare for discussions about valuation, succession and potential transactions.",
    challenges: [
      "Understanding the factors influencing business value",
      "Identifying operational or commercial weaknesses",
      "Preparing for sale or succession discussions",
      "Assessing value enhancement opportunities",
      "Engaging independent valuation and transaction specialists"
    ],
    solutions: [
      {
        title: "Value Driver Assessment",
        description:
          "Examine key commercial characteristics that may influence market interest and business valuation discussions."
      },
      {
        title: "Business Readiness Review",
        description:
          "Identify business dependencies, operating risks and information gaps that may affect transaction preparation."
      },
      {
        title: "Value Enhancement Planning",
        description:
          "Develop priorities aimed at strengthening business capability, sustainability and commercial attractiveness."
      },
      {
        title: "Specialist Valuation Coordination",
        description:
          "Facilitate engagement with appropriately qualified independent valuation professionals when a formal valuation is required."
      }
    ],
    outcomes: [
      "Better understanding of business value drivers",
      "More informed ownership decisions",
      "Improved preparation for external valuation",
      "Clearer priorities for commercial improvement"
    ],
    relatedServices: [
      "succession-planning",
      "mergers-acquisitions",
      "growth-strategy"
    ],
    seoTitle:
      "Financial Advice Business Valuation Strategy | Purple Rock",
    seoDescription:
      "Business value assessment and valuation preparation for financial advice practices in Melbourne and across Australia."
  },
  {
    slug: "technology-integration",
    title: "Strategic Technology Integration",
    shortTitle: "Technology Integration",
    eyebrow: "Operational Capability",
    description:
      "Aligning technology decisions with business growth, operating efficiency and the evolving needs of financial advice practices.",
    introduction:
      "Technology can enable a more scalable and resilient advice business, but new systems only create value when they support clear commercial and operational objectives. Purple Rock helps business owners consider technology requirements, integration priorities and implementation pathways within their broader business strategy.",
    challenges: [
      "Identifying technology limitations within current operations",
      "Aligning systems investment with business objectives",
      "Considering integration following acquisitions or mergers",
      "Improving data accessibility and operational consistency",
      "Coordinating technology vendors and implementation stakeholders"
    ],
    solutions: [
      {
        title: "Technology Strategy Review",
        description:
          "Consider existing capabilities and system limitations in relation to business objectives and operating requirements."
      },
      {
        title: "Integration Planning",
        description:
          "Develop priorities for connecting business systems, improving information flows and reducing operational duplication."
      },
      {
        title: "Vendor and Specialist Coordination",
        description:
          "Facilitate engagement with relevant technology providers and implementation professionals."
      },
      {
        title: "Change and Implementation Support",
        description:
          "Help align technology initiatives with business processes, stakeholder expectations and commercial outcomes."
      }
    ],
    outcomes: [
      "Clearer technology investment priorities",
      "Better alignment between systems and strategy",
      "Improved preparation for business integration",
      "More coordinated technology implementation"
    ],
    relatedServices: [
      "growth-strategy",
      "mergers-acquisitions",
      "licensing-solutions"
    ],
    seoTitle:
      "Financial Advice Technology Integration | Purple Rock",
    seoDescription:
      "Strategic technology planning and integration support for Australian financial advice businesses."
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
