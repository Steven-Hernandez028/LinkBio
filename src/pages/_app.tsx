import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
// const inconsolata = Inconsolata({
//   weight: '400',
//   subsets: ['latin']
// })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>
        {`

        *{
          padding: 0px;
          margin: 0px;
        }
        html{
          font-family:${inter.style.fontFamily};
          background:#060528;
          box-sizing: border-box;
          font-size: 16px;
          overflow-x: hidden;
   
        }
  
     
      `}
      </style>
  

      <Component {...pageProps} />
  
      </>
    
    
  );
}
