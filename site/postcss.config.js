const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./hugo_stats.json'],
    defaultExtractor: (content) => {
        let els = JSON.parse(content).htmlElements;
        return els.tags.concat(els.classes, els.ids);
    },
});

module.exports = {
    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        // No custom usage statistics; avoid Browserslist searching parent directories.
        require('autoprefixer')({ stats: {} }),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
    ],
};
