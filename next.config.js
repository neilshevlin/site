const withMarkdoc = require('@markdoc/next.js');

// withMarkdoc can be passed options for schema and modes
module.exports = withMarkdoc({schemaPath: '/Users/neilshevlin/Desktop/Software/personal-site/markdoc'})({
  reactStrictMode: true,
  pageExtensions: ['js', 'md', 'mdoc'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/about',
        permanent: false
      }
    ];
  },
  rewrites() {
    return [
      {
        source: '/spec',
        destination: '/spec.html'
      }
    ];
  }
});