import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

function Container(props: Props) {
  const { className = "pippo", children } = props;
  return <div className={className}>{children}</div>;
}

export default Container;
