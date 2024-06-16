import { Share2, GithubIcon } from 'lucide-react';
import Link from 'next/link';
import useMediaQuery from '@/hooks/use-media-query';

const ShareButton = () => {
  const isMobile = useMediaQuery();
  return (
    <>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2  text-black py-2 px-2 lg:px-4 h-12 border-black border-2 p-2.5 hover:bg-bg hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md">
          <Share2 size={17} />
          <h3 className="text-sm">Share</h3>
        </button>
        {/* <Link
          href="https://github.com/urdadx/librelinks"
          target="_blank"
          className="flex items-center gap-2  text-black py-2 px-2 lg:px-4 h-12 border-black border-2 p-2.5 hover:bg-bg hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
        >
          <GithubIcon size={isMobile ? 20 : 17} />
          <h3 className="text-sm lg:flex md:hidden hidden">Star on Github</h3>
        </Link> */}
      </div>
    </>
  );
};

export default ShareButton;
