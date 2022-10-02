function Home() {
  return (
    <section id="intro">
      <div className="container">
        <h1>
          <span className="f-letter">H</span>ey, <span className="f-letter">I</span>'m 
          <span className="my-name">
            <span className="f-letter"> K</span>urt
            <span className="f-letter"> R</span>usselle
            <span className="f-letter"> M</span>armol.
          </span>
        </h1>
        <p className="full-stack">I'm an aspiring Full-Stack Developer</p>
        <div className="intro-button">
          <button className="work-together">Let's work together</button>
          <button className="check-project">Check out my project</button>
        </div>
      </div>
    </section>
  );
}

export default Home;