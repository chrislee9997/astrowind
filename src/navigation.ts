import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: '/',
    },
    {
      text: '文章',
      href: getBlogPermalink(),
    },
    {
      text: '关于我',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '导航',
      links: [
        { text: '首页', href: '/' },
        { text: '文章', href: '/blog' },
        { text: '关于我', href: '/about' },
      ],
    },
    {
      title: '社交媒体',
      links: [
        { text: '小红书', href: '#' },
        { text: '微信公众号', href: '#' },
        { text: 'GitHub', href: 'https://github.com/chrislee9997' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getPermalink('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/chrislee9997' },
  ],
  footNote: `
    © ${new Date().getFullYear()} Chris Lee · 1% Creator
  `,
};
