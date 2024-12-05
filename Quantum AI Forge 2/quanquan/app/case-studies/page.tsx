import PatternBreakHeadline from '@/components/common/PatternBreakHeadline'
import ValueBridge from '@/components/common/ValueBridge'
import ProofSequence from '@/components/common/ProofSequence'
import { theme } from '@/lib/theme'
import styles from '@/styles/CaseStudies.module.css'

async function getCaseStudies() {
  // In a real application, this would be an API call
  // For now, we'll use mock data
  return [
    {
      id: 1,
      title: "Local Bakery's AI-Powered Inventory Management",
      industry: "Food & Beverage",
      size: "small",
      challenge: "Struggling with inventory waste and demand forecasting",
      solution: "Implemented AI-driven demand prediction and inventory optimization",
      results: {
        metric: "30% Reduction in Waste",
        timeline: "3 Months",
        detail: "Improved profitability and customer satisfaction"
      }
    },
    {
      id: 2,
      title: "Boutique Marketing Agency's AI-Enhanced Campaigns",
      industry: "Marketing",
      size: "small",
      challenge: "Difficulty in personalizing campaigns for diverse client base",
      solution: "Deployed AI for customer segmentation and content optimization",
      results: {
        metric: "45% Increase in Campaign ROI",
        timeline: "6 Months",
        detail: "Higher client retention and acquisition rates"
      }
    },
    {
      id: 3,
      title: "Regional Hospital's AI Diagnostic Assistant",
      industry: "Healthcare",
      size: "medium",
      challenge: "Long wait times and diagnostic errors in the ER",
      solution: "Integrated AI-powered diagnostic support system",
      results: {
        metric: "22% Reduction in Wait Times",
        timeline: "9 Months",
        detail: "Improved patient outcomes and staff efficiency"
      }
    },
    {
      id: 4,
      title: "Mid-Size Manufacturer's AI-Optimized Supply Chain",
      industry: "Manufacturing",
      size: "medium",
      challenge: "Inefficiencies in supply chain management",
      solution: "Implemented AI-driven supply chain optimization platform",
      results: {
        metric: "$5M Annual Cost Savings",
        timeline: "12 Months",
        detail: "Streamlined operations across 5 facilities"
      }
    },
    {
      id: 5,
      title: "Global Retailer's AI-Driven Customer Experience",
      industry: "Retail",
      size: "large",
      challenge: "Struggling with personalization at scale",
      solution: "Deployed advanced AI for hyper-personalization",
      results: {
        metric: "28% Increase in Customer Lifetime Value",
        timeline: "18 Months",
        detail: "Significant boost in customer loyalty and sales"
      }
    },
    {
      id: 6,
      title: "Multinational Bank's AI Fraud Detection System",
      industry: "Finance",
      size: "large",
      challenge: "Rising fraud cases and false positives",
      solution: "Implemented state-of-the-art AI fraud detection",
      results: {
        metric: "92% Reduction in Fraud Losses",
        timeline: "24 Months",
        detail: "Improved security and customer trust"
      }
    }
  ];
}

export default async function CaseStudies() {
  const caseStudies = await getCaseStudies();

  return (
    <div className={styles.caseStudies}>
      <section className={styles.hero} style={{ background: theme.gradients.primaryPower }}>
        <div className="container mx-auto px-4">
          <PatternBreakHeadline>
            Quantum AI Forge: Catalyzing Industry Revolutions
          </PatternBreakHeadline>
          <ValueBridge>
            Witness the transformative power of our AI solutions across diverse sectors
          </ValueBridge>
        </div>
      </section>

      <section className={styles.studiesSection}>
        <div className="container mx-auto px-4">
          {['small', 'medium', 'large'].map((size) => (
            <div key={size} className={styles.sizeCategory}>
              <h3 className={styles.sizeTitle}>{size.charAt(0).toUpperCase() + size.slice(1)} Businesses</h3>
              <div className={styles.studiesGrid}>
                {caseStudies
                  .filter(study => study.size === size)
                  .map((study) => (
                    <div key={study.id} className={styles.studyCard}>
                      <h2>{study.title}</h2>
                      <p><span>Industry:</span> {study.industry}</p>
                      <p><span>Challenge:</span> {study.challenge}</p>
                      <p><span>Solution:</span> {study.solution}</p>
                      <ProofSequence 
                        metric={study.results.metric}
                        timeline={study.results.timeline}
                        result={study.results.detail}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container mx-auto px-4 text-center">
          <h2>Ready to Write Your Success Story?</h2>
          <p>
            Join the ranks of industry leaders who have harnessed the power of Quantum AI Forge.
          </p>
          <a 
            href="/contact" 
            className={styles.ctaButton}
          >
            Initiate Your Transformation
          </a>
        </div>
      </section>
    </div>
  );
}

