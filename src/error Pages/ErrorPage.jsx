import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="w-1/2 mx-auto shadow-md p-6 mt-7 rounded-md bg-orange-300 text-center ">
      <div className="w-1/2  flex justify-center items-center mx-auto mb-2">
        <svg
          className="w-20 h-20 text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.815 9H16.5a2 2 0 1 0-1.03-3.707A1.87 1.87 0 0 0 15.5 5 1.992 1.992 0 0 0 12 3.69 1.992 1.992 0 0 0 8.5 5c.002.098.012.196.03.293A2 2 0 1 0 7.5 9h3.388m2.927-.985v3.604M10.228 9v2.574M15 16h.01M9 16h.01m11.962-4.426a1.805 1.805 0 0 1-1.74 1.326 1.893 1.893 0 0 1-1.811-1.326 1.9 1.9 0 0 1-3.621 0 1.8 1.8 0 0 1-1.749 1.326 1.98 1.98 0 0 1-1.87-1.326A1.763 1.763 0 0 1 8.46 12.9a2.035 2.035 0 0 1-1.905-1.326A1.9 1.9 0 0 1 4.74 12.9 1.805 1.805 0 0 1 3 11.574V12a9 9 0 0 0 18 0l-.028-.426Z"
          />
        </svg>
      </div>
      <div className="font-lobester font-bold text-2xl mb-3">
        <h1 className="mb-3 ">Oops!</h1>
        <h2>{error.status}</h2>
      </div>
      <div className="font-Inter text-lg">
        <p className="mb-3 ">Sorry, an unexpected error has occurred.</p>
        <p className="mb-3 ">
          <i>Page {error.statusText}</i>
        </p>
      </div>
    </div>
  );
}
