import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Get started',
    links: [
      { href: '/docs/about', children: 'About Akatosh' },
      { href: '/docs/quick-start', children: 'Quick Start' },
    ]
  },
  {
    title: 'Spatial Queries',
    links: [
      { href: '/docs/tenements', children: 'Tenements' },
      { href: '/docs/areas-of-interest', children: 'Areas of interest' },
    ]
  },
  {
    title: 'Geophysical data',
    links: [
      { href: '/docs/gravity', children: 'Gravity' },
      { href: '/docs/magnetics', children: 'Magnetics' },
      { href: '/docs/radiometrics', children: 'Radiometrics' },
      { href: '/docs/electromagnetics', children: 'Electromagentics' },
      { href: '/docs/seismic', children: 'Seismic' }
    ]
  },
  {
    title: 'Data access',
    links: [
      { href: '/docs/bulk-downloads', children: 'Bulk downloads' },
      { href: '/docs/data-sharing', children: 'Data sharing' },
      { href: '/docs/tendering', children: 'Tendering data' },
      { href: '/docs/shop-and-download', children: 'Shop & download' }
    ]
  }
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
