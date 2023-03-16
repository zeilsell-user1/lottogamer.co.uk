interface SubItem {
    key: string;
    enabled: boolean;
    title: string;
    description?: string;
    url: string;
}
interface Item {
    key: string;
    enabled: boolean;
    title: string;
    description?: string;
    subItems?: SubItem[];
    url?: string;
}
export { SubItem, Item };
