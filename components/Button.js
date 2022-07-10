import * as React from 'react';

export function Button({
  href,
  children,
}) {
  return (
    <a href={href}>
      {children}
    </a>
  );
}
