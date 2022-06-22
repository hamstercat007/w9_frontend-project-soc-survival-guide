/*
image links/ 
card of pdf, blog link, karate image,
card components
styling each card with className in css
alignment with first image and paragraph
two other images underneath with onClick to external link
onClick = jsx ???
wrap image in anchor tag and hardcode into jsx

*/
import "./index.css";

function Mindset() {
  return (
    <div>
      <h1>Mindset migs!</h1>
      <div className="row-1">
        <img
          src="https://images.chinahighlights.com/allpicture/2018/04/31efcb6e4c9e45e7b9d8f6e3_cut_800x500_61.jpg"
          alt="People doing karate at dawn"
        />
        <blockquote>It's not about never being off balance, it's about the speed at which you recover</blockquote>

      </div>
      <div className="row-two">
        <div class="card">
          <img
            src="https://miro.medium.com/max/1400/0*aSS1iLR9suzBPLc2.png"
            alt="Avatar"
            style={{ width: "50%" }}
          />
          <div class="container">
            <p>Lessons learnt on my road to code…</p>
            <a href="https://blog.schoolofcode.co.uk/lessons-learnt-on-my-road-to-code-58498d065e34">
              <button>Learn More</button>
            </a>
          </div>
        </div>
        <div class="card">
          <img
            src="https://img.freepik.com/free-vector/sack-money-big-pile-cash-money-icon-illustration-money-bag-flat-icon_385450-362.jpg"
            alt="Avatar"
            style={{ width: "40%" }}
          />
          <div class="container">
            <p>Software Developer Salary Report</p>
            <a href="https://marketing-pictures.s3-eu-west-1.amazonaws.com/Salary+Report+2021/Salary_Report_EU-EN_2021_talent.io.pdf">
              <button>Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </div>

    /* <div className="">
  
  <a href="https://blog.schoolofcode.co.uk/lessons-learnt-on-my-road-to-code-58498d065e34">
  <img src="https://miro.medium.com/max/1400/0*aSS1iLR9suzBPLc2.png" alt="#" />
  </a>
  <a href="#">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/625px-PDF_file_icon.svg.png" alt="#" />
  </a>  

</div> */
  );
}

export default Mindset;
