import crypto from 'crypto';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const nonce = crypto.randomBytes(16).toString('base64');

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              connect-src 'self' http://api.openweathermap.org https://api.openweathermap.org https://api.open-meteo.com;
              img-src 'self' https://*.tile.openstreetmap.org data:;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              report-uri /csp-report-endpoint;  /* Optional: For CSP violation reporting */
            `.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
