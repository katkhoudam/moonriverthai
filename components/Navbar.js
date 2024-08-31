import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gold to-yellow-500 p-4 shadow-lg">
      <ul className="flex justify-around text-white font-semibold">
        <li className="hover:text-yellow-300 transition duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-yellow-300 transition duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-yellow-300 transition duration-300">
          <Link href="/menu">Menu</Link>
        </li>
        <li className="hover:text-yellow-300 transition duration-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
