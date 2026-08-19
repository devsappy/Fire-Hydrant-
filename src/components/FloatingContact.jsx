import { Phone, MessageCircle } from 'lucide-react';

const PHONE_E164 = '+919239689075';
const WHATSAPP_NUMBER = '919239689075';
const WHATSAPP_MESSAGE = "Hi PM Enterprises, I'd like a quote for fire safety products/installation.";

function FloatingContact() {
    return (
        <div className="floating-contact" role="complementary" aria-label="Quick contact">
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="floating-contact-btn floating-contact-whatsapp"
                aria-label="Chat with us on WhatsApp"
            >
                <MessageCircle size={24} strokeWidth={2} />
            </a>
            <a
                href={`tel:${PHONE_E164}`}
                className="floating-contact-btn floating-contact-call"
                aria-label="Call PM Enterprises now"
            >
                <Phone size={22} strokeWidth={2} />
            </a>
        </div>
    );
}

export default FloatingContact;
