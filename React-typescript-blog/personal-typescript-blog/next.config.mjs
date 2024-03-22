/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        dangerouslyAllowSVG: true,
        domains: ["tailwindui.com", "images.unsplash.com", "eincode.com", "thrangra.sirv.com"]
      }
};

export default nextConfig;
