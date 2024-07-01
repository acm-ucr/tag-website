import Link from "next/link";
const Button = ({ text, link, target }) => {
  return (
    <Link href={link} target={target} rel="noopener noreferrer">
      <button className="items-center rounded-full bg-tan-100 border-solid px-8 py-2 text-2xl border border-green-800 hover:bg-green-800 hover:text-white transition-colors ease-in duration-150">
        <p>{text}</p>
      </button>
    </Link>
  );
};

export default Button;
