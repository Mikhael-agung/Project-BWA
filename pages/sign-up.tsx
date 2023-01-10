import Image from "next/image";
import SignUpForm from "../components/orgnisms/SignUpForm";
import Link from "next/link";
export default function SignUp() {
  return (
    // <!-- Sign Up -->
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link className="navbar-brand" href="/">
              <Image src='/icon/logo.svg' width={60} height={60} alt={'Logo'}/>
            </Link>
          </div>
         <SignUpForm />
        </form>
      </div>
    </section>
  );
}
