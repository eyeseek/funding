
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { useEffect} from 'react'
import Script from 'next/script'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import axios from 'axios';




import Header from '../sections/Header'
import Footer from '../sections/Footer'
import Poweredby from  '../sections/Poweredby'
import Faq from './Faq'
import Title from '../components/typography/Title'
import Subtitle from '../components/typography/Subtitle'
import Button from '../components/buttons/Button'




const Container = styled.div`
  margin-top: 1%;
`;

const EyeSevenBox = styled.div`
    text-align: center;
    position: relative;
`


const Home: NextPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  // Web3 Auth handling
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();


  const handleAuth = async () => {
    if (isConnected) {
        await disconnectAsync();
    }

    const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

    const userData = { address: account, chain: chain.id, network: 'evm' };
    console.log(userData)

    const { data } = await axios.post('/api/auth/request-message', userData, {
        headers: {
            'content-type': 'application/json',
        },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // redirect user after success authentication to '/dashboard' page
    // @ts-ignore
    const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
    /**
     * instead of using signIn(..., redirect: "/dashboard")
     * we get the url from callback and push it to the router to avoid page refreshing
     */
    push(url);
};

  return (
    
    <Container>
      <Head>
        <title>Eyeese Seek Fund</title>
        <meta name="title" content="Blockchain crowdfunding application powered by Moralis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
   
    <Header/>
      <Title text='Components/Typography/Title'/>
      <Subtitle text='Components/Typography/Subtitle'/>
     <Faq/>


      <EyeSevenBox>
            </EyeSevenBox>
      <Footer/>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TKH8YE4L07"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TKH8YE4L07');
        `}
      </Script> */}


     


            
    </Container>
  )
}

export default Home

/*<Button text={'Components/buttons/button'}/>*/