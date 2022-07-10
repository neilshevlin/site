import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useRouter } from 'next/router';
import Markdoc from '@markdoc/markdoc';
import { getSchema } from '@markdoc/next.js/runtime';

import * as tags from '../markdoc/tags';
import * as nodes from '../markdoc/nodes';
import * as functions from '../markdoc/functions';

const schema = {
    tags,
    nodes,
    functions
  };

const INITIAL_CODE = `
`;

const BASE_FRONTMATTER = { markdoc: { title: '' } };

export function PythonSandbox({height, options}){
  return (
    <CodeMirror
        value={INITIAL_CODE}
        options={{
            mode: 'python',
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
            ...options
        }}
        height={height}
    />
  )
}