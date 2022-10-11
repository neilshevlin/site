import * as React from 'react';
export function Quote({ children }) {
    // the component is one which renders the text in children as a quote with some special styling
    return (
        <div className="quote">
            {children}
            <style jsx>
        {`
            .quote {
                border-left: 4px solid blue;
                padding-left: 1rem;
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 0;
                font-style: italic;
                font-size: 1.2rem;
                background-color: var(--light);
            }

        `}
      </style>
        </div>
        
    );
}