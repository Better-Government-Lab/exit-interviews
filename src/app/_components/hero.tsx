const handwrittenWords = ['Exit', 'Interviews']

const pagesBasePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

export function Hero() {
  return (
    <main className="hero">
      <section className="title-lockup" aria-labelledby="hero-title">
        <div className="date-stamp" aria-label="2025">
          <img src={`${pagesBasePath}/assets/svg/b412e.svg`} alt="" />
          <img src={`${pagesBasePath}/assets/svg/5747c.svg`} alt="" />
        </div>

        <h1 id="hero-title" className="hero-title">
          Federal Civic Tech
        </h1>

        <div className="handwritten-block">
          <p className="handwritten-title" aria-label="Exit Interviews">
            {handwrittenWords.map((word, wordIndex) => (
              <span className={`handwritten-word handwritten-word--${word.toLowerCase()}`} aria-hidden="true" key={word}>
                {[...word].map((letter, letterIndex) => (
                  <span
                    className="handwritten-letter"
                    style={{ animationDelay: `${650 + (letterIndex + wordIndex * 5) * 115}ms` }}
                    key={`${letter}-${letterIndex}`}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </p>
          <img className="handwritten-underline" src={`${pagesBasePath}/assets/svg/b1aee.svg`} alt="" />
        </div>
      </section>
    </main>
  )
}
