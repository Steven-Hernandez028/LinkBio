/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    API_KEY: process.env.API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    PAYPAL_ID:process.env.PAYPAL_ID,
  }
}

module.exports = nextConfig

