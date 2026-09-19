console.log('--- Loading next.config.mjs ---');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    // Force environment variable refresh
    NEXT_PUBLIC_DIRECTUS_URL: process.env.NEXT_PUBLIC_DIRECTUS_URL,
  },
  
  // Image configuration
  images: {
    unoptimized: false,
    // Fallback patterns just in case the loader isn't used
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sportsorthopedics.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'directus-production-d39c.up.railway.app',
        pathname: '/assets/**',
      }
    ],
  },

  // Increase build memory limit for production builds
  experimental: {
    memoryBasedWorkersCount: true,
    workerThreads: true,
    optimizeCss: true,
  },

  // Set higher memory limit for builds
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // Enable source maps in development only
  productionBrowserSourceMaps: false,

  async headers() {
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
    
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: allowedOrigins.join(','),
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400',
          },
        ],
      },
      {
        source: '/widget',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: allowedOrigins.join(','),
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
      {
        source: '/embed.js',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: allowedOrigins.join(','),
          },
          {
            key: 'Content-Type',
            value: 'application/javascript',
          },
        ],
      },
    ];
  },

  // Optimize production builds
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  // Handle the .next directory permissions
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config, {
        optimization: {
          ...config.optimization,
          minimize: true,
        },
      });
    }
    return config;
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      // --- Legacy /posts/* (was a rewrite, which duplicated content under a
      //     second URL). Now a permanent redirect to the top-level slug. ---
      { source: '/posts', destination: '/blogs', permanent: true },
      { source: '/posts/:slug*', destination: '/:slug*', permanent: true },

      // --- Publications legacy paths ---
      { source: '/publication/:slug', destination: '/publications/:slug', permanent: true },
      { source: '/publication', destination: '/publications', permanent: true },

      // --- Appointment/booking legacy paths ---
      { source: '/my-bookings', destination: '/appointment-booking-info', permanent: true },
      { source: '/appointment-cancellation-confirmation', destination: '/appointment-booking-info', permanent: true },
      { source: '/appointment-reschedule', destination: '/appointment-booking-info', permanent: true },
      { source: '/bookingpress-complete-payment', destination: '/appointment-booking-info', permanent: true },

      // --- Cannibalisation: merge duplicate procedure pages into the Bangalore
      //     lander that carries the rankings. ---
      { source: '/procedure-surgery/acl-reconstruction', destination: '/acl-reconstruction-surgery-in-bangalore', permanent: true },
      { source: '/procedure-surgery/meniscal-repair', destination: '/acl-reconstruction-and-meniscus-repair', permanent: true },
      { source: '/procedure-surgery/rotator-cuff-repair', destination: '/rotator-cuff-surgery-in-bangalore', permanent: true },
      { source: '/procedure-surgery/hip-replacement-thr', destination: '/total-hip-replacement-in-bangalore', permanent: true },

      // --- Legacy WordPress single-word paths ---
      { source: '/meniscalrepair', destination: '/acl-reconstruction-and-meniscus-repair', permanent: true },
      { source: '/wrist-pain', destination: '/bone-joint-school', permanent: true },

      // --- Dead routes removed from the app (redirect any stale inbound links) ---
      { source: '/categories', destination: '/', permanent: true },
      { source: '/categories/:path*', destination: '/', permanent: true },
      { source: '/pages', destination: '/', permanent: true },
      { source: '/pages/:path*', destination: '/', permanent: true },
      { source: '/design', destination: '/', permanent: true },
      { source: '/design/:path*', destination: '/', permanent: true },
      { source: '/surgeons-staff/test-directus', destination: '/surgeons-staff', permanent: true },
    ];
  }
};

// Use ESM export for .mjs files
export default nextConfig; 