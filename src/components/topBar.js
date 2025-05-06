import Image from "next/image"
import Link from "next/link"

export function TopBar() {
    return(
<div className="topnav">
  <Link href="/"><Image src="/logo.png" width={25} height={25} alt="logo"/></Link>
  <Link className="active" href="/">Home</Link>
  <Link href="/menu">Menu</Link>
</div>
    )
}