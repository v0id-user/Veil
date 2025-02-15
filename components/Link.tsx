import UnderLine from '@/components/animated/UnderLine';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

function Link({ href, children }: LinkProps) {
  return (
    <NextLink href={href} className="font-light relative group">
      {children}
      <UnderLine />
    </NextLink>
  );
}

export default Link;
