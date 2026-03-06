import { Link } from 'react-router-dom';
import { products } from '../data/products';

function Catalog() {
    return (
        <div className="catalog-page page-container">
            <div className="catalog-header">
                <h1 className="catalog-title">OUR PRODUCT CATALOG</h1>
                <div className="catalog-filters">
                    <label>FILTER BY:
                        <select className="filter-select">
                            <option>type</option>
                            <option>hydrant</option>
                            <option>valve</option>
                        </select>
                    </label>
                    <label>SORT BY:
                        <select className="filter-select">
                            <option>popularity</option>
                            <option>newest</option>
                        </select>
                    </label>
                </div>
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>
                        <div className="product-info">
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
