import Link from 'next/link';


interface SupportItemProps {
link1: string
link2: string
link3: string
} 
export default function SupportItem(props: SupportItemProps) {
  const {link1, link2, link3} = props
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href={"/Refund"} className="text-lg color-palette-1 text-decoration-none">
            {link1}
          </Link>
        </li>
        <li className="mb-6">
          <Link href={'/Rewards'} className="text-lg color-palette-1 text-decoration-none">
            {link2}
          </Link>
        </li>
        <li className="mb-6">
          <Link href={'/Live'} className="text-lg color-palette-1 text-decoration-none">
            {link3}
          </Link>
        </li>
      </ul>
    </div>
  );
}
