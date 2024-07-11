/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['sitegpt.ai','embed-ssl.wistia.com', 'fast.wistia.com','mnmxcrqbhvdpcqvzmvxh.supabase.co']
    }
};

export default nextConfig;
