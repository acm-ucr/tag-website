import Link from "next/link";
const Button = () => {
  return (
    <Link href="https://google.com" target="_blank" rel="noopener noreferrer">
      <button className="items-center rounded-full bg-tan-100 border-solid px-8 py-2 text-2xl border border-green-800 hover:bg-green-800 hover:text-white transition-colors ease-in duration-150">
        <p>JOIN NOW</p>
      </button>
    </Link>
  );
};

export default Button;
