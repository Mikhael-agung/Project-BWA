import Link from 'next/link';

interface CompanyItemProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
export default function CompanyItem(props: CompanyItemProps) {
  const { text1, text2, text3, text4 } = props;

  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href={''} className="text-lg color-palette-1 text-decoration-none">{text1}</Link>
        </li>
        <li className="mb-6">
          <Link href={''} className="text-lg color-palette-1 text-decoration-none">{text2}</Link>
        </li>
        <li className="mb-6">
          <Link href={''} className="text-lg color-palette-1 text-decoration-none">{text3}</Link>
        </li>
        <li className="mb-6">
          <Link href={''} className="text-lg color-palette-1 text-decoration-none">{text4}</Link>
        </li>
      </ul>
    </div>
  );
}
