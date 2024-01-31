import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'We CR AFT love C R AFT  BOAT',
    },
  ],
  image: 'https://zizzamia.xyz/park-1.png',
  post_url: 'https://zizzamia.xyz/api/frame',
});

export const metadata: Metadata = {
  title: 'CR AFT ',
  description: 'LFG',
  openGraph: {
    title: 'CR AFT ',
    description: 'LFG',
    images: ['https://zizzamia.xyz/park-1.png'],
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
