import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = ({user}) => {

    const handleSubscribe = () => {
        if (!user) {
            alert("Please log in to subscribe.");
            return;
        }
        alert("Subscribed!");
    };

    return (
        <footer style={{ background: '#222', color: '#fff', padding: '40px 0 20px' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '40px'
            }}>
                {/* Newsletter */}
                <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
                    <h3 style={{ marginBottom: '16px' }}>Subscribe to our Newsletter</h3>
                    <form style={{ display: 'flex', gap: '8px' }}>
                        <input
                            type="email"
                            placeholder="Your email"
                            style={{
                                padding: '10px',
                                borderRadius: '4px 0 0 4px',
                                border: 'none',
                                outline: 'none',
                                flex: '1',
                                color: '#333'
                            }}
                            required
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                borderRadius: '0 4px 4px 0',
                                border: 'none',
                                background: '#ff6f61',
                                color: '#fff',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Links */}
                <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
                    <h4 style={{ marginBottom: '16px' }}>Shop</h4>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li><a href="/men" style={{ color: '#fff', textDecoration: 'none' }}>Men's Clothing</a></li>
                        <li><a href="/women" style={{ color: '#fff', textDecoration: 'none' }}>Women's Clothing</a></li>
                        <li><a href="/kids" style={{ color: '#fff', textDecoration: 'none' }}>Kids</a></li>
                        <li><a href="/accessories" style={{ color: '#fff', textDecoration: 'none' }}>Accessories</a></li>
                        <li><a href="/sale" style={{ color: '#fff', textDecoration: 'none' }}>Sale</a></li>
                    </ul>
                    
                </div>
                {/*Help*/}
                <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
                    <h4 style={{ marginBottom: '16px' }}>Help</h4>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
                        <li><a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a></li>
                        <li><a href="/returns" style={{ color: '#fff', textDecoration: 'none' }}>Returns</a></li>
                        <li><a href="/shipping" style={{ color: '#fff', textDecoration: 'none' }}>Shipping Info</a></li>
                    </ul>
                </div>
                {/* Contact */}
                <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
                    <h4 style={{ marginBottom: '16px' }}>Contact</h4>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
                        <li><a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a></li>
                        <li><a href="/returns" style={{ color: '#fff', textDecoration: 'none' }}>Returns</a></li>
                        <li><a href="/shipping" style={{ color: '#fff', textDecoration: 'none' }}>Shipping Info</a></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div style={{ flex: '1 1 150px', minWidth: '120px'}}>
                    <h4 style={{ marginBottom: '16px' }}>Follow Us</h4>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem' }}>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.95rem', color: '#aaa' }}>
                &copy; {new Date().getFullYear()} Clothing Store. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;