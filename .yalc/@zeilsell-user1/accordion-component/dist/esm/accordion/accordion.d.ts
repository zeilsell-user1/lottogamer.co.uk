/// <reference types="react" />
import "./styles.css";
import type { AccordionItem } from "./accordion.types";
interface Props {
    items: AccordionItem[];
}
export declare const Accordion: ({ items }: Props) => JSX.Element;
export {};
