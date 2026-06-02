import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SEO from '../components/SEO';
import { breadcrumbSchema, itemListSchema } from '../utils/schema';

// Display order + friendly section labels for each product category
const CATEGORY_ORDER = ['hydrant', 'valve', 'hose', 'fitting', 'monitor', 'reel', 'sprinkler', 'accessory', 'extinguisher', 'alarm'];
const CATEGORY_LABELS = {
    hydrant: 'Fire Hydrant Systems',
    valve: 'Landing Valves & Nozzles',
    hose: 'Fire Hoses',
    fitting: 'Hose Fittings & Couplings',
    monitor: 'Water Monitors & Nozzles',
    reel: 'Hose Reels & Cabinets',
    sprinkler: 'Sprinkler Systems',
    accessory: 'Hydrant Accessories',
    extinguisher: 'Fire Extinguishers',
    alarm: 'Fire Alarms & Detection',
};

// Extinguishers are split by extinguishing agent; size variants live inside each type.
const EXT_SUB_ORDER = ['chemical', 'foam', 'water', 'co2', 'other'];
const EXT_SUB_LABELS = {
    chemical: 'Chemical Based (DCP / ABC)',
    foam: 'Foam Based (AFFF)',
    water: 'Water Based',
    co2: 'CO₂ Based',
    other: 'Other Extinguishers',
};
const EXT_SUBCATEGORY = {
    // Dry Chemical Powder / ABC
    'abc-powder': 'chemical',
    'dcp-powder': 'chemical',
    'auto-modular': 'chemical',
    'portable-400ml': 'chemical',
    'fire-kit-1kg': 'chemical',
    // Foam (AFFF)
    'afff-foam': 'foam',
    // Water (water with CO2 propellant)
    'water-extinguisher': 'water',
    // CO2 gas
    'co2-extinguisher': 'co2',
};
const extSub = (p) => EXT_SUBCATEGORY[p.id] || 'other';

function Catalog() {
    const [filter, setFilter] = useState('all');

    // Only categories that actually have products, in the defined order
    const availableCategories = CATEGORY_ORDER.filter(cat =>
        products.some(p => p.category === cat)
    );
    const sectionsToShow = filter === 'all' ? availableCategories : [filter];

    const renderCard = (product) => (
        <div key={product.id} className="product-card">
            <div className="product-image-container">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="product-image" loading="lazy" decoding="async" />
                ) : (
                    <div className="product-image-placeholder" style={{
                        width: '100%', height: '100%', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', aspectRatio: '1/1'
                    }}>
                        <span>Image missing</span>
                    </div>
                )}
            </div>
            <div className="product-info">
                <span className="product-category-tag">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-short-desc">{product.shortDesc}</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary btn-full">VIEW DETAILS</Link>
            </div>
        </div>
    );

    return (
        <div className="catalog-page page-container">
            <SEO
                title="Fire Safety Equipment Catalog"
                description="Browse our comprehensive catalog of fire safety equipment, including fire hydrants, extinguishers, valves, alarms, and protective gear."
                keywords="fire safety catalog, fire extinguishers buy online, fire hydrant valves, PM Enterprises products"
                url="/products"
                schema={[
                    breadcrumbSchema([
                        { name: 'Home', path: '/' },
                        { name: 'Products', path: '/products' },
                    ]),
                    itemListSchema(products.map(p => ({ name: p.name, path: `/products/${p.id}` }))),
                ]}
            />
            <div className="catalog-header">
                <h1 className="catalog-title">OUR PRODUCT CATALOG</h1>
                <div className="catalog-filters">
                    <label>FILTER BY:
                        <select
                            className="filter-select"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {availableCategories.map(cat => (
                                <option key={cat} value={cat}>
                                    {CATEGORY_LABELS[cat]}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>

            {sectionsToShow.map(cat => {
                const items = products.filter(p => p.category === cat);

                // Extinguishers get sub-sections by agent type (sizes inside each)
                if (cat === 'extinguisher') {
                    const subsPresent = EXT_SUB_ORDER.filter(sub =>
                        items.some(p => extSub(p) === sub)
                    );
                    return (
                        <section key={cat} className="catalog-section">
                            <h2 className="catalog-section-title">
                                {CATEGORY_LABELS[cat]}
                                <span className="catalog-count">{items.length}</span>
                            </h2>
                            {subsPresent.map(sub => {
                                const subItems = items.filter(p => extSub(p) === sub);
                                return (
                                    <div key={sub} className="catalog-subsection">
                                        <h3 className="catalog-subsection-title">
                                            {EXT_SUB_LABELS[sub]}
                                            <span className="catalog-count">{subItems.length}</span>
                                        </h3>
                                        <div className="product-grid">
                                            {subItems.map(renderCard)}
                                        </div>
                                    </div>
                                );
                            })}
                        </section>
                    );
                }

                return (
                    <section key={cat} className="catalog-section">
                        <h2 className="catalog-section-title">
                            {CATEGORY_LABELS[cat] || cat}
                            <span className="catalog-count">{items.length}</span>
                        </h2>
                        <div className="product-grid">
                            {items.map(renderCard)}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default Catalog;
