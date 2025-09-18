const express = require('express');
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Initialize Liquid template engine
const engine = new Liquid({
  root: __dirname,
  extname: '.liquid'
});

// Set up template engine
app.engine('liquid', engine.express());
app.set('views', __dirname);
app.set('view engine', 'liquid');

// Serve static assets
app.use('/attached_assets', express.static(path.join(__dirname, 'attached_assets')));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(__dirname));

// Route for main static page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for blog home
app.get('/blog-home', (req, res) => {
  // Mock data for blog home template
  const mockData = {
    settings: {
      home_page_blog_limit: 6,
      home_page_blog_button_link: '/blogs/all'
    },
    blogs: {
      'foxx-blog': {
        articles: [
          {
            id: 1,
            title: 'Latest Updates from Foxx Life Sciences',
            published_at: '2025-01-15',
            image: 'attached_assets/image_1758137628765.png',
            summary: 'Stay updated with our latest innovations in bioprocessing.',
            url: '/blog/latest-updates'
          }
        ]
      },
      'foxx-podcast': {
        articles: []
      },
      'foxx-in-news': {
        articles: []
      }
    }
  };
  
  res.render('blog-home', mockData);
});

// Route for blog listing
app.get('/blog', (req, res) => {
  // Mock data for blog template
  const mockData = {
    blog: {
      title: 'Foxx Life Sciences Blog',
      handle: 'foxx-blog',
      tags: ['Bioprocessing', 'Innovation', 'Technology'],
      articles: [
        {
          id: 1,
          title: 'Understanding Single Use Technology',
          published_at: '2025-01-15',
          image: 'attached_assets/image_1758137628765.png',
          content: 'Learn about the advantages of single use technology in bioprocessing...',
          tags: ['SUT', 'Bioprocessing'],
          url: '/blog/single-use-technology'
        }
      ]
    }
  };
  
  res.render('blog', mockData);
});

// Route for why-foxxbioprocess page
app.get('/why-foxxbioprocess', (req, res) => {
  res.render('why-foxxbioprocess');
});

// Route for theme (main Shopify-style theme template)
app.get('/theme', (req, res) => {
  // Mock data for theme template
  const mockData = {
    shop: {
      name: 'Foxx Life Sciences',
      description: 'Leading provider of single-use technology solutions',
      url: 'https://foxxlifesciences.com'
    },
    page_title: 'Foxx Life Sciences - Single Use Technology Solutions',
    request: {
      locale: { iso_code: 'en' },
      origin: 'http://localhost:5000'
    },
    settings: {
      color_primary: '#1565c0',
      favicon_enable: true
    },
    content_for_header: '',
    canonical_url: 'http://localhost:5000/theme'
  };
  
  res.render('theme', mockData);
});

// Handle 404 for other routes
app.use((req, res) => {
  const filePath = path.join(__dirname, req.path);
  
  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Page not found');
  }
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log('Available routes:');
  console.log('- / (Main plastic molding services website)');
  console.log('- /blog-home (Blog home with Liquid template)');
  console.log('- /blog (Blog listing with Liquid template)');
  console.log('- /why-foxxbioprocess (Why Foxx Bioprocess page)');
  console.log('- /theme (Main Shopify theme template)');
});