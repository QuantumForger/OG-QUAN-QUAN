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
      title: "Global Retailer's AI-Driven Transformation",
      industry: "Retail",
      challenge: "Struggling with inventory management and customer personalization",
      solution: "Implemented AI-powered demand forecasting and recommendation engines",
      results: {
        metric: "43% Revenue Increase",
        timeline: "12 Months",
        detail: "Optimized inventory and personalized shopping experiences"
      }
    },
    {
      id: 2,
      title: "FinTech Startup's Quantum Leap in Fraud Detection",
      industry: "Financial Services",
      challenge: "High false positive rates in fraud detection systems",
      solution: "Deployed advanced machine learning models for real-time transaction analysis",
      results: {
        metric: "98.5% Accuracy",
        timeline: "6 Months",
        detail: "Reduced false positives by 76% while improving fraud catch rate"
      }
    },
    {
      id: 3,
      title: "Manufacturing Giant's AI-Optimized Supply Chain",
      industry: "Manufacturing",
      challenge: "Inefficiencies in global supply chain management",
      solution: "Developed AI-driven supply chain optimization platform",
      results: {
        metric: "$120M Cost Savings",
        timeline: "18 Months",
        detail: "Streamlined operations and reduced waste across 12 countries"
      }
    }
  ];
}

export default async function CaseStudiesPage() {
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
          {caseStudies.map((study) => (
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

