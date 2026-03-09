import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronLeft } from 'lucide-react';

function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id) || products[0];

    return (
        <div className="product-detail-page page-container">
            <div className="back-link-wrapper">
                <Link to="/products" className="back-link">
                    <ChevronLeft size={16} /> Back to Catalog
                </Link>
            </div>

            <div className="product-detail-layout">
                <div className="product-images-section">
                    <div className="main-image-wrapper">
                        <img src={product.image} alt={product.name} className="main-image" />
                    </div>
                    <div className="thumbnail-gallery">
                        <div className="thumbnail active"><img src={product.image} alt="thumb" /></div>
                        <div className="thumbnail"><img src="/images/product_2.png" alt="thumb" /></div>
                        <div className="thumbnail"><img src="/images/product_3.png" alt="thumb" /></div>
                        <div className="thumbnail"><img src="/images/product_4.png" alt="thumb" /></div>
                        <div className="thumbnail"><img src="/images/product_5.png" alt="thumb" /></div>
                    </div>
                </div>

                <div className="product-info-section">
                    <h1 className="detail-title">{product.name}</h1>
                    <h3 className="detail-subtitle">Premier Industrial & Urban Fire Protection</h3>
                    <p className="detail-desc">{product.fullDesc || "High quality fire protection equipment built for rigorous environments."}</p>

                    <div className="specs-section">
                        <h4 className="specs-title">TECHNICAL SPECIFICATIONS</h4>
                        <table className="specs-table">
                            <tbody>
                                <tr>
                                    <td>Max Flow Rate</td>
                                    <td className="spec-value">{product.techSpecs?.maxFlowRate || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>Certifications</td>
                                    <td className="spec-value">{product.techSpecs?.certifications || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>Material</td>
                                    <td className="spec-value">{product.techSpecs?.material || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>Nozzle Sizes</td>
                                    <td className="spec-value">{product.techSpecs?.nozzleSizes || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td>Standard Color</td>
                                    <td className="spec-value">{product.techSpecs?.standardColor || "N/A"}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Link to="/contact" className="btn btn-primary btn-large btn-full btn-quote" style={{ display: 'block', textAlign: 'center' }}>REQUEST A QUOTE</Link>


                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
