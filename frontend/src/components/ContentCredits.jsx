import CreditSlider from "./sliders/creditSlider";

const ContentCredits = ({ contentCredits }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold  mb-6">Cast Credits</h2>
      <CreditSlider contentCredits={contentCredits} />
    </div>
  );
};

export default ContentCredits;
