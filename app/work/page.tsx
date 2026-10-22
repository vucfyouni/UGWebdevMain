import Projects from '@/components/Projects';
import Link from 'next/link';
export const metadata={title:'Our work'};
export default function Work(){return <section className="section page-section"><div className="eyebrow">OUR WORK / INDEPENDENT IDEAS, ONLINE</div><h1>Built with purpose.<br/><span className="serif">Made for people.</span></h1><p className="intro">Our team designed and developed both websites from the ground up. Explore the live projects, including Vegas Underground’s community web app through its main site.</p><Projects/><p className="fine-print">Portfolio artwork is a conceptual presentation, not a screenshot of the live websites.</p><Link className="button dark" href="/contact">Let’s build your next project ↗</Link></section>}
