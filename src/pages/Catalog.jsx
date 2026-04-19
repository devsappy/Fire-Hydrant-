import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SEO from '../components/SEO';

function Catalog() {
    const [filter, setFilter] = useState('all');

    // Get unique categories from products
    const categories = ['all', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="catalog-page page-container">
            <SEO 
                title="Fire Safety Equipment Catalog" 
                description="Browse our comprehensive catalog of fire safety equipment, including fire hydrants, extinguishers, valves, alarms, and protective gear."
                keywords="fire safety catalog, fire extinguishers buy online, fire hydrant valves, PM Enterprises products" 
                url="/products"
            />
            <div className="catalog-header">
                <h1 className="catalog-title">OUR PRODUCT CATALOG</h1>
                <div className="catalog-filters">
                    <label>FILTER BY:
                        <select
                            className="filter-select"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            style={{ textTransform: 'capitalize' }}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>
                                    {cat === 'all' ? 'All Types' : cat}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            {product.image ? (
                                <img src={product.image} alt={product.name} className="product-image" />
                            ) : (
                                <div className="product-image-placeholder" style={{
                                    width: '100%', height: '100%', display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: '#f5f5f5', color: '#999',
                                    aspectRatio: '1/1'
                                }}>
                                    <span>Image missing</span>
                                </div>
                            )}
                        </div>
                        <div className="product-info">
                            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#d32f2f', fontWeight: 'bold' }}>
                                {product.category}
                            </span>

                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-short-desc">{product.shortDesc}</p>
                            <Link to={`/products/${product.id}`} className="btn btn-primary btn-full">VIEW DETAILS</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
