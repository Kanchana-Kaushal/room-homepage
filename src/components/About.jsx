function About() {
  return (
    <section
      id="about"
      className="mt-8 items-center md:mt-0 md:flex"
      aria-labelledby="about-heading"
    >
      <img
        src="/room-homepage/images/image-about-dark.jpg"
        alt="Modern dark-toned furniture in a room"
        className="w-full"
        role="img"
        loading="lazy"
      />

      <article className="space-y-4 p-8">
        <h2
          id="about-heading"
          className="text-custom-very-dark-gray font-bold tracking-[0.3rem] uppercase"
        >
          About our furniture
        </h2>
        <p className="text-custom-dark-gray">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best expresses your interests and what inspires you. Find the
          furniture pieces you need, from traditional to contemporary styles or
          anything in between. Product specialists are available to help you
          create your dream space.
        </p>
      </article>

      <img
        src="/room-homepage/images/image-about-light.jpg"
        alt="Bright, light-toned room with modern furniture"
        className="w-full"
        role="img"
        loading="lazy"
      />
    </section>
  );
}

export default About;
