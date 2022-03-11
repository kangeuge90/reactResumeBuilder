import "./App.css";

function App() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const resumeOnlyMode = params.get("resumeonly");

  return (
    <div className="App">
      {!resumeOnlyMode && <div id="other-body-stuff">Hi stuff goes here</div>}
      <div id="pdf">
        <div id="header">
          <div id="header-left">
            <div>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:email@email.com">kangeuge90@gmail.com</a>
            </div>
            <div>
              <i className="fa fa-phone"></i>{" "}
              <a href="">(248) 462 - 1121</a>
            </div>
          </div>
          <div id="header-middle">
            <h1>Eugene Kang</h1>
			{/* <p className="header-address">
              40607 Lenox Park Drive, Novi, MI 48377
            </p> */}
            <p className="header-description">
              Software Engineer & Full stack Web Designer
            </p>
          </div>
          <div id="header-right">
            <div>
              <i className="fa fa-github"></i>
              <a href="https://github.com/kangeuge90">kangeuge90</a>{" "}
            </div>
            <div>
              <i className="fa fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/eugene-kang90/">
                eugene-kang90
              </a>{" "}
            </div>
            {/* <div>
							<a href="https://williamk.info/?q=resexample">williamk.info</a> <i class="fa fa-globe"></i>
						</div> */}
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            {/* <i className="fa fa-code"></i>  */}
            <span>SUMMARY</span>
          </div>
          <p className="summaryParagraph">
            Passionate and eager budding developer looking forward to growing in
            a fast-paced technological landscape. Construction experience
            building elevator storage units and laboratory experience have
            helped bolster an aptitude to learn quickly and take on challenging
            tasks with a purposeful, realistic approach. User experience design
            focused on optimizing ease-of-use to accommodate people of all
            computer literacy levels.
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            {/* <i className="fa fa-graduation-cap"></i>  */}
            <span>EDUCATION</span>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">Grand Circus Bootcamp</div>
              <div className="item-date">Aug 2021 - Feb 2022</div>
            </div>
            <ul>
              <li>GPA: 4.0</li>
              <li>After hours Full stack JavaScript Bootcamp</li>
            </ul>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">Wayne State University</div>
              <div className="item-date">Aug 2015 - Jan 2017</div>
            </div>
            <ul>
              <li>GPA: 3.3</li>
              <li>Completed coursework in biology.</li>
            </ul>
          </div>
        </div>
        
        <div className="section">
          <div className="section-header">
            {/* <i className="fa fa-wrench"></i>  */}
            <span>SKILLS</span>
          </div>
          <p className="skillsItem item">
            <span className="skillsLabel">Languages: </span>
            <span>
              CSS, HTML, JavaScript, MongoDB, Postman, Python, SQL, TypeScript
            </span>
            <br></br>
            <span className="skillsLabel">Tools and Frameworks: </span>
            <span>Express.js, git, Jest, React</span>
            <br></br>
            <span className="skillsLabel">Concepts: </span>
            <span>
              Accessible Design, Agile, Pair coding, Test driven development
            </span>
          </p>
        </div>

        <div className="section">
          <div className="section-header">
            {/* <i className="fa fa-code"></i>  */}
            <span>PROJECTS</span>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">
                Bottom of the Barrel Cocktail Search Application
              </div>
              <div className="item-date">Jan 2022 - Feb 2022</div>
            </div>
            <ul>
              <li>
                Developed a cocktail searching single page application with
                co-student at Grand Circus Bootcamp.
              </li>
              <li>
                Employed test-driven development to ensure functionality of
                application.
              </li>
              <li>Focus on clean, sleek design with satisfying feedback.</li>
              <li>
                Utilized firebase cloud, APIs, MongoDB, React, 3D objects,
                TypeScript.
              </li>
              <li>
                <a
                  id="BotBLink"
                  href="https://final-project-eugene-sam.web.app/"
                >
                  https://final-project-eugene-sam.web.app/
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">ReciMe Recipe Search Application</div>
              <div className="item-date">Nov 2021 - Dec 2021</div>
            </div>
            <ul>
              <li>
                Pair coded a recipe searching single page application with
                co-student.
              </li>

              <li>
                Design focus on simplicity and ease of use for all computer
                literacy levels.{" "}
              </li>

              <li>Utilized API database, React, TypeScript, Jest.</li>
              <li>
                <a
                  id="ReciMeLink"
                  href="https://kangeuge90.github.io/dec4ReactProject2/"
                >
                  https://kangeuge90.github.io/dec4ReactProject2/
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">Card Matching Game</div>
              <div className="item-date">Aug 2021 - Sept 2021</div>
            </div>
            <ul>
              <li>Pair coded a timed card matching game with co-student.</li>
              <li>
                Allowed me to practice test-driven development using dynamic
                game states and victory conditions.
              </li>
              <li>Utilized HTML, CSS, 3D objects, JavaScript.</li>
              <li>
                <a
                  id="CardGameLink"
                  href="https://kangeuge90.github.io/Javascript_Project_1/"
                >
                  https://kangeuge90.github.io/Javascript_Project_1/
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="section-header">
            {/* <i className="fa fa-briefcase"></i>  */}
            <span>EXPERIENCE</span>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">DoorDash</div>
              <div className="item-date">Feb 2017 - Present</div>
            </div>
            <ul>
              <li>
                Delivery of food and grocery to customers in a timely manner.
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">JayWorks Construction</div>
              <div className="item-date">Jun 2019 - Jul 2020</div>
            </div>
            <ul>
              <li>
                Traveled nationwide constructing and wiring Modula storage
                units.
              </li>
              <li>
                Worked in fastpaced industrial environments with weekly
                deadlines.
              </li>
              <li>
                Operated in accordance to site/state regulations and safety
                protocols.
              </li>
            </ul>
          </div>
          <div className="item">
            <div className="item-header">
              <div className="item-title">Wayne State University</div>
              <div className="item-date">Mar 2016 - Jan 2017</div>
            </div>
            <ul>
              <li>
                Conducted research of Sacchyromyces Cerevisiae in laboratory
                setting.
              </li>
              <li>
                Maintained laboratory and sample conditions in accordance with
                sanitary requirements.
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
