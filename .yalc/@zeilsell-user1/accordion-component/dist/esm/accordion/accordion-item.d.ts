/// <reference types="react" />
import "./styles.css";
import type { Item } from "./accordion.types";
interface AccordionItemProps {
    item: Item;
}
export declare const AccordionItem: ({ item, }: AccordionItemProps) => JSX.Element;
export {};
