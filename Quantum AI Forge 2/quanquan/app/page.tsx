import Hero from '../components/Hero'
import OurApproach from '../components/OurApproach'
import PatternBreakHeadline from '@/components/common/PatternBreakHeadline'
import ValueBridge from '@/components/common/ValueBridge'
import ProofSequence from '@/components/common/ProofSequence'
import { theme } from '@/lib/theme'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      <OurApproach />
      
      <section className={`${styles.hero} glassmorphic`} style={{ background: theme.gradients.primaryPower }}>
        <div className="container mx-auto px-4">
          <PatternBreakHeadline>
            While others focus on AI tools, we engineer market evolution
          </PatternBreakHeadline>
          <ValueBridge>
            Transform from market participant to market leader with Quantum AI Forge
          </ValueBridge>
          <a href="/contact" className={`${styles.ctaButton} text-shadow`}>
            Evolve Your Business
          </a>
        </div>
      </section>

      <section className={styles.marketEvolution}>
        <div className="container mx-auto px-4">
          <h2 className={styles.sectionTitle}>Market Evolution Messages</h2>
          <div className={styles.messageGrid}>
            <div className={`${styles.messageCard} glassmorphic`}>
              <h3 className="text-shadow">Transformation</h3>
              <p className="text-shadow">Engineer your business transformation with cutting-edge AI solutions.</p>
            </div>
            <div className={`${styles.messageCard} glassmorphic`}>
              <h3>Market Shifts</h3>
              <p className="text-shadow">Stay ahead of market shifts with predictive AI-powered insights.</p>
            </div>
            <div className={`${styles.messageCard} glassmorphic`}>
              <h3>Competitive Advantage</h3>
              <p className="text-shadow">Forge an unassailable competitive advantage through AI mastery.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.implementation} glassmorphic`}>
        <div className="container mx-auto px-4">
          <h2 className={styles.sectionTitle}>Implementation Excellence</h2>
          <div className={styles.implementationGrid}>
            <div>
              <h3>Expert AI Implementation</h3>
              <p>Our team of elite AI engineers ensures flawless implementation, tailored to your unique business needs.</p>
              <ul>
                <li>Customized AI solutions</li>
                <li>Seamless integration</li>
                <li>Ongoing support and optimization</li>
              </ul>
            </div>
            <div>
              <ProofSequence 
                metric="99.8% Success Rate"
                timeline="Over 500+ implementations"
                result="Consistently exceeding client expectations"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.results}>
        <div className="container mx-auto px-4">
          <h2 className={styles.sectionTitle}>Result Documentation</h2>
          <div className={styles.resultsGrid}>
            <ProofSequence 
              metric="280% Growth"
              timeline="90 Days"
              result="Fully documented market expansion"
              className="glassmorphic"
            />
            <ProofSequence 
              metric="$50M Revenue Increase"
              timeline="6 Months"
              result="AI-driven process optimization"
              className="glassmorphic"
            />
            <ProofSequence 
              metric="45% Cost Reduction"
              timeline="1 Year"
              result="AI-powered efficiency gains"
              className="glassmorphic"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

