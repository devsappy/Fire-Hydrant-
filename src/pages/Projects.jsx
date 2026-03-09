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
            <Clock size={64} color="#c0392b" style={{ marginBottom: '20px' }} />
            <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '15px' }}>On Work Load</h1>
            <p className="page-subtitle" style={{ fontSize: '1.5rem', color: '#555' }}>Updating Soon...</p>
        </div>
    );
}

export default Projects;
