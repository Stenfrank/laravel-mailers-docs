module.exports = {
    base: '/',
    title: 'Laravel Mailers',
    host: 'http://laravel-mailers.soenac.com',
    description: 'Dynamic configuration of mailers.',
    head: [
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Catamaran:300,700|Miriam+Libre' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { property: 'og:url', content: 'https://laravel-mailers.soenac.com' }],
        ['meta', { property: 'og:type', content: 'article' }],
        ['meta', { property: 'og:title', content: 'Laravel mailers' }],
        ['meta', { property: 'og:description', content: 'Dynamic configuration of mailers' }]
    ],
    themeConfig: {
        editLinks: true,
        docsDir: 'docs',
        displayAllHeaders: true,
        docsRepo: 'Stenfrank/laravel-mailers-docs',
        repo: 'Stenfrank/laravel-mailers',
        editLinkText: 'Improve this page (submit a PR)',
        nav: [
            {
                text: 'SOENAC SAS',
                link: 'https://soenac.com/'
            },
        ],
        sidebar: [
            '/',
            '/basic-usage',
        ]
    },
}
