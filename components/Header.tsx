import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Link href="/">
          <a className="flex items-start relative rounded-full overflow-hidden w-16 h-16 group">
            <Image
              src="/img/me.jpeg"
              width={64}
              height={64}
              alt="Alex Carpenter avatar"
              priority
            />
            <span className="absolute inset-0 rounded-md flex items-center justify-center opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-opacity">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width={32}
                height={32}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.403 8.22c1.655 0 3.579.45 5.203 1.35v7.421c0 2.494.391 3.275 1.413 3.275 1.443 0 2.496-1.502 2.496-6.369 0-5.228-2.888-8.442-9.141-8.442C9.909 5.455 6.3 9.811 6.3 16.061c0 6.398 3.488 10.424 10.103 10.424 2.075 0 4.36-.45 5.924-1.02l1.113 3.274c-1.895.72-4.541 1.261-7.066 1.261C7.654 30 2 24.563 2 16.06 2 7.889 8.013 2 16.403 2c8.54 0 13.382 5.678 13.382 11.838 0 5.437-2.586 9.373-6.556 9.373-2.405 0-3.698-1.593-4.028-3.065-.723 1.683-2.106 2.945-4.301 2.945-3.818 0-5.502-2.885-5.502-6.76 0-4.927 2.555-8.112 7.005-8.112zm-.872 11.896c1.083 0 1.715-.78 2.045-1.472v-7.15c-.451-.18-.811-.27-1.323-.27-1.563 0-2.556 1.261-2.556 5.137 0 2.764.572 3.755 1.834 3.755z"
                  fill="#fff"
                />
              </svg>
            </span>
          </a>
        </Link>
        <span>
          <h1 className="text-xl">Alex Carpenter</h1>
          <p>UI Engineer</p>
        </span>
      </div>
      {/* <button className="w-8 h-8 grid place-items-center rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3.76" cy="8.01" r="1.26" fill="currentColor"></circle>
          <circle cx="8.01" cy="8.01" r="1.26" fill="currentColor"></circle>
          <circle cx="12.26" cy="8.01" r="1.26" fill="currentColor"></circle>
        </svg>
      </button> */}
    </header>
  );
};
