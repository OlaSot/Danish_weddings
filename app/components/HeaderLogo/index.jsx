import Link from 'next/link';
import s from './s.module.css'

export default async function HeaderLogo({mainLink}) {

  return (
    <div>
        <Link className={s.logo} href={mainLink.path}>In Dänemark Heiraten</Link>
    </div>
  );
}