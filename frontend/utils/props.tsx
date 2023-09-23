export type ButtonProps = {
  children: JSX.Element;
  type: 'primary' | 'secondary';
  handleClick?: () => void;
};

export type LayoutProps = {
  children: JSX.Element;
};
