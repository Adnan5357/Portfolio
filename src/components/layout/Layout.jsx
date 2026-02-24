import Navbar from './Navbar';
import Footer from './Footer';
import Background3D from '../3d/Background3D';

const Layout = ({ children }) => {
    return (
        <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
            <Background3D />
            <Navbar />
            <main className="main-content" style={{ flex: 1, marginTop: '70px', position: 'relative', zIndex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
