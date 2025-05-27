export default function AboutUS() {
  return (
    <div className="flex justify-between mt-16 flex-wrap lg:flex-nowrap">
      <div className="lg:w-3/4">
        <h1 className="text-2xl font-semibold font-lobester mb-10 pl-4">
          About us
        </h1>
        <p className="px-10 font-Inter text-justify text-base leading-7 ">
          Welcome to a world of flavors and delicious recipes! At FoodLand, we
          have a passion for cooking and creating diverse tastes to bring
          delightful moments to your table. Our goal is to provide a space where
          you can explore a variety of recipes that are both healthy and tasty.
          From traditional dishes to modern and creative recipes, we strive to
          offer something for every taste and preference.
          <br /> At FoodLand, we aim to showcase different culinary cultures and
          introduce you to new flavors. This is a place for inspiration,
          cooking, and enjoying sweet moments with your loved ones. Whether
          you're an experienced chef or just starting your culinary journey,
          we’re here to support you every step of the way. Join us and start
          your delicious adventure with easy-to-follow, mouthwatering recipes!
        </p>
      </div>
      <div className="m-auto pr-4">
        <img src="src/assets/img/chef.png" alt="Chef Pic" />
      </div>
    </div>
  );
}
