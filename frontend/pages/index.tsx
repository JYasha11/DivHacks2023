import { Hero, Team, WhatWeDo } from '@/components/home';
import { Navbar } from '@/components/shared';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Team />
    </div>
  );
}
