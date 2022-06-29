import "./index.css";

function Mindset() {
  return (
    <div>
      <h1 className="mindset-h1">Mindset</h1>
      <div className="flexRowMindset">
        <div className="halfSize">
          <img
            src="https://images.chinahighlights.com/allpicture/2018/04/31efcb6e4c9e45e7b9d8f6e3_cut_800x500_61.jpg"
            alt="People doing karate at dawn"
          />
        </div>
        <blockquote className="halfSize">
          It's not about never being off balance, it's about the speed at which
          you recover
          <a
            href="https://en.wikipedia.org/wiki/Hero%27s_journey#:~:text=In%20narratology%20and%20comparative%20mythology,comes%20home%20changed%20or%20transformed"
            target="_blank"
            rel="noreferrer"
          >
            <p>Read the Hero's Journey</p>
          </a>
        </blockquote>
      </div>
      <div className="flexRowMindset">
        <div className="halfSize">
          <img
            src="https://miro.medium.com/max/1400/0*aSS1iLR9suzBPLc2.png"
            alt="Katie Hawcutt Software Developer"
          />
          <p>Lessons learnt on my road to code…</p>
          <a
            href="https://blog.schoolofcode.co.uk/lessons-learnt-on-my-road-to-code-58498d065e34"
            target="_blank"
            rel="noreferrer"
          >
            <button>Learn More</button>
          </a>
        </div>
        <div className="halfSize">
          <img
            src="https://i.ibb.co/0BGKZkX/Screenshot-2022-06-23-at-10-08-34.png"
            style={{ width: "73%" }}
            alt="Front Cover for the Salary Report"
          />
          <p>Software Developer Salary Report</p>
          <a
            href="https://marketing-pictures.s3-eu-west-1.amazonaws.com/Salary+Report+2021/Salary_Report_EU-EN_2021_talent.io.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mindset;
