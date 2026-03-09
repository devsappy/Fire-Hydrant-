import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldAlert, Flame, HeartPulse } from 'lucide-react';

function FireSafetySection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Page 1 animations
    const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.35], [0, -150]);
    const scale1 = useTransform(scrollYProgress, [0, 0.35], [1, 0.8]);

    // Page 2 animations
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.7], [150, 0, 0, -150]);
    const scale2 = useTransform(scrollYProgress, [0.25, 0.4, 0.6, 0.7], [0.8, 1, 1, 0.8]);

    // Page 3 animations
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [150, 0, 0]);
    const scale3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.8, 1, 1]);

    // Background color shifts during scroll
    const bgColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#ffffff", "#f8f9fa", "#1a1a1a"]);
    const text1Color = useTransform(scrollYProgress, [0, 0.5], ["#2c3e50", "#2c3e50"]);
    const text2Color = useTransform(scrollYProgress, [0.25, 0.7], ["#2c3e50", "#2c3e50"]);

    return (
        <section ref={containerRef} style={{ height: '300vh', position: 'relative' }}>
            <motion.div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.02)'
            }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                    {/* Slide 1 */}
                    <motion.div style={{ position: 'absolute', opacity: opacity1, y: y1, scale: scale1, width: '100%', padding: '0 20px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', padding: '20px', borderRadius: '50%', backgroundColor: 'rgba(192, 57, 43, 0.1)', marginBottom: '30px' }}>
                            <Flame size={80} color="#c0392b" className="fs-icon" />
                        </div>
                        <motion.h2 className="fs-title" style={{ color: text1Color }}>
                            Why Fire Safety is Crucial
                        </motion.h2>
                        <p className="fs-desc-1">
                            Fires can spread rapidly, turning a small spark into a devastating incident within seconds. Early detection and immediate response are the absolute keys to minimizing damage.
                        </p>
                    </motion.div>

                    {/* Slide 2 */}
                    <motion.div style={{ position: 'absolute', opacity: opacity2, y: y2, scale: scale2, width: '100%', padding: '0 20px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', padding: '20px', borderRadius: '50%', backgroundColor: 'rgba(192, 57, 43, 0.1)', marginBottom: '30px' }}>
                            <ShieldAlert size={80} color="#c0392b" className="fs-icon" />
                        </div>
                        <motion.h2 className="fs-title" style={{ color: text2Color }}>
                            Protecting Lives and Assets
                        </motion.h2>
                        <p className="fs-desc-1">
                            Every workplace and home must be equipped with the right fire safety appliances. By investing in top-of-the-line equipment, you are directly investing in the safety of human lives and invaluable assets.
                        </p>
                    </motion.div>

                    {/* Slide 3 */}
                    <motion.div style={{ position: 'absolute', opacity: opacity3, y: y3, scale: scale3, width: '100%', padding: '0 20px', textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', padding: '20px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', marginBottom: '30px' }}>
                            <HeartPulse size={80} color="#ffffff" className="fs-icon" />
                        </div>
                        <h2 className="fs-title fs-title-white">
                            Peace of Mind, Guaranteed
                        </h2>
                        <p className="fs-desc-3">
                            With PM Enterprises' innovative solutions and rigorous compliance, you rest easy knowing you're protected by the absolute best. We build your trust through relentless safety assurance.
                        </p>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}

export default FireSafetySection;
