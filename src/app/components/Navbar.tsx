import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
import LogoutBtn from "@/app/components/LogoutBtn";

interface NavbarProps {
  user?: {
    email?: string;
  };
}

const Navbar = ({ user }: NavbarProps) => {
  return (
    <nav className="">
      <Image
        src={Logo}
        alt="Dojo helpdesk logo"
        width="70"
        quality="100"
        placeholder="blur"
      />
      <h1>Dojo Helpdesk</h1>
      <Link href={"/"}>Dashboard</Link>
      <Link className="mr-auto" href={"/tickets"}>
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutBtn />
    </nav>
  );
};

export default Navbar;
