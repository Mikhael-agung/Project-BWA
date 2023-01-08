import FooterItems from '../../molcecules/FooterItems';

export default function FooterArea() {
  return (
    <section className="footer pt-70">
      <footer>
        <div className="container-fluid">
          <FooterItems  title1={'StoreGG membantu gamers'} 
                        main2={'untuk menjadi pemenang sejati'} 
                        copy={'Copyright 2021. All Rights Reserved.'}/>
        </div>
      </footer>
    </section>
  );
}
