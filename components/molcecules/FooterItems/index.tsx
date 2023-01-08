import Image from 'next/image';
import CompanyItem from './company';
import SupportItem from './support';
import ConnectItem from './Connect';

interface FooterItemProps {
  title1: string;
  main2: string;
  copy: string;
}
export default function FooterItems(props: FooterItemProps) {
  const { title1, main2, copy } = props;
  return (
    <div className="row">
      <div className="col-lg-4 text-lg-start text-center">
        <a href="" className="mb-30"></a>
        <Image src="/icon/logoF.svg" width={60} height={60} alt={'Logo Footer'} />
        <p className="mt-30 text-lg color-palette-1 mb-30">
          {title1}
          <br />
          {main2}
        </p>
        <p className="mt-30 text-lg color-palette-1 mb-30">{copy}</p>
      </div>
      <div className="col-lg-8 mt-lg-0 mt-20">
        <div className="row gap-sm-0">
          <CompanyItem text1={'About Us'} text2={'Press Release'} text3={'Terms of Use'} text4={'Privacy & Policy'} />
          <SupportItem link1={'Refund Policy'} link2={'Unlock Rewards'} link3={'Live Chatting'} />
          <ConnectItem text1={'hi@store.gg'} text2={'team@store.gg'} text3={'Pasific 12, Jakarta Selatan'} text4={'021 - 1122 - 9090'} />
        </div>
      </div>
    </div>
  );
}
