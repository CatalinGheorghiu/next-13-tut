import Link from 'next/link';
import Image from 'next/image';
import Logo from './dojo-logo.png';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
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
      <Link href={'/'}>Dashboard</Link>
      <Link href={'/tickets'}>Tickets</Link>
    </nav>
  );
};

export default Navbar;
