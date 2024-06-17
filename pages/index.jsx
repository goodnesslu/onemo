/* eslint-disable @next/next/no-img-element */
import GithubStar from '@/components/utils/github-star';
import { GithubIcon, GlobeIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Button from '@/components/shared/ui/button';
import Marquee from 'react-fast-marquee';
import Accordion from '@/components/shared/ui/accordian';

export const metadata = {
  title: 'Onemo',
  description:
    'The innovative link-in-bio platform that serves as a gateway to the many dimensions of your life. Seamlessly connect your audience to your professional achievements, personal passions, and creative projects. Explore more with Onemore!',
};

const Home = () => {
  const session = useSession();
  const isAuthenticated = session.status === 'authenticated' ? true : false;

  const icons = [
    'https://utfs.io/f/00cc3b7f-e5ba-476f-8bfc-790ebab3a064-23vwy.svg',
    'https://utfs.io/f/74a5dfad-3229-48a2-ac22-a60a8e25f7fb-1tcheo.svg',
    'https://utfs.io/f/4ffdc03c-5c6b-44d9-962e-5cee3d4bd3a2-1tchep.svg',
  ];

  const features = [
    {
      title: 'Share Your Passion',
      text: "Express and share what you love with the world. Whether it's your hobby, profession, or a unique talent, let your passion shine through and connect with like-minded individuals.",
    },
    {
      title: 'Showcase Crafts',
      text: 'Display your creative works and projects. From intricate handmade items to digital products, showcase your products and attract a community that appreciates your skills.',
    },
    {
      title: 'Get Supported',
      text: 'Empower your journey by gaining support from your community. Share your dreams and goals, and enable your followers to contribute and help turn your aspirations into reality.',
    },
  ];

  return (
    <>
      <Head>
        <title>Onemo</title>
        {/* <!-- Open Graph (OG) meta tags --> */}
        <meta property="og:url" content="https://onemo.me/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="You are more than your bio - Onemo"
        />
        <meta property="og:title" content="Onemo" />
        <meta
          property="og:description"
          content="The innovative link-in-bio platform that serves as a gateway to the many dimensions of your life. Seamlessly connect your audience to your professional achievements, personal passions, and creative projects. Explore more with Onemore!"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://librelinks.vercel.app/og.png"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://librelinks.me/og.png"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://www.librelinks.me/og.png"
        />

        {/* <!-- Twitter Card meta tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@goodnesslu" />
        <meta name="twitter:creator" content="@goodnesslu" />
        <meta property="twitter:domain" content="https://onemo.me/" />

        <meta property="twitter:url" content="https://onemo.me/" />
        <meta name="twitter:title" content="Onemo" />
        <meta
          name="twitter:description"
          content="The innovative link-in-bio platform that serves as a gateway to the many dimensions of your life. Seamlessly connect your audience to your professional achievements, personal passions, and creative projects. Explore more with Onemore!"
        />
        <meta
          name="twitter:image"
          content="https://librelinks.vercel.app/og.png"
        />
        <meta name="twitter:image" content="https://librelinks.me/og.png" />
        <meta name="twitter:image" content="https://www.librelinks.me/og.png" />
        <meta
          data-rh="true"
          name="twitter:image:alt"
          content="The innovative link-in-bio platform that serves as a gateway to the many dimensions of your life. Seamlessly connect your audience to your professional achievements, personal passions, and creative projects. Explore more with Onemore!"
        />

        {/* <!-- LinkedIn meta tags --> */}
        {/* <meta
          property="og:linkedin:image"
          content="https://librelinks.vercel.app/og.png"
        />
        <meta
          property="og:linkedin:image"
          content="https://librelinks.me/og.png"
        />
        <meta
          property="og:linkedin:image"
          content="https://www.librelinks.me/og.png"
        />
        <meta property="og:linkedin:title" content="Librelinks" />
        <meta
          property="og:linkedin:description"
          content="Librelinks is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        /> */}

        {/* <!-- Facebook meta tags --> */}
        {/* <meta
          property="og:facebook:image"
          content="https://librelinks.vercel.app/og.png"
        />
        <meta
          property="og:facebook:image"
          content="https://librelinks.me/og.png"
        />
        <meta
          property="og:facebook:image"
          content="https://www.librelinks.me/og.png"
        />
        <meta property="og:facebook:title" content="Librelinks" />
        <meta
          property="og:facebook:description"
          content="Librelinks is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        /> */}

        {/* <!-- Instagram meta tags --> */}
        {/* <meta
          property="og:instagram:image"
          content="https://librelinks.vercel.app/og.png"
        />
        <meta
          property="og:instagram:image"
          content="https://librelinks.me/og.png"
        />
        <meta
          property="og:instagram:image"
          content="https://www.librelinks.me/og.png"
        />
        <meta property="og:instagram:title" content="Librelinks" />
        <meta
          property="og:instagram:description"
          content="Librelinks is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        /> */}

        {/* <!-- Pinterest meta tags --> */}
        {/* <meta
          property="og:pinterest:image"
          content="https://librelinks.vercel.app/og.png"
        />
        <meta
          property="og:pinterest:image"
          content="https://librelinks.me/og.png"
        />
        <meta
          property="og:pinterest:image"
          content="https://www.librelinks.me/og.png"
        />
        <meta property="og:pinterest:title" content="Librelinks" />
        <meta
          property="og:pinterest:description"
          content="Librelinks is an opensource link in bio tool that helps you easily manage your links, transforming your online presence."
        /> */}
      </Head>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-y-0 w-full h-full"
            aria-hidden="true"
          ></div>
          <div className="relative pt-4">
            <div className="border-b-2 border-black">
              <div className="px-4 mx-auto mb-6 max-w-7xl sm:px-6">
                <nav
                  className="relative flex items-center justify-between md:justify-start"
                  aria-label="Global"
                >
                  <Link
                    className="flex items-center justify-center gap-2 font-bold text-xl"
                    href="/"
                  >
                    <Image
                      src={
                        'https://utfs.io/f/c0930d4e-af20-48bf-af90-9170d548c238-7zmgxc.png'
                      }
                      alt="Onemo Logo"
                      width={38}
                      height={38}
                    />
                    <h3 className="lg:block mt-[5px] font-bold text-3xl">
                      Onemo
                    </h3>
                  </Link>

                  <div className="relative items-center w-28 z-10 md:absolute md:inset-y-0 md:right-0 ">
                    <Link
                      // className=" inline-flex items-center gap-2 px-8 py-3 text-md bg-blue-800 rounded-md text-white justify-center font-semibold transition-colors hover:bg-blue-950"
                      rel="noopener noreferrer"
                      href="/admin"
                    >
                      <Button className="">
                        {isAuthenticated ? 'Profile' : 'Login'}
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>

            <div className="px-4 mx-auto max-w-7xl  sm:px-4">
              <header className="flex  w-full h-screen flex-col items-center justify-center">
                <div className="mx-auto w-container max-w-full py-[120px] text-center lg:py-[100px]">
                  <h1 className="text-5xl w-full md:w-[90%] mx-auto font-heading md:text-5xl lg:text-6xl">
                    A Page to Share Your World with{' '}
                    <span className="text-mainAccent">Everyone</span>
                  </h1>
                  <p className="my-12 md:w-[70%] mx-auto mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed">
                    Showcase your unique journey, connect with and build a
                    supportive community. Click below to start sharing more.
                  </p>
                  <Link href="/admin">
                    <Button
                      size="lg"
                      className="mx-auto text-base font-heading md:text-lg lg:h-14 lg:text-xl"
                    >
                      {isAuthenticated ? 'Manage Your Page' : 'Claim Your Link'}
                    </Button>
                  </Link>
                </div>
              </header>
            </div>

            <section className="border-t-2 overflow-hidden border-t-foreground bg-bg py-20 font-base lg:py-[100px]">
              <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
                Uncover the Magic
                <span className=" align-top text-[1rem]">★</span>
              </h2>

              <div className="mx-auto grid w-screen grid-cols-1 gap-5 px-12 sm:grid-cols-2 md:px-24 lg:grid-cols-3">
                {features.map((feature, i) => (
                  <div
                    className={`flex flex-col gap-3 rounded-base border-2 border-black bg-white px-8 py-5 shadow-base ${
                      i === features.length - 1 && features.length < 4
                        ? 'md:col-span-3 lg:col-span-1'
                        : ''
                    }`}
                    key={i}
                  >
                    <img
                      className="h-12 w-12 rounded-base"
                      src={`${icons[i]}`}
                      alt="icon"
                    />

                    <h4 className="mt-2 text-xl font-heading">
                      {feature.title}
                    </h4>
                    <p>{feature.text}</p>
                  </div>
                ))}
              </div>
            </section>
            <div>
              <Marquee
                className="border-y-2 border-y-foreground bg-background py-3 font-base sm:py-5"
                direction="left"
              >
                {Array(10)
                  .fill('xd')
                  .map((x, id) => (
                    <div className="flex items-center" key={id}>
                      <span className="mx-10 text-xl font-heading sm:text-2xl lg:text-4xl">
                        Join our 100+ creator community
                      </span>
                      <img
                        className="w-[35px] sm:w-[45px]"
                        src={`${icons[2]}`}
                        alt="star"
                      />
                    </div>
                  ))}
              </Marquee>
            </div>

            {/* FAQ */}

            <section className=" bg-bg py-20 font-base">
              <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
                Frequently asked questions
              </h2>

              <div className="flex flex-col gap-4 mx-auto px-4 md:w-[60%] lg:w-[70%]">
                <Accordion
                  question="Why do I need Onemo?"
                  answer="Onemo provides a streamlined solution to showcase all aspects
                  of your online presence in one place. Whether you're a
                  creator, entrepreneur, or influencer, Onemo helps you
                  effectively connect with your audience by offering a central
                  hub for all your important links and information.
                  With Onemo, you can simplify the process of sharing your
                  content and engaging with your community, ultimately saving
                  you time and enhancing your online presence"
                />
                <Accordion
                  question="Is Onemo the best tool to connect my community?"
                  answer="While we believe Onemo offers a fantastic platform for
                  community engagement, the 'best' tool depends on your specific
                  needs and goals.
                  
                  Onemo is designed to provide a user-friendly interface for
                  both creators and their communities, offering features like
                  link management, community support, and seamless integration
                  with social media platforms.
                  
                  We encourage you to explore Onemo's features and see how they
                  align with your community-building objectives."
                />
                <Accordion
                  question="Can I get paid after donations from my community through Onemo?"
                  answer="Yes, Onemo offers a convenient way for you to receive
                  financial support from your community.
                  
                  By integrating payment options such as donation links, tip
                  jars, or subscription services, you can easily monetize your
                  content and receive direct support from your audience.
                  
                  Onemo empowers creators to leverage their community's
                  generosity and turn their passion into a sustainable income
                  stream."
                />
                <Accordion
                  question="Where can I use my Onemo.me link?"
                  answer="Your Onemo link is like a handy tool that brings all your
                  important online stuff together and makes it easy for people
                  to find.
                  
                  You can put it in places like your Instagram, Twitter,
                  LinkedIn, or TikTok bio to show all your links in one spot.
                  Also, by adding it to your website, blog, email signature,
                  YouTube channel, or business cards, it helps people move
                  around smoothly, so they can check out your work, follow you
                  on social media, or find other helpful things with no trouble."
                />
              </div>
            </section>
            <footer className="font-base border-t-2 border-black bg-background flex px-5 md:px-24 py-5 w-screen items-center justify-between text-center ">
              <p>Legal</p>
              <p>Copyright 2024, Onemo, Inc.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
