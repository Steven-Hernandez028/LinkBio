/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env:{
    API_KEY: process.env.API_KEY,
    FROM_EMAIL: process.env.FROM_EMAIL,
    PAYPAL_ID:process.env.PAYPAL_ID,
    TEMPLATE_ID:process.env.TEMPLATE_ID,
  },

  images:{
        remotePatterns:[
          {
            protocol:'https',
            hostname : 'i.ibb.co',
            port:'',
            pathname:'/7QzjNGR/Tiger-XV-a-pixel-art-of-a-interstellar-black-hole-4k-dde3f792-0691-45b4-a445-176b8f51460f.png'
          }
        ]
  }
}

module.exports = nextConfig

