# Plastic Molding Services & Bioprocess Website

## Overview

A dual-purpose website project that combines:
1. **Static HTML Website**: A complete plastic molding services website showcasing precision manufacturing solutions for various industries
2. **Liquid Template System**: Shopify-style templates for a bioprocessing e-commerce platform (Foxx Life Sciences)

The project has been successfully configured to run in the Replit environment with proper Express.js server handling both static content and dynamic Liquid templates.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Backend Architecture
- **Technology Stack**: Node.js with Express.js framework
- **Template Engine**: LiquidJS for processing Shopify-style templates
- **Server Configuration**: Express server running on port 5000 with 0.0.0.0 binding
- **Static Assets**: Served through Express static middleware

### Frontend Architecture
- **Main Website**: Pure HTML5 with embedded CSS for plastic molding services
- **Template Pages**: Liquid templates for blog, product, and e-commerce pages
- **Assets**: Extensive image gallery with generated industrial equipment images
- **Responsive Design**: Mobile-first approach with viewport support

### Project Structure
- `index.html` - Main plastic molding services website
- `server.js` - Express.js server with routing and Liquid template processing
- `*.liquid` files - Shopify-style templates (theme.liquid, blog.liquid, etc.)
- `attached_assets/` - Image assets and generated graphics
- `package.json` - Node.js dependencies and scripts

### Available Routes
- `/` - Main plastic molding services website
- `/blog-home` - Blog home with Liquid template processing
- `/blog` - Blog listing page
- `/why-foxxbioprocess` - Foxx Bioprocess information page
- `/theme` - Main Shopify theme template

## Recent Changes

### January 18, 2025 - Initial Replit Setup
- Installed Node.js 20 and required dependencies (Express, LiquidJS, http-server)
- Created Express.js server with proper routing for both static and template content
- Configured workflow to run on port 5000 with proper host binding (0.0.0.0)
- Set up deployment configuration for autoscale production deployment
- Added mock data structures for Liquid template processing

## External Dependencies

### Core Technologies
- **Node.js**: v20.19.3 runtime environment
- **Express.js**: Web framework for server functionality
- **LiquidJS**: Template engine for processing Shopify-style templates
- **HTML5/CSS3**: Modern web standards for static content

### Deployment Configuration
- **Target**: Autoscale deployment for stateless web application
- **Command**: `node server.js`
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 (allows proxy access in Replit iframe)