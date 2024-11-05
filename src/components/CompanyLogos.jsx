import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex flex-wrap justify-center">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-12 md:h-16 p-2"
            key={index}
          >
            <img
              src={logo}
              className="max-w-full h-auto"
              width={80}  // Smaller width
              height={20} // Smaller height
              alt={`Logo ${index + 1}`} // Descriptive alt text
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;