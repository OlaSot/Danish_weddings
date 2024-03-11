'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';


interface Link {
    title: string;
    path: string;
  }
  
  interface HeaderLinksProps {
    links: Link[];
    className:string;
  }
  
  export default function HeaderLinks({ links, className }: HeaderLinksProps) {
    const pathname = usePathname();
    
    return (
      <div className={className}>
        {links.filter((_,i)=> i!=0)
        .map((link, index) => (
          <Link className="font-opensans" style={{textDecoration: pathname === link.path ? 'underline' : 'none'} } key={index} href={link.path}>{link.title}</Link>
        ))}
      </div>
    );
  }
  