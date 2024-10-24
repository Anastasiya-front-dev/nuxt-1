
interface MenuItem {
    title: string;
    icon: string;
    route: string;
    children?: MenuItem[];
}

export const MenuItems: MenuItem[] = [
    {
        title: 'Services',
        icon: 'mdi-view-dashboard',
        route: '/services',
    },
    {
        title: 'Technologies',
        icon: 'mdi-web',
        route: '/technologies',
    },
    {
        title: 'About Us',
        icon: 'mdi-account-multiple',
        route: '/about',
    },
    {
        title: 'Blog',
        icon: 'material-symbols-light:chat',
        route: '/blog',
        children: [
            {
                title: 'Articles',
                icon: 'mdi-tune',
                route: '/blog/general',
            },
            {
                title: 'Video',
                icon: 'mdi-lock',
                route: '/blog/security',
            },
        ],
    },
];

export default MenuItems;
// export type { MenuItem };