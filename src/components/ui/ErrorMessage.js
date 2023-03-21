export default function ErrorMessage({ message }) {
  return (
    <div className=" flex items-center justify-center h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100">
      {message}
    </div>
  );
}
