import * as React from 'react';
import Latex from 'react-latex-next'
import 'katex/dist/katex.min.css';
export function LatexTag({ children }) {
  return <Latex>{children}</Latex>;
}