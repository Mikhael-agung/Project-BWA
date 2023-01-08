import Link from "next/link";

interface ConnectItemProps {
text1 : string
text2 : string
text3 : string
text4 : string
}
export default function ConnectItem(props: ConnectItemProps) {
  const {text1, text2, text3, text4} = props
  return (
    <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <Link href={"mailto: hi@store.gg"} className="text-lg color-palette-1 text-decoration-none">
            {text1}
          </Link>
        </li>
        <li className="mb-6">
          <Link href={"mailto: team@store.gg"} className="text-lg color-palette-1 text-decoration-none">
            {text2}
          </Link>
        </li>
        <li className="mb-6">
          <Link href={"http://maps.google.com/?q=Pasific 12, Jakarta Selatan"} className="text-lg color-palette-1  text-decoration-none">
            {text3}
          </Link>
        </li>
        <li className="mb-6">
          <Link href={"tel: 02111229090"} className="text-lg color-palette-1 text-decoration-none">
            {text4}
          </Link>
        </li>
      </ul>
    </div>
  );
}
