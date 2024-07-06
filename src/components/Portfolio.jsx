import portfolioData from "../data/portfolioData";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <>
    <div className="flex justify-center mb-4">
        <a
          href="assets/portfolio.pdf"
          download
          className="inline-flex items-center px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>

          <span>Download CV</span>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.map((project) => (
            <PortfolioItem
              key={project.title}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
