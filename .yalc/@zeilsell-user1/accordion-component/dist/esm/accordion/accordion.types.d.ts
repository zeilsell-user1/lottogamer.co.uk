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
export { AccordionSubItem, AccordionItem };
