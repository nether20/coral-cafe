import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homescreen">
      <div className="top-part">
      <h1>Welcome to the Coral Cafe!</h1>
      <h2>We serve many delicacies, such as:</h2>
      <li>
        <ul>Somkey Honey Mustard Snail Chops</ul>
        <ul>Sea turtle soup</ul>
        <ul className="bottom-list">And many, many more! Check out our <Link href="/menu" className="menu-link">menu</Link> to learn more.</ul>
      </li>
      </div>
      <h1>This is not a real resuraunt. It is a school project.</h1>
    </div>
  );
}
