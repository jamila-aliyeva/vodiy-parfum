import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = (props: { href: string; children: React.ReactNode }) => {
  let pathName = usePathname();
  return (
    <Link {...props} className={pathName === props.href ? "active" : ""}>
      {props.children}
    </Link>
  );
};

export default NavLink;
