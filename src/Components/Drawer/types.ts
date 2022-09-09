type Props = {
    children: React.ReactNode;
    hideButton?: boolean;
    isOpen: boolean;
    onClose: () => void;
    placement: 'left' | 'right' | 'top' | 'bottom';
};

type DrawerProps = {
    isOpen: boolean;
    placement: 'left' | 'right' | 'top' | 'bottom';
};

export type { DrawerProps, Props };
