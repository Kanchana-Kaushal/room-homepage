function About() {
  return (
    <section id="about" className="mt-8">
      <img
        src="/public/images/image-about-dark.jpg"
        alt="about image dark"
        className="w-full"
      />

      <article className="space-y-4 p-8">
        <h2 className="text-custom-very-dark-gray font-bold tracking-[0.3rem] uppercase">
          About our furniture
        </h2>
        <p className="text-custom-dark-gray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </article>

      <img
        src="/public/images/image-about-light.jpg"
        alt=" about image light"
        className="w-full"
      />
    </section>
  );
}

export default About;
