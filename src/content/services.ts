
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  introduction: string[];
  challenges: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  steps: {
    title: string;
    description: string;
  }[];
  outcomes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  // ==========================================================
  // 01 — BUSINESS VALUATION
  // ==========================================================
  {
    slug: "business-valuation",
    title: "Business Valuation & Enhancement",
    shortTitle: "Business Valuation",
    eyebrow: "Understand Enterprise Value",
    description:
      "Understand the commercial drivers of financial advice practice value and prepare for a sale, investment or succession decision.",
    introduction: [
      "The value of a financial advice practice is shaped by much more than a revenue multiple. Earnings quality, client relationships, operational resilience, leadership depth and the sustainability of future cash flows can all affect a buyer's assessment.",
      "Purple Rock Wealth Partners works with practice owners to identify the factors influencing commercial value, prioritise improvements and coordinate specialist input when an independent formal valuation is required. Whether a transaction is imminent or several years away, preparation creates more informed choices.",
    ],
    challenges: [
      "Understanding what a potential buyer or investor may value",
      "Distinguishing recurring income from earnings that may not be sustainable",
      "Managing reliance on founders or a small number of key advisers",
      "Preparing accurate financial, client and operational information",
      "Deciding which improvements to prioritise before a transaction",
    ],
    solutions: [
      {
        title: "Commercial Value-Driver Review",
        description:
          "Consider revenue composition, profitability, adviser capacity, client concentration, recurring income characteristics and other commercial indicators relevant to transaction readiness.",
      },
      {
        title: "Business Readiness Assessment",
        description:
          "Identify information gaps, operational dependencies and issues that could complicate buyer due diligence or ownership transition.",
      },
      {
        title: "Value Enhancement Priorities",
        description:
          "Develop a practical sequence of improvements in areas such as systems, reporting, governance, leadership continuity and operating efficiency.",
      },
      {
        title: "Independent Valuation Coordination",
        description:
          "Help engage suitable independent valuation, accounting, legal and transaction specialists where a formal opinion or transaction process requires them.",
      },
    ],
    steps: [
      {
        title: "Clarify the Purpose",
        description:
          "Define whether the assessment supports a sale, acquisition, equity investment, succession or longer-term planning.",
      },
      {
        title: "Review Key Drivers",
        description:
          "Examine the business characteristics and information most likely to influence its commercial attractiveness.",
      },
      {
        title: "Prioritise Action",
        description:
          "Agree practical opportunities to improve preparedness and involve qualified specialists as needed.",
      },
    ],
    outcomes: [
      "A clearer understanding of value drivers",
      "Greater readiness for valuation and due diligence",
      "A prioritised commercial improvement plan",
      "More informed ownership and transaction discussions",
    ],
    faqs: [
      {
        question:
          "Does Purple Rock provide an independent formal valuation?",
        answer:
          "The consultancy can support commercial preparation and facilitate engagement with qualified independent valuers. The need for a formal report and who issues it depend on the transaction and professional requirements.",
      },
      {
        question: "When should an owner start preparing?",
        answer:
          "Ideally before an imminent sale or transition. Early planning allows time to address operational dependencies, improve records and evaluate alternatives without transaction pressure.",
      },
      {
        question: "Is revenue the main determinant of practice value?",
        answer:
          "Revenue is relevant, but earnings quality, cost structure, client characteristics, adviser retention and future risks may materially influence buyer assessments.",
      },
    ],
    relatedServices: [
      "mergers-acquisitions",
      "succession-planning",
      "growth-strategy",
    ],
    seoTitle: "Financial Advice Business Valuation & Enhancement",
    seoDescription:
      "Commercial value-driver assessment, valuation preparation and business enhancement strategy for financial advice practice owners across Australia.",
  },

  // ==========================================================
  // 02 — FUNDING & CAPITAL
  // ==========================================================
  {
    slug: "funding-capital",
    title: "Funding & Capital Solutions",
    shortTitle: "Funding & Capital",
    eyebrow: "Capital for the Next Stage",
    description:
      "Explore capital pathways for acquisitions, succession, expansion and strategic ownership arrangements in financial advice.",
    introduction: [
      "Access to capital often determines whether a promising business opportunity can proceed. For independent financial advice and accounting practices, the right funding structure must fit the transaction, the owner's objectives and the long-term economics of the business.",
      "Drawing on Peter Purpura's experience across funds management, capital markets and financial advice, Purple Rock helps practice owners articulate their funding requirements, evaluate strategic options and connect with relevant institutional and specialist counterparties. Minority equity partnerships and succession funding may be among the structures explored, subject to suitability and relevant professional advice.",
    ],
    challenges: [
      "Funding an acquisition without overextending operating cash flow",
      "Balancing capital access with desired ownership and control",
      "Comparing potential debt, equity and partnership structures",
      "Preparing credible financial information for capital discussions",
      "Coordinating investors, funding providers and specialist advisers",
    ],
    solutions: [
      {
        title: "Capital Requirements & Strategy",
        description:
          "Define the purpose, timing and anticipated scale of funding, alongside ownership preferences and implementation constraints.",
      },
      {
        title: "Funding Pathway Evaluation",
        description:
          "Consider commercial implications of potential funding and partnership structures, including servicing requirements, dilution and governance considerations.",
      },
      {
        title: "Investment & Lender Introductions",
        description:
          "Facilitate potentially relevant introductions through industry and institutional relationships where appropriate and permitted.",
      },
      {
        title: "Transaction Preparation",
        description:
          "Help assemble the commercial narrative, financial information and specialist participants needed for informed funding discussions.",
      },
    ],
    steps: [
      {
        title: "Define the Need",
        description:
          "Establish what the capital will fund and what the owner wishes to retain or change.",
      },
      {
        title: "Evaluate Structures",
        description:
          "Compare potential commercial pathways and their implications with the relevant professional advisers.",
      },
      {
        title: "Connect & Coordinate",
        description:
          "Engage appropriate counterparties and support next-stage discussion and implementation.",
      },
    ],
    outcomes: [
      "A clearly articulated funding objective",
      "Greater awareness of structural trade-offs",
      "Better-prepared capital discussions",
      "Connections with relevant financial and transaction specialists",
    ],
    faqs: [
      {
        question: "Can a minority equity partnership help fund growth?",
        answer:
          "It can be one option for some businesses. The commercial terms, investor rights, ownership percentages and regulatory implications must be assessed for the particular circumstances.",
      },
      {
        question: "Will the owner retain operational control?",
        answer:
          "Control depends on the negotiated funding and governance documents. Retaining operational control may be an objective, but it cannot be assumed for every transaction.",
      },
      {
        question: "Does Purple Rock guarantee funding?",
        answer:
          "No. Funding availability, eligibility, terms and approvals are determined by the relevant capital provider and the circumstances of the transaction.",
      },
    ],
    relatedServices: [
      "mergers-acquisitions",
      "succession-planning",
      "strategic-partnerships",
    ],
    seoTitle: "Funding & Capital Solutions for Advice Businesses",
    seoDescription:
      "Explore acquisition funding, succession capital and strategic equity partnerships for Australian financial advice and accounting practices.",
  },

  // ==========================================================
  // 03 — GROWTH STRATEGY
  // ==========================================================
  {
    slug: "growth-strategy",
    title: "Growth Strategy & Execution",
    shortTitle: "Growth Strategy",
    eyebrow: "Build a Stronger Business",
    description:
      "Plan sustainable growth through disciplined commercial strategy, stronger operating capability and targeted opportunities.",
    introduction: [
      "Growth is not simply an increase in client numbers or revenue. For an advice business, it must be supported by a service model, leadership capacity and economics capable of sustaining the next stage of development.",
      "Purple Rock helps practice owners examine their strategic position, distinguish attractive opportunities from distractions and align growth priorities with available resources. The focus may be organic expansion, a complementary acquisition, a new partnership or improvements to an existing operating model.",
    ],
    challenges: [
      "Choosing between organic growth and acquisition-led expansion",
      "Protecting advice quality as client and adviser numbers increase",
      "Understanding the cost and capacity implications of scaling",
      "Prioritising growth opportunities against ownership objectives",
      "Turning strategic intentions into coordinated action",
    ],
    solutions: [
      {
        title: "Strategic Position Review",
        description:
          "Assess current strengths, commercial constraints, market position and opportunities with reference to the owner's ambitions.",
      },
      {
        title: "Growth Options & Prioritisation",
        description:
          "Evaluate potential avenues such as improved operating performance, partnerships, recruitment, geographic expansion and acquisitions.",
      },
      {
        title: "Acquisition & Capital Alignment",
        description:
          "Consider how a proposed growth plan intersects with funding, integration and long-term ownership considerations.",
      },
      {
        title: "Execution Coordination",
        description:
          "Translate agreed priorities into practical workstreams and connect with external specialists where required.",
      },
    ],
    steps: [
      {
        title: "Establish the Ambition",
        description:
          "Define success in terms of business quality, enterprise value, revenue, client outcomes or ownership flexibility.",
      },
      {
        title: "Test the Pathways",
        description:
          "Evaluate financial, operational and people implications before committing resources.",
      },
      {
        title: "Plan Execution",
        description:
          "Set priorities, decisions and measurable review points for the chosen pathway.",
      },
    ],
    outcomes: [
      "A defined growth direction",
      "Better alignment between ambition and operating capability",
      "A prioritised action plan",
      "Greater preparedness for partnerships or acquisitions",
    ],
    faqs: [
      {
        question:
          "Is growth strategy only for businesses looking to acquire?",
        answer:
          "No. Growth may involve improving the existing practice, developing leadership, strengthening referral relationships or building capacity before pursuing acquisitions.",
      },
      {
        question:
          "How do we decide whether to acquire or grow organically?",
        answer:
          "That decision depends on commercial fit, funding, integration capability, valuation expectations and the owner's long-term objectives.",
      },
      {
        question: "Does the strategy include implementation?",
        answer:
          "Purple Rock can assist with commercial planning and coordination. The specific implementation scope and any specialist roles would be agreed for the engagement.",
      },
    ],
    relatedServices: [
      "mergers-acquisitions",
      "technology-integration",
      "strategic-partnerships",
    ],
    seoTitle: "Growth Strategy for Financial Advice Practices",
    seoDescription:
      "Practical financial advice business growth strategy, acquisition evaluation and execution support for practice owners in Melbourne and across Australia.",
  },

  // ==========================================================
  // 04 — LICENSING SOLUTIONS
  // ==========================================================
  {
    slug: "licensing-solutions",
    title: "Licensing & Structural Solutions",
    shortTitle: "Licensing Solutions",
    eyebrow: "Align Structure with Strategy",
    description:
      "Evaluate licensing relationships and business structures in the context of growth, independence and ownership objectives.",
    introduction: [
      "Licensing arrangements shape how an advice business operates, what it can deliver and the obligations and costs it must manage. A change in licensee, a potential move toward self-licensing or a broader ownership restructure can have significant commercial and regulatory consequences.",
      "Purple Rock supports the strategic and commercial assessment of possible pathways. Legal, AFSL, compliance and other regulated matters must be considered with appropriately qualified and authorised specialists; a commercial strategy does not replace those requirements.",
    ],
    challenges: [
      "Assessing whether the current licensee relationship supports future growth",
      "Understanding the operating requirements of alternative models",
      "Coordinating a potential licensee transition with minimal disruption",
      "Evaluating cost, governance and technology implications",
      "Ensuring specialist regulatory advice is part of the process",
    ],
    solutions: [
      {
        title: "Commercial Structure Review",
        description:
          "Examine current operating and licensing relationships against business objectives, costs, capacity and growth plans.",
      },
      {
        title: "Alternative Model Assessment",
        description:
          "Consider commercial differences between remaining with an existing licensee, transitioning to another arrangement or exploring self-licensing.",
      },
      {
        title: "Transition Planning",
        description:
          "Identify workstreams and dependencies affecting operations, technology, staff, client communications and timing.",
      },
      {
        title: "Specialist Introductions & Coordination",
        description:
          "Help connect the business with appropriate licensing, legal, regulatory and compliance professionals to assess and execute any required steps.",
      },
    ],
    steps: [
      {
        title: "Clarify Objectives",
        description:
          "Understand the operational flexibility, cost, service and ownership goals driving the review.",
      },
      {
        title: "Compare Options",
        description:
          "Evaluate commercial implications with specialist input on licensing and compliance.",
      },
      {
        title: "Prepare Transition",
        description:
          "Coordinate a practical sequence of activities if a change is agreed and approved.",
      },
    ],
    outcomes: [
      "Greater clarity around licensing alternatives",
      "A commercial rationale for structural decisions",
      "Better awareness of transition dependencies",
      "Connections with appropriate licensed and compliance specialists",
    ],
    faqs: [
      {
        question: "Does Purple Rock issue or arrange an AFSL?",
        answer:
          "This page describes strategic and commercial support, not an offer to issue an AFSL or provide legal or regulatory approvals. Licensing matters require the relevant authorised specialists and regulatory processes.",
      },
      {
        question: "Is self-licensing suitable for every practice?",
        answer:
          "No. Its suitability depends on the business model, resources, governance capability, ongoing compliance obligations and specialist advice.",
      },
      {
        question:
          "Can we review our options without committing to a transition?",
        answer:
          "Yes. An options review can help clarify costs, dependencies and commercial considerations before an owner makes a decision.",
      },
    ],
    relatedServices: [
      "growth-strategy",
      "technology-integration",
      "strategic-partnerships",
    ],
    seoTitle: "Licensing & Structural Solutions for Advice Practices",
    seoDescription:
      "Commercial licensing options, licensee transition planning and structural strategy for Australian financial advice businesses.",
  },

  // ==========================================================
  // 05 — MERGERS & ACQUISITIONS
  // ==========================================================
  {
    slug: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    shortTitle: "Mergers & Acquisitions",
    eyebrow: "Navigate the Next Transaction",
    description:
      "Commercial strategy and industry connections for buyers, sellers and financial advice practices considering a merger.",
    introduction: [
      "Acquiring, merging or selling a financial advice business involves decisions that extend well beyond an agreed price. Client continuity, adviser retention, recurring earnings, culture, licensing arrangements and integration capabilities can all affect the outcome.",
      "Purple Rock works with practice owners to clarify transaction objectives, consider potential counterparties and coordinate the commercial work needed to evaluate an opportunity. Specialist legal, accounting, tax, valuation and regulatory advice remain essential to transaction execution.",
    ],
    challenges: [
      "Finding opportunities that fit the buyer's strategic objectives",
      "Preparing the business and its information for purchaser review",
      "Assessing earnings, valuation expectations and transaction structure",
      "Understanding staff, client and cultural integration risks",
      "Coordinating several professional and commercial parties",
    ],
    solutions: [
      {
        title: "Buy-Side Strategy",
        description:
          "Define acquisition criteria, target characteristics, business fit and readiness to integrate.",
      },
      {
        title: "Sell-Side Preparation",
        description:
          "Consider ownership objectives, timing, operating dependencies, commercial information and presentation to potential counterparties.",
      },
      {
        title: "Counterparty Connections",
        description:
          "Facilitate relevant introductions where strategic alignment and permissions allow.",
      },
      {
        title: "Commercial Transaction Support",
        description:
          "Assist with evaluation, discussion and coordination, with suitably qualified professionals handling legal documents, regulated advice and specialist due diligence.",
      },
    ],
    steps: [
      {
        title: "Set Transaction Objectives",
        description:
          "Determine preferred outcomes, timing, constraints and decision criteria.",
      },
      {
        title: "Assess Fit & Readiness",
        description:
          "Review strategic compatibility, information needs and material commercial risks.",
      },
      {
        title: "Coordinate Next Steps",
        description:
          "Engage counterparties and specialist advisers to progress an appropriately structured process.",
      },
    ],
    outcomes: [
      "Clear acquisition or exit criteria",
      "Better preparation for commercial discussions",
      "More structured counterparty evaluation",
      "Improved coordination across transaction workstreams",
    ],
    faqs: [
      {
        question: "Can Purple Rock help both buyers and sellers?",
        answer:
          "The consultancy can discuss buy-side and sell-side strategic support, subject to appropriate engagement scope, confidentiality and conflict-of-interest arrangements.",
      },
      {
        question: "What should be assessed beyond the price?",
        answer:
          "Common issues include client and staff continuity, earnings durability, cultural fit, licensing, technology, integration costs and negotiated terms.",
      },
      {
        question: "Who handles contracts and due diligence?",
        answer:
          "Qualified legal, accounting, tax, compliance and other specialist advisers should undertake their respective professional work.",
      },
    ],
    relatedServices: [
      "business-valuation",
      "funding-capital",
      "succession-planning",
    ],
    seoTitle: "Mergers & Acquisitions for Financial Advice Practices",
    seoDescription:
      "Strategic acquisition, merger and sale preparation for Australian financial advice businesses, including commercial evaluation and transaction coordination.",
  },

  // ==========================================================
  // 06 — STRATEGIC PARTNERSHIPS
  // ==========================================================
  {
    slug: "strategic-partnerships",
    title: "Strategic Partnership Facilitation",
    shortTitle: "Strategic Partnerships",
    eyebrow: "Rock Solid Connections",
    description:
      "Explore complementary industry, capital and commercial relationships designed around the business owner's strategic priorities.",
    introduction: [
      "The right partnership can create access to expertise, capital, distribution or capability without requiring every opportunity to be pursued alone. For financial advice and accounting practices, successful collaboration depends on compatible expectations, appropriate governance and a clear commercial purpose.",
      "Purple Rock combines practical advice-industry insight with institutional and specialist relationships to help identify potential strategic partners and structure productive early-stage discussions. Minority equity participation may be explored where it aligns with the owner's objectives and the relevant parties' requirements.",
    ],
    challenges: [
      "Identifying partners whose objectives and capabilities complement the practice",
      "Balancing access to resources with independence and control",
      "Evaluating commercial, cultural and governance alignment",
      "Turning introductions into well-defined opportunities",
      "Managing confidentiality, conflicts and stakeholder expectations",
    ],
    solutions: [
      {
        title: "Partnership Objectives",
        description:
          "Clarify the desired capabilities, capital, relationships or strategic outcomes before approaching potential counterparties.",
      },
      {
        title: "Strategic Partner Identification",
        description:
          "Explore candidates against commercial fit, reputation, capacity and shared objectives.",
      },
      {
        title: "Introductions & Early Conversations",
        description:
          "Facilitate relevant connections and help clarify the opportunity for both sides.",
      },
      {
        title: "Collaboration Planning",
        description:
          "Support discussion of commercial principles, responsibilities, governance, milestones and required professional advice.",
      },
    ],
    steps: [
      {
        title: "Define Strategic Fit",
        description:
          "Identify precisely what a partnership needs to achieve.",
      },
      {
        title: "Explore the Network",
        description:
          "Assess potentially relevant counterparties and the basis for a discussion.",
      },
      {
        title: "Develop the Opportunity",
        description:
          "Clarify expectations and progress through appropriate commercial and professional processes.",
      },
    ],
    outcomes: [
      "A clearer partnership proposition",
      "Access to relevant commercial conversations",
      "More structured partner comparison",
      "Better alignment of expectations before commitment",
    ],
    faqs: [
      {
        question: "Must a partnership involve selling equity?",
        answer:
          "No. Partnerships can take different commercial forms. Equity investment is only one possibility and should be evaluated against the owner's preferences and relevant requirements.",
      },
      {
        question: "Can an owner keep running their practice?",
        answer:
          "Operational arrangements depend on negotiated terms. Preserving independence or control can be an objective but must be confirmed in the final agreement.",
      },
      {
        question: "Are introductions guaranteed?",
        answer:
          "No. Any introduction depends on strategic relevance, availability, agreement of the parties and appropriate confidentiality and compliance considerations.",
      },
    ],
    relatedServices: [
      "funding-capital",
      "growth-strategy",
      "mergers-acquisitions",
    ],
    seoTitle: "Strategic Partnerships for Advice Businesses",
    seoDescription:
      "Commercial partner identification, institutional connections and strategic relationship facilitation for financial advice and accounting practice owners.",
  },

  // ==========================================================
  // 07 — SUCCESSION PLANNING
  // ==========================================================
  {
    slug: "succession-planning",
    title: "Succession Planning & Implementation",
    shortTitle: "Succession Planning",
    eyebrow: "Prepare for What Comes Next",
    description:
      "Develop a deliberate approach to ownership transition, leadership continuity and funding a practice succession.",
    introduction: [
      "For many financial advice business owners, succession is both a commercial and personal milestone. Timing, business valuation, client continuity and the interests of successors all matter. An early strategy provides more scope to choose how and when ownership changes.",
      "Purple Rock works with owners to examine internal and external pathways, including staged transitions, minority equity arrangements and succession funding opportunities. The objective is to build a commercially coherent transition plan that reflects the owner's goals while recognising the needs of the business and its stakeholders.",
    ],
    challenges: [
      "Translating an owner's exit ambitions into a realistic timetable",
      "Developing future leaders or assessing external successors",
      "Determining how an ownership change might be funded",
      "Protecting client relationships and operational continuity",
      "Addressing valuation, governance and regulatory dependencies",
    ],
    solutions: [
      {
        title: "Succession Readiness",
        description:
          "Review ownership priorities, founder dependencies, leadership capacity and the practical conditions for transition.",
      },
      {
        title: "Pathway Evaluation",
        description:
          "Compare internal buyouts, staged equity changes, merger possibilities and external sale alternatives.",
      },
      {
        title: "Capital & Ownership Options",
        description:
          "Explore potential funding and strategic equity structures consistent with commercial goals, subject to the relevant specialist advice.",
      },
      {
        title: "Transition Coordination",
        description:
          "Support planning across stakeholders, implementation workstreams and professional advisers.",
      },
    ],
    steps: [
      {
        title: "Understand the Owner's Goals",
        description:
          "Clarify timing, desired involvement, financial priorities and preferred successor profile.",
      },
      {
        title: "Evaluate Pathways",
        description:
          "Consider readiness, funding, ownership structure and continuity implications.",
      },
      {
        title: "Plan the Transition",
        description:
          "Set out practical milestones and engage necessary legal, tax, regulatory and transaction specialists.",
      },
    ],
    outcomes: [
      "Clearer transition objectives",
      "Better preparedness for ownership change",
      "A coordinated succession pathway",
      "Greater visibility of funding and stakeholder dependencies",
    ],
    faqs: [
      {
        question: "Is succession planning only relevant near retirement?",
        answer:
          "No. Early preparation can strengthen leadership continuity, improve optionality and reduce pressure when personal or commercial circumstances change.",
      },
      {
        question: "Can succession be staged over time?",
        answer:
          "In some circumstances, staged ownership and management transitions may be possible. The feasibility and terms depend on the parties, funding and relevant professional advice.",
      },
      {
        question:
          "What if there is no identified internal successor?",
        answer:
          "A strategic review can consider external buyers, mergers and other ownership pathways alongside improvements to business readiness.",
      },
    ],
    relatedServices: [
      "business-valuation",
      "funding-capital",
      "mergers-acquisitions",
    ],
    seoTitle: "Succession Planning for Financial Advice Practices",
    seoDescription:
      "Succession funding, staged ownership transition and business continuity planning for Australian financial advice practice owners.",
  },

  // ==========================================================
  // 08 — TECHNOLOGY INTEGRATION
  // ==========================================================
  {
    slug: "technology-integration",
    title: "Strategic Technology Integration",
    shortTitle: "Technology Integration",
    eyebrow: "Technology with Commercial Purpose",
    description:
      "Align systems, data and technology investment with business performance, integration readiness and future growth.",
    introduction: [
      "Technology is only valuable when it improves how a business operates. For financial advice practices, disconnected systems, inconsistent data and manual workflows can limit scalability and complicate acquisitions or structural change.",
      "Purple Rock takes a business-first view of technology. The focus is on identifying operational priorities, assessing integration requirements and coordinating specialist providers where technology needs to support a larger strategic initiative. The consultancy's role is strategic and commercial, not a substitute for technical security, regulatory or implementation specialists.",
    ],
    challenges: [
      "Disconnected client, advice, workflow and reporting systems",
      "Limited visibility of operational performance and information quality",
      "Technology integration following a merger or acquisition",
      "Unclear business cases for new systems and automation",
      "Managing change across advisers, support staff and vendors",
    ],
    solutions: [
      {
        title: "Operational Technology Review",
        description:
          "Identify system constraints, duplicated processes and information-flow issues affecting business objectives.",
      },
      {
        title: "Investment Prioritisation",
        description:
          "Compare initiatives according to commercial value, implementation complexity and organisational readiness.",
      },
      {
        title: "Integration Planning",
        description:
          "Outline key system, data and operational dependencies arising from acquisitions, expansion or restructuring.",
      },
      {
        title: "Specialist Provider Coordination",
        description:
          "Connect relevant implementation, security, compliance and technology specialists to the defined business requirements.",
      },
    ],
    steps: [
      {
        title: "Map Current Capabilities",
        description:
          "Understand workflows, platforms, data dependencies and pain points.",
      },
      {
        title: "Define the Target State",
        description:
          "Prioritise outcomes and review commercial, regulatory and change-management requirements.",
      },
      {
        title: "Coordinate Delivery",
        description:
          "Sequence improvements and work with qualified implementation providers as appropriate.",
      },
    ],
    outcomes: [
      "Clearer priorities for technology investment",
      "Improved visibility of integration risks",
      "Better alignment between systems and business strategy",
      "A practical framework for vendor engagement and change",
    ],
    faqs: [
      {
        question: "Does Purple Rock build or implement software?",
        answer:
          "The service is described as strategic planning and coordination. Specialist technical providers would undertake implementation work under separately agreed scopes.",
      },
      {
        question:
          "Can this help after acquiring another practice?",
        answer:
          "Yes. An early assessment of systems, workflows, data and dependencies can inform a broader post-acquisition integration plan.",
      },
      {
        question: "Will new technology automatically reduce costs?",
        answer:
          "No. Results depend on the business case, implementation quality, user adoption and ongoing operating requirements.",
      },
    ],
    relatedServices: [
      "growth-strategy",
      "mergers-acquisitions",
      "licensing-solutions",
    ],
    seoTitle: "Technology Integration for Financial Advice Practices",
    seoDescription:
      "Commercial technology integration planning, systems reviews and post-acquisition operational strategy for Australian financial advice businesses.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
