'use client';
import Link from 'next/link';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore swiper types
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

function Pattern() {
  return (
    <svg viewBox="0 0 320 640" className="w-[320px] h-full hidden md:block" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="160" height="160" className="fill-brand" />
      <circle cx="240" cy="80" r="80" className="fill-gray-700" />
      <rect x="0" y="160" width="160" height="160" className="fill-brand-2" />
      <rect x="160" y="160" width="160" height="160" className="fill-brand-3" />
      <circle cx="80" cy="400" r="80" className="fill-brand-light" />
      <rect x="160" y="320" width="160" height="160" className="fill-gray-800" />
      <rect x="0" y="480" width="160" height="160" className="fill-gray-700" />
      <circle cx="240" cy="560" r="80" className="fill-brand" />
    </svg>
  );
}

export default function Home() {
  return (
    <Layout>
      <section className="w-full max-w-7xl mx-auto flex">
        <div className="relative flex-1">
          <Swiper modules={[Navigation]} navigation className="h-full">
            {[1,2,3].map((i) => (
              <SwiperSlide key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/hero/${i}.svg`} alt="slide" className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <h2 className="heading-lg absolute left-4 bottom-4 max-w-sm">
            Uma escola forte, inovadora e humanizada.
          </h2>
        </div>
        <Pattern />
      </section>
      <div className="mt-6 flex gap-4">
        <Link href="/portal" aria-label="Portal">
          <Button>Portal</Button>
        </Link>
        <Link href="/about" aria-label="About">
          <Button variant="ghost">About</Button>
        </Link>
      </div>
    </Layout>
  );
}
