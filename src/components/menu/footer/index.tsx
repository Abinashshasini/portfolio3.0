import Link from 'next/link';
import Magnetic from '@/commons/magnetic';
import classes from './style.module.scss';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Magnetic>
        <Link href="https://www.linkedin.com/in/abinash-shasini/">
          LinkedIn
        </Link>
      </Magnetic>
      <Magnetic>
        <Link href="https://github.com/Abinashshasini">GitHub</Link>
      </Magnetic>
      <Magnetic>
        <Link href={`https://twitter.com/ShasiniAbinash`}>Twitter</Link>
      </Magnetic>
      <Magnetic>
        <Link href="https://www.facebook.com/abinash.shasini/">Facebook</Link>
      </Magnetic>
    </div>
  );
}
