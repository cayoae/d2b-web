import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import { workItems } from '../data/workData';

export default function WorkDetail() {
  const { id } = useParams();
  const project = workItems.find(item => item.id === id);

  if (!project) {
    return (
      <Container className="py-section">
        <div className="text-center">
          <h1 className="text-h1 font-bold mb-4">Project not found</h1>
          <Link to="/work" className="text-accent hover:text-lime">
            ← Back to all work
          </Link>
        </div>
      </Container>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }
  };

  return (
    <div>
      {/* Header */}
      <section className="py-section-lg bg-gradient-to-br from-soft-gray to-white">
        <Container>
          <Link to="/work" className="text-accent hover:text-lime mb-6 inline-block">
            ← Back to all work
          </Link>
          <motion.div {...fadeInUp}>
            <h1 className="text-display font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <p className="text-lime text-h1 font-bold">{project.metric}</p>
                <p className="text-sm text-forest/60">Impact</p>
              </div>
              <div>
                <p className="text-h2 font-bold">{project.duration}</p>
                <p className="text-sm text-forest/60">Timeline</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-sm bg-white px-4 py-2 rounded-full text-forest font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Project Image */}
      <section className="py-section">
        <Container>
          <div className="aspect-video bg-soft-gray rounded-2xl flex items-center justify-center text-forest/40 text-h2">
            [Project Screenshot/Demo]
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-section bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-h2 font-bold mb-4">Problem</h2>
              <p className="text-forest/80 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h2 className="text-h2 font-bold mb-4">Approach</h2>
              <p className="text-forest/80 leading-relaxed">{project.approach}</p>
            </div>
            <div>
              <h2 className="text-h2 font-bold mb-4">Result</h2>
              <p className="text-forest/80 leading-relaxed">{project.result}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section className="py-section">
        <Container>
          <Card hover={false} className="max-w-2xl mx-auto">
            <h3 className="font-bold mb-2">Tech Stack</h3>
            <p className="text-forest/80">{project.stack}</p>
          </Card>
        </Container>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-section bg-gradient-to-br from-forest to-accent text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-lime text-2xl mb-6">★★★★★</div>
              <blockquote className="text-h2 font-medium mb-6 italic">
                "{project.testimonial.quote}"
              </blockquote>
              <p className="text-white/80">— {project.testimonial.author}</p>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-section-lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h1 font-bold mb-6">Let's build something great together</h2>
            <Button variant="primary" href="https://calendly.com/cayoae89/30min" target="_blank" rel="noopener noreferrer">
              Start your project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
