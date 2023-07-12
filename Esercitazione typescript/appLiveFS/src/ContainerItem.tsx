type Props = {
  className?: string;
};

function ContainerItem(props: Props) {
  const { className = "" } = props;
  return <p className={className}>container</p>;
}

export default ContainerItem;
