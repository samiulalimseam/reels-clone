import React, { useEffect } from 'react'
import Header from './header'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = pathname.split('/').pop().toUpperCase() || 'HOME'
  }, [pathname]
  )
  const isShopify = window.Shopify
  if (isShopify) {
    return <Outlet />
  }
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
