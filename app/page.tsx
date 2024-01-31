import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'We CR AFT love C R AFT  BOAT',
    },
  ],
  image: 'https://static.wixstatic.com/media/98b7da_a16c6d1118d147968a001fc2cd1885ad~mv2.jpg',
  post_url: 'https://zizzamia.xyz/api/frame',
});

export const metadata: Metadata = {
  title: 'CR AFT ',
  description: 'LFG',
  openGraph: {
    title: 'CR AFT ',
    description: 'LFG',
    images: ['https://static.wixstatic.com/media/98b7da_a16c6d1118d147968a001fc2cd1885ad~mv2.jpg'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>CR AFT </h1>
    </>
  );
}
