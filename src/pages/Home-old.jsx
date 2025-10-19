import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-section-lg bg-gradient-to-br from-soft-gray to-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h1 className="text-display font-bold mb-6 leading-tight">
                Build what matters. Automate the rest.
              </h1>
              <p className="text-body text-forest/80 mb-8 leading-relaxed">
                We ship web apps and sites fast—then add AI automations with human review to cut busywork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="#">
                  Book a 20-min call
                </Button>
                <Button variant="secondary" to="/work">
                  See live demos
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-lime/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-forest/40">
                  [Product Mockup Rotating Slides]
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="py-section">
        <Container>
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Web Apps & Sites */}
            <motion.div variants={fadeInUp}>
              <Card>
                <h3 className="text-h2 font-bold mb-4">Web Apps & Sites</h3>
                <p className="text-forest/80 mb-6">
                  Custom web apps, internal tools, and fast, SEO-ready sites.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">✓</span>
                    <span>MVPs & internal tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">✓</span>
                    <span>High-converting sites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">✓</span>
                    <span>Launch in weeks</span>
                  </li>
                </ul>
                <Link
                  to="/services/web-apps-sites"
                  className="text-accent hover:text-lime font-medium inline-flex items-center"
                >
                  Explore Web Apps & Sites →
                </Link>
              </Card>
            </motion.div>

            {/* Automation & AI */}
            <motion.div variants={fadeInUp}>
              <Card>
                <h3 className="text-h2 font-bold mb-4">Automation & AI (RAG + HIL)</h3>
                <p className="text-forest/80 mb-6">
                  Automate routine work; answer from your data with human approvals.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-lime mr-2">✓</span>
                    <span>RAG over docs & CRM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">✓</span>
                    <span>Human-in-the-loop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-lime mr-2">✓</span>
                    <span>Clear ROI</span>
                  </li>
                </ul>
                <Link
                  to="/services/automation-ai"
                  className="text-accent hover:text-lime font-medium inline-flex items-center"
                >
                  Explore Automation & AI →
                </Link>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Work */}
      <section className="py-section bg-white">
        <Container>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-4">Featured Work</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-8"
          >
            {[
              { title: 'Booking app', metric: '+32% bookings', time: '5 weeks' },
              { title: 'B2B site refresh', metric: '+48% form fills', time: '3 weeks' },
              { title: 'AI knowledge assistant', metric: '−40% handling time', time: '4 weeks' },
            ].map((project, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card>
                  <div className="aspect-video bg-soft-gray rounded-xl mb-4 flex items-center justify-center text-forest/40">
                    [Project Image]
                  </div>
                  <h4 className="font-bold mb-2">{project.title}</h4>
                  <p className="text-lime text-h2 font-bold mb-1">{project.metric}</p>
                  <p className="text-sm text-forest/60">{project.time}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              to="/work"
              className="text-accent hover:text-lime font-medium inline-flex items-center"
            >
              View all use cases →
            </Link>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="py-section">
        <Container>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-4">How We Work</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { step: '01', title: 'Scope fast', desc: '20-min call → written plan' },
              { step: '02', title: 'Prototype early', desc: 'First demo in week 1' },
              { step: '03', title: 'Ship in slices', desc: 'Usable drops every 1–2 weeks' },
              { step: '04', title: 'Operate & improve', desc: 'Support + small monthly iterations' },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center">
                <div className="text-lime text-h1 font-bold mb-4">{item.step}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-forest/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Outcomes */}
      <section className="py-section bg-white">
        <Container>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-4">Outcomes, Not Tech</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              'Faster launches and fewer meetings',
              'Clear ownership: design → build → host → support',
              'Measured results: time saved, leads, error rate',
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card hover={false} className="h-full">
                  <div className="flex items-start">
                    <span className="text-lime text-2xl mr-3">✓</span>
                    <p className="text-forest font-medium">{benefit}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeInUp} className="text-center mt-8">
            <Link
              to="/contact"
              className="text-accent hover:text-lime font-medium inline-flex items-center"
            >
              Request a tailored estimate →
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Reviews Carousel */}
      <section className="py-section">
        <Container>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-4">Client Reviews</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex text-lime text-xl">★★★★★</div>
              <span className="text-forest/70">5.0 average</span>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { quote: 'Fast turnaround, solid results. Best partner for our needs.', author: 'Sarah M., Operations Lead' },
              { quote: 'Cut our support time by 40% with their AI assistant. ROI was clear.', author: 'John D., CEO' },
              { quote: 'From idea to launch in 4 weeks. Incredibly smooth process.', author: 'Mike R., Product Manager' },
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card hover={false}>
                  <div className="flex text-lime text-sm mb-3">★★★★★</div>
                  <p className="text-forest/90 mb-4 italic">"{review.quote}"</p>
                  <p className="text-sm font-medium text-forest/70">{review.author}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link
              to="/reviews"
              className="text-accent hover:text-lime font-medium inline-flex items-center"
            >
              Read more client stories →
            </Link>
          </div>
        </Container>
      </section>

      {/* Blog Teaser */}
      <section className="py-section bg-white">
        <Container>
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-h1 font-bold mb-4">Latest from the Blog</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'RAG in production: 3 lessons', takeaway: 'Source citations prevent hallucinations' },
              { title: 'Ship MVPs in 4 weeks', takeaway: 'Scope ruthlessly, prototype fast' },
              { title: 'Human-in-the-loop AI', takeaway: 'Automate 80%, review 20%' },
            ].map((post, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card>
                  <div className="aspect-video bg-soft-gray rounded-xl mb-4 flex items-center justify-center text-forest/40">
                    [Cover Image]
                  </div>
                  <h4 className="font-bold mb-2">{post.title}</h4>
                  <p className="text-sm text-forest/70">{post.takeaway}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="text-accent hover:text-lime font-medium inline-flex items-center"
            >
              Browse all posts →
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-section-lg bg-gradient-to-br from-forest to-accent text-white">
        <Container>
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-h1 font-bold mb-6">
              Let's make your next release the easiest yet.
            </h2>
            <p className="text-body text-white/90 mb-8">
              Tell us what you want to achieve; we'll propose the fastest path to a workable release.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#">
                Book a 20-min intro
              </Button>
              <Button
                variant="secondary"
                to="/contact"
                className="!border-white !text-white hover:!bg-white hover:!text-forest"
              >
                Send a message
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
