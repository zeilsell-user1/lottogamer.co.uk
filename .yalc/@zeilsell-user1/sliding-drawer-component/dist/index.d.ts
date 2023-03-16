import { ReactNode } from 'react';

interface Props {
    show: boolean;
    background: string;
    color: string;
    callback: () => void;
    children: ReactNode;
}
declare const SlidingDrawer: ({ show, background, color, callback, children, }: Props) => JSX.Element;

export { SlidingDrawer };
