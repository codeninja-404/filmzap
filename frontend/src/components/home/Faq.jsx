import { ChevronDown } from "lucide-react";
import { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border my-2">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 p-4" : "max-h-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      title: "What movies are reviewed on this site?",
      content:
        "We review a wide range of movies, from the latest blockbusters to indie films and classic cinema. Our reviews cover various genres and styles to cater to diverse tastes.",
    },
    {
      title: "How are movies rated?",
      content:
        "Movies are rated based on several factors including storyline, acting, direction, and overall enjoyment. Our rating system ranges from 1 to 5 stars, with detailed explanations provided in each review.",
    },
    {
      title: "Can I submit my own movie review?",
      content:
        "Yes, we welcome guest reviews! If you would like to submit your own review, please contact us through our submission form, and our team will review and consider publishing it on the site.",
    },
    {
      title: "How often are new reviews posted?",
      content:
        "New reviews are posted regularly, typically once or twice a week. Be sure to check back often or subscribe to our newsletter to stay updated on the latest reviews and movie news.",
    },
  ];

  return (
    <div className="w-full max-w-3xl   shadow-md rounded-lg my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 ">
        Frequently Asked Questions
      </h2>
      {faqItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Faq;
