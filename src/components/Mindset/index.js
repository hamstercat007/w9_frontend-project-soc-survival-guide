/*
image links/ 
card of pdf, blog link, karate image,
alignment with first image and paragraph
two other images underneath with onClick to external link
wrap image in anchor tag and hardcode into jsx

*/
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
          <p>Read the Hero's Journey</p>
        </blockquote>
   
      </div>
      <div className="flexRowMindset">
        <div className="halfSize">
          <img
            src="https://miro.medium.com/max/1400/0*aSS1iLR9suzBPLc2.png"
            alt="Katie Hawcutt Software Developer"
          />
          <p>Lessons learnt on my road to code…</p>
          <a href="https://blog.schoolofcode.co.uk/lessons-learnt-on-my-road-to-code-58498d065e34">
            <button>Learn More</button>
          </a>
        </div>
        <div className="halfSize">
          <img
            src="https://img.freepik.com/free-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg"
            alt="Money"
            className="tallImage"
          />
          <p>Software Developer Salary Report</p>
          <a href="https://marketing-pictures.s3-eu-west-1.amazonaws.com/Salary+Report+2021/Salary_Report_EU-EN_2021_talent.io.pdf" >
            <button>Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mindset;
