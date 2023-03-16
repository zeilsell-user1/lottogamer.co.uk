/// <reference types="react" />
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

interface Props {
    items: Item[];
}
declare const Accordion: ({ items, }: Props) => JSX.Element;

export { Accordion, Item, SubItem };
