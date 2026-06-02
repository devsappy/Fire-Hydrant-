// Centralized SEO / structured-data helpers (single source of truth).

export const SITE_URL = "https://www.pmenterprises.xyz";
export const SITE_NAME = "PM Enterprises";
export const SITE_LOGO = `${SITE_URL}/images/ui/pmenterpriseslogo.png`;

/** Resolve a path/relative image to an absolute URL. */
export const absUrl = (path = "") => {
    if (!path) return SITE_URL;
    if (path.startsWith("http")) return path;
    return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};

/** BreadcrumbList from [{ name, path }]. */
export const breadcrumbSchema = (items = []) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: absUrl(it.path),
    })),
});

/** Product schema for a product-detail page. */
export const productSchema = (p, url) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: absUrl(p.image),
    description: p.fullDesc || p.shortDesc,
    category: p.category,
    sku: p.id,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@type": "Organization", name: SITE_NAME },
    ...(url ? { url: absUrl(url) } : {}),
    ...(p.techSpecs
        ? {
              additionalProperty: Object.entries(p.techSpecs)
                  .filter(([, v]) => v && v !== "N/A")
                  .map(([name, value]) => ({
                      "@type": "PropertyValue",
                      name,
                      value: String(value),
                  })),
          }
        : {}),
});

/** BlogPosting schema for an article page. */
export const articleSchema = ({ title, description, image, url, datePublished, dateModified }) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: absUrl(image),
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: SITE_LOGO },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": absUrl(url) },
});

/** FAQPage from [{ q, a }] — strong for answer engines & "People Also Ask". */
export const faqSchema = (items = []) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
    })),
});

/** ItemList of links (e.g. product catalog, services). */
export const itemListSchema = (items = []) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: absUrl(it.path),
    })),
});
