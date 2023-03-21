/// <reference types="react" />
interface AccordionSubItem {
    key: string;
    enabled: boolean;
    title: string;
    description?: string;
    url: string;
}
interface AccordionItem {
    key: string;
    enabled: boolean;
    title: string;
    description?: string;
    subItems?: AccordionSubItem[];
    url?: string;
}

interface Props {
    items: AccordionItem[];
}
declare const Accordion: ({ items }: Props) => JSX.Element;

export { Accordion, AccordionItem, AccordionSubItem };
