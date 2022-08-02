/* global Prism */
import 'prismjs';

import * as React from 'react';
import copy from 'copy-to-clipboard';

import { Icon } from './Icon';

Prism.languages.sql = {
  comment: /--.*/,
  string: /(?:'[^'\\]*(?:\\[\s\S][^'\\]*)*'|"[^"\\]*(?:\\[\s\S][^"\\]*)*")/,
  number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  keyword: /\b(?:ADD|ALL|ALTER|AND|ANY|AS|ASC|AVERAGE|BETWEEN|BOTH|BY|CASE|CATCH|CHECK|CLEAR|COUNT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|DELETE|DESC|DISTINCT|DROP|ELSE|END|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|FALSE|FETCH|FIRST|FOR|FROM|FULL|FUNCTION|GRANT|GROUP|HAVING|HOLD|IDENTITY|IF|IN|INNER|INSERT|INTERSECT|INTO|IS|JOIN|LAST|LEFT|LEVEL|LIKE|LIMIT|LOOP|MATCH|MAX|MIN|MODIFY|NATURAL|NEXT|NO|NOT|NULL|OF|ON|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PRIMARY|PROCEDURE|PUBLIC|RAISERROR|READ|REFERENCES|RELEASE|REPLICATION|RIGHT|ROLLBACK|ROW|ROWGUIDCOL|ROWS|SELECT|SET|SESSION_USER|SOME|STATISTICS|TABLE|TEMPORARY|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUE|UNION|UNIQUE|UPDATE|USER|USING|VALUES|WHEN|WHERE|WITH|WRITETEXT)\b/i,
  operator: /\|\||&&|[-+*\/%^~!=<>&|?:.]/,
  punctuation: /[;,()\[\]]/,
};
Prism.languages.python = {
  comment: /#.*/,
  string: {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true,
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/g,
    lookbehind: true,
  },
  keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
  punctuation: /[{}[\];(),.:]/,
};
Prism.languages.markdoc = {
  tag: {
    pattern: /{%(.|\n)*?%}/i,
    inside: {
      tagType: {
        pattern: /^({%\s*\/?)(\w*|-)*\b/i,
        lookbehind: true
      },
      id: /#(\w|-)*\b/,
      string: /".*?"/,
      equals: /=/,
      number: /\b\d+\b/i,
      variable: {
        pattern: /\$[\w.]+/i,
        inside: {
          punctuation: /\./i
        }
      },
      function: /\b\w+(?=\()/,
      punctuation: /({%|\/?%})/i,
      boolean: /false|true/
    }
  },
  variable: {
    pattern: /\$\w+/i
  },
  function: {
    pattern: /\b\w+(?=\()/i
  }
};

export function Code({ children, language }) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  React.useEffect(() => {
    if (copied) {
      copy(ref.current.innerText);
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied]);

  // ternary expression. variable lang can be markdoc or python
  const lang = language ? language : 'markdoc';
  

  const lines =
    typeof children === 'string' ? children.split('\n').filter(Boolean) : [];
  return (
    <div className="code" aria-live="polite">
      <pre
        // Prevents "Failed to execute 'removeChild' on 'Node'" error
        // https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re
        key={children}
        ref={ref}
        className={`language-${lang}`}
      >
        {children}
      </pre>
      <button onClick={() => setCopied(true)}>
        <Icon icon={copied ? 'copied' : 'copy'} />
      </button>
      <style jsx>
        {`
          .code {
            position: relative;
          }
          .code button {
            appearance: none;
            position: absolute;
            color: inherit;
            background: var(--code-background);
            top: ${lines.length === 1 ? '17px' : '13px'};
            right: 11px;
            border-radius: 4px;
            border: none;
            font-size: 15px;
          }
        `}
      </style>
    </div>
  );
}
