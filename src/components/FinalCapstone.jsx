import './FinalCapstone.css'

function FinalCapstone() {
  return (
    <section id="capstone" className="section capstone-section">
      <div className="section-header">
        <p className="section-kicker">Final-Year Capstone Project</p>
        <h2>Final-Year Capstone Project</h2>
      </div>

      <div className="capstone-layout">
        <div className="capstone-summary">
          <h3>BOLT Market: An AI-Enhanced, Blockchain-Enabled Digital Multi-Vendor Marketplace for Kenya</h3>
          <h4>Problem statement</h4>
          <p>Kenya has experienced rapid growth in digital commerce, largely driven by widespread mobile-money adoption and increasing internet accessibility. However, many small and medium-sized businesses still face challenges when moving their operations online, including limited access to trustworthy digital marketplaces, fragmented seller and customer experiences, difficulties managing inventory and orders, and concerns around transaction transparency and consumer trust.

Existing e-commerce platforms provide important marketplace functionality, but opportunities remain to improve trust, intelligent product discovery, seller management, transaction traceability, and operational efficiency within a platform designed around the needs of the Kenyan market.

BOLT Market addresses this problem by developing a centralized multi-vendor digital marketplace that combines conventional e-commerce functionality with artificial intelligence, blockchain technologies, secure APIs, and mobile-first design. The system is intended to provide customers, vendors, administrators, delivery personnel, and other platform participants with a unified digital ecosystem for discovering products, conducting transactions, managing orders, and coordinating fulfilment.</p>

          <h4>Background</h4>
          <p>Kenya's digital economy has expanded significantly through mobile connectivity, digital payments, smartphones, and online services. These developments create opportunities for local businesses to reach customers beyond their physical locations.

Despite this progress, many businesses still rely on fragmented channels such as social media pages, messaging applications, manual order processing, and informal payment and delivery arrangements. These approaches can make inventory management, order tracking, customer support, verification, and transaction records difficult to manage at scale.

BOLT Market was conceived as a technology-based response to these challenges. The project explores how modern technologies such as AI, blockchain, cloud computing, mobile applications, and API-driven architectures can be integrated into a practical marketplace platform.

The project is also aligned with Kenya's broader digital transformation objectives and the development of an innovation-driven digital economy under Kenya Vision 2030.</p>

          <h4>Project objectives</h4>
          <ul>
            <li>Develop a secure multi-vendor marketplace connecting customers with multiple sellers.</li>
            <li>Provide vendors with tools for product, inventory, pricing, order, and sales management.</li>
            <li>Implement secure authentication, authorization, API communication, and role-based access control.</li>
            <li>Integrate AI capabilities to improve product discovery, recommendations, search, and selected marketplace operations.</li>
            <li>Explore blockchain technology for improving the integrity and traceability of selected transaction records.</li>
            <li>Provide order-management and delivery-management functionality.</li>
            <li>Develop administrative and moderation dashboards for monitoring and managing the marketplace.</li>
            <li>Design a scalable architecture capable of supporting future growth in users, vendors, products, and transactions.</li>
            <li>Apply software engineering, cybersecurity, database management, cloud, and API-development principles throughout the system.</li>
          </ul>

          <div className="capstone-links">
            <a className="button secondary" href="#projects">Back to Projects</a>
          </div>
        </div>

        <div className="capstone-details">
          <h3>Case Study</h3>

          <section>
            <h4>Proposed solution</h4>
            <p>BOLT Market is a multi-vendor digital marketplace consisting of interconnected applications and services.

Customers can browse products, search and filter listings, view product information, add items to a cart, place orders, make payments, and track their orders.

Vendors can create and manage storefronts, upload products, manage inventory, process orders, and monitor their marketplace activity.

The platform also incorporates specialized interfaces for administrative, moderation, property, and delivery operations where required by the marketplace workflow.

An AI layer is incorporated to support capabilities such as intelligent search, product recommendations, product categorization, and selected automated marketplace processes.

Blockchain technology is explored as an additional trust and audit layer for appropriate records where immutability and traceability provide value, rather than using blockchain indiscriminately for all application data.</p>
          </section>

          <section>
            <h4>System architecture</h4>
            <p>BOLT Market follows a modular, API-driven architecture designed to separate presentation, application, data, and supporting services.

The main architectural components include:

1. Client applications

Flutter mobile application
Web-based dashboards
Customer-facing marketplace interfaces
Vendor dashboard
Delivery dashboard
Administration and moderation interfaces

2. Backend/API layer

RESTful APIs
Authentication and authorization
Business logic
Product and inventory management
Cart and order processing
Payment processing
User management
Notifications
Delivery coordination

3. Data layer

MongoDB for application data
Structured collections for users, products, vendors, orders, transactions, and related marketplace entities
Appropriate indexing and database optimization mechanisms

4. AI services

Product recommendation
Intelligent search
Product categorization
Potential conversational and decision-support capabilities

5. Blockchain layer

Selected transaction or verification records
Tamper-evident audit information
Verification of relevant marketplace events

6. Security and infrastructure

Role-based access control
Password hashing
Token-based authentication
Input validation and sanitization
Rate limiting
API security
Logging and monitoring
Secure configuration and environment management

The architecture is designed to allow individual services to evolve independently while maintaining communication through well-defined APIs.</p>
          </section>

          <section>
            <h4>Technologies</h4>
            <p>Frontend

Flutter
Dart
Responsive/adaptive UI design

Backend

Node.js
Express.js
REST APIs
JavaScript

Database

MongoDB
MongoDB Atlas

Artificial Intelligence

Machine-learning/AI APIs and services
Recommendation and search algorithms
AI-assisted marketplace functionality

Blockchain

Blockchain/smart-contract technologies where appropriate
Cryptographic verification and immutable records

Authentication & Security

JWT/token-based authentication
Password hashing
Role-based access control
Input validation and sanitization
Rate limiting
Secure API practices

Development & Infrastructure

Git/GitHub
Visual Studio Code
Android Studio
Cloud-based development and deployment services
API testing and debugging tools</p>
          </section>

          <section>
            <h4>Implementation</h4>
            <p>Development followed an incremental software-engineering approach.

The project began with requirements analysis and architectural planning, followed by database modelling, backend API development, authentication, marketplace functionality, and client application development.

The major implementation stages included:

Requirements analysis and system specification.
System architecture and database design.
Backend and REST API development.
User registration, authentication, and authorization.
Vendor and product management.
Shopping cart and order-management functionality.
Payment and transaction workflows.
Delivery and order-tracking functionality.
Development of administrative and moderation dashboards.
Development of the Flutter mobile application.
Integration of AI-supported marketplace functionality.
Exploration and integration of blockchain-based verification mechanisms.
Security hardening and API optimization.
Testing, debugging, and performance improvements.
Deployment preparation and documentation.

The system was developed as a modular platform so that additional services and capabilities can be introduced without requiring a complete redesign of the application.</p>
          </section>

          <section>
            <h4>Results</h4>
            <p>The project resulted in a functional prototype of a digital multi-vendor marketplace ecosystem capable of supporting different marketplace participants through dedicated interfaces and backend services.

The implemented system provides a foundation for:

Customer account management.
Vendor onboarding and marketplace management.
Product listing and discovery.
Shopping-cart functionality.
Order processing and management.
Inventory management.
Delivery workflows.
Administrative management.
Moderation capabilities.
Secure API communication.
Mobile marketplace access.
AI-assisted marketplace functionality.
Blockchain-supported transaction or record verification.

The project demonstrates how conventional e-commerce architecture can be extended with emerging technologies to create a more intelligent, auditable, and scalable digital marketplace.</p>
          </section>

          <section>
            <h4>Limitations & Future improvements</h4>
            <p>As a final-year capstone project, BOLT Market has limitations associated with development time, infrastructure resources, access to production-scale datasets, and the complexity of integrating emerging technologies into a single platform.

Potential future improvements include:

Development of more advanced AI recommendation models using larger real-world datasets.
Expansion of AI-powered customer-support and conversational shopping capabilities.
More extensive blockchain integration for supply-chain and transaction verification.
Integration with additional Kenyan payment providers and financial services.
Advanced fraud and anomaly detection.
Real-time logistics and delivery optimization.
Improved offline and low-connectivity functionality.
Advanced analytics for vendors and administrators.
Microservices-based deployment as platform usage increases.
Automated CI/CD pipelines and more comprehensive observability.
Load balancing, caching, and additional performance optimization.
Expansion into additional African markets.
Comprehensive production-scale security and penetration testing.</p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default FinalCapstone
