export default function Button(props) {
  return (
    <button className={`h-10 font-semibold rounded p-2 ${props.className}`}>
      {props.children}
    </button>
  );
}
