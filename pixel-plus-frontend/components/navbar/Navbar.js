import Link from "next/link";

const StyledLink = ({ href, children, className }) => (
 <Link href={href}>
  <span className={className}>{children}</span>
 </Link>
);

export default function NavBar() {
 return (
 <nav className="fixed top-0 w-full p-4 pl-16 pr-16 flex justify-between items-center">
     <StyledLink href="/" className="text-white font-bold text-2xl">Pixel Plus</StyledLink>
   <div className="space-x-4">
     <StyledLink href="/" className="text-white font-bold">Home</StyledLink>
     <StyledLink href="/products" className="text-white font-bold">Products</StyledLink>
     <StyledLink href="/about" className="text-white font-bold">About</StyledLink>
     <StyledLink href="/contact" className="text-white font-bold">Contact</StyledLink>
   </div>
 </nav>
 );
}