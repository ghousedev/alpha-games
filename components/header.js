import React from 'react';
import { useRouter } from 'next/router';
import IndexNavigation from './index-navigation';
import OtherNavigation from './other-navigation';

export default function Header() {

  const router = useRouter();

  if (router.pathname === '/') {
    return (
      <IndexNavigation />
    )
  } else {
    return (
      <OtherNavigation />
    )
  }
}