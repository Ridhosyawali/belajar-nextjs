export default function Button({
  type,
  className,
  children,
  onClick = () => {},
}) {
  return (
    <button
      className={`h-10 font-semibold rounded p-2 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
