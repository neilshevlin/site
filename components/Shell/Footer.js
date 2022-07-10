import React from 'react';
import { AppLink as Link } from '../AppLink';
import { ThemeToggle } from '.';

export function Footer({ children: links, landing }) {

  const toggle = <ThemeToggle />;

  return (
    <>
      <footer className="desktop">
        <Link href="/" className="flex">
            Neil Shevlin
          </Link>
        <div className="flex">
          <div className="right gap">
            {toggle}
          </div>
        </div>
      </footer>
      <footer className="mobile gap">
        {toggle}
      </footer>
      <style jsx>
        {`
          :global(.gap) {
            display: flex;
            align-items: center;
            gap: 1.5rem;
          }

          footer {
            position: relative;
            display: flex;
            z-index: 100;
            width: 100%;
            color: var(--dark);
            padding: 1rem 0;
          }

          footer.desktop {
            flex-direction: column;
          }

          footer.mobile {
            display: none;
            flex-direction: column;
            padding: 0;
          }

          .right {
            margin-left: auto;
          }

          @media screen and (max-width: 600px) {
            footer.mobile {
              display: flex;
            }
            footer.desktop {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
