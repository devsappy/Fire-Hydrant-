import { Clock } from 'lucide-react';

function Projects() {
    return (
        <div className="page-container projects-page" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center'
        }}>
            <style>{`
                .animated-clock polyline {
                    transform-origin: 12px 12px;
                    animation: spinHands 5s linear infinite;
                }
                @keyframes spinHands {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
            <Clock size={64} color="#c0392b" className="animated-clock" style={{ marginBottom: '20px' }} />
            <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>On Work Load</h1>
            <p className="page-subtitle" style={{ fontSize: '1.5rem', color: '#555' }}>Updating Soon...</p>
        </div>
    );
}

export default Projects;
