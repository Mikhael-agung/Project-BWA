import Image from 'next/image';
import UploadPhoto from '../components/orgnisms/SignUpPhoto';
import Button from '../components/orgnisms/SignUpPhoto/button';

export default function SignUpPhoto() {
  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image src="/icon/upload.svg" width={120} height={120} alt={'avatar'} />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
              </div>
              <UploadPhoto />
            </div>
            <Button />
          </div>
        </form>
      </div>
    </section>
  );
}
