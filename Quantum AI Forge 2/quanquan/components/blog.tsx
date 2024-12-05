import PatternBreakHeadline from '@/components/common/PatternBreakHeadline'
import ValueBridge from '@/components/common/ValueBridge'
import Link from 'next/link'
import { theme } from '@/lib/theme'
import styles from '@/styles/Blog.module.css'

async function getPosts() {
  // In a real application, this would be an API call
  // For now, we'll use mock data
  return [
    {
      id: 1,
      title: "The Quantum Leap: How AI is Reshaping Market Dynamics",
      excerpt: "Explore how cutting-edge AI technologies are fundamentally altering competitive landscapes across industries.",
      author: "Dr. Elara Quantum",
      date: "2023-11-15",
      readTime: "7 min read"
    },
    {
      id: 2,
      title: "Ethical AI: Forging a Responsible Path to Innovation",
      excerpt: "Delve into the critical considerations and best practices for developing AI solutions that are both powerful and ethically sound.",
      author: "Prof. Zephyr Nexus",
      date: "2023-11-10",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "AI-Driven Process Optimization: A Case Study in Efficiency",
      excerpt: "Uncover the transformative impact of AI on business processes through a real-world implementation case study.",
      author: "Iris Synapse",
      date: "2023-11-05",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Future of AI: Predictions and Preparations for 2024",
      excerpt: "Get ahead of the curve with our expert analysis of upcoming AI trends and how to position your business for success.",
      author: "Dr. Nova Cortex",
      date: "2023-10-30",
      readTime: "8 min read"
    }
  ];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.blog}>
      <section className={styles.hero} style={{ background: theme.gradients.primaryPower }}>
        <div className="container mx-auto px-4">
          <PatternBreakHeadline>
            Quantum Insights: Illuminating the AI Frontier
          </PatternBreakHeadline>
          <ValueBridge>
            Dive into cutting-edge AI knowledge that propels industry leaders to new heights
          </ValueBridge>
        </div>
      </section>

      <section className={styles.postsSection}>
        <div className="container mx-auto px-4">
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.id}`} className={styles.readMore}>
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className="container mx-auto px-4 text-center">
          <h2>Stay Ahead of the AI Curve</h2>
          <p>
            Subscribe to our newsletter for exclusive AI insights and industry-leading strategies.
          </p>
          <form className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={styles.emailInput}
            />
            <button 
              type="submit" 
              className={styles.subscribeButton}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

