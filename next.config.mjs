/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", // Applies the CSP to all routes
          headers: [
            {
              key: "Content-Security-Policy",
              value: `
                default-src 'self';
                script-src 'self';
                connect-src 'self' http://api.openweathermap.org https://api.openweathermap.org https://api.open-meteo.com;
                img-src 'self' data:;
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                font-src 'self' https://fonts.gstatic.com;
              `.replace(/\s{2,}/g, ' ').trim(), // Clean up extra spaces
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  