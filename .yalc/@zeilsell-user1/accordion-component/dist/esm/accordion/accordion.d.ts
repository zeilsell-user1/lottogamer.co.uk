/// <reference types="react" />
import "./styles.css";
import type { Item } from "./accordion.types";
interface Props {
    items: Item[];
}
export declare const Accordion: ({ items, }: Props) => JSX.Element;
export {};
