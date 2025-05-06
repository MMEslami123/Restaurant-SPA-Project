import TitleLine from "../titleLine/TitleLine";

function SectionTitles({ subject, subSubject }) {
  return (
    <div data-aos="fade-up">
      <div className="d-flex align-items-center gap-3 playFair-font-semi">
        <p className="d-inline-block text-white-50 m-0">{subject}</p>
        <TitleLine />
      </div>
      <p className="fs-1 dark-gold playFair-font-semi">{subSubject}</p>
    </div>
  );
}

export default SectionTitles;
