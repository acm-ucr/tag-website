import Button from "@/components/Button";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <Header />
      <div className="w-1/2 my-10 mx-auto">
        <p className="text-5xl mb-5">{"Oops! This Page is Missing"}</p>
        <p className="text-lg my-5">
          {
            "It looks like you've wandered off the beaten path. But no worries, we've got just the remedy!"
          }
          <br /> <br />
          {
            "Why not return to our homepage and immerse yourself in the community we offer? Let's get you back on track!"
          }
        </p>
        <Button text="Go Home" link="/" target="_top" />
      </div>
    </div>
  );
};

export default NotFound;
