import React from 'react';
import Link from 'next/link';

export function AppLink(props) {
  const target =
    props.target || (props.href.startsWith('http') ? '_blank' : undefined);
  
  // {...props} is the entire link object
  // eg Object {href: "/essays", passHref: false, replace: false, scroll: true, shallow: true, children: "Essays"}
  return (
    <Link {...props} passHref>
      <a
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        className={props.className}
      >
        {props.children}
      </a>

    </Link>
  );
}