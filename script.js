const projects = [ //Takes array info of the card and in generateProjectCard func it plugs it in for all projects
   {
    title:"Cv Application",
    image:"assets/Cvapplication.png",
    madeWith:["React","Html","Css"],
    liveDemoLink:"https://cvapplicationgenerator.pages.dev",
    sourceLink:"https://github.com/stbam/CVApplicationGenerator"
   }

    ,{
      title: "Scribble Book",
      image: "assets/scribble2.png",
      madeWith: ["React", "Nodejs", "JavaScript"],
      liveDemoLink: "https://scribblebook-frontend.onrender.com",
      sourceLink: "https://github.com/stbam/login-signup",
    }, 
    {
        title: "Weather App",
        image: "assets/WeatherApp.png",
        madeWith: ["javascript", "react", "nodejs"],
        liveDemoLink: "https://github.com/stbam/WeatherApplication",
        sourceLink: "https://github.com/stbam/WeatherApplication",
      },
      {
        title:"TicTacToe",
        image:"assets/ticatactoe.png",
        madeWith:["javascript","html","css"],
        liveDemoLink:"https://stbam.github.io/TicTacToe/",
        sourceLink:"https://github.com/stbam/TicTacToe",
      },
      {
        title:"Library",
        image:"assets/library.png",
        madeWith:["javascript","html","css"],
        liveDemoLink:"https://stbam.github.io/Library/",
        sourceLink:"https://github.com/stbam/Library"
      }
  ];
//
/*function generateProjectCard(project){
    return `
    <div> Bob</div>
    
    `
}
  */

  
  function generateProjectCard(project) {
    return `
      <div class="project-card">
        <h2>${project.title}</h2>
        <div class="inner-card-content">
          <img class="asset-img" src="${project.image}" alt="" />
          <p id="made-with">Made With: ${project.madeWith.map(tech => `<img class="logo" src="assets/${tech.toLowerCase()}.png" alt="${tech.toLowerCase()}logo" />`).join('')}</p>
          <div class="card-buttons">
            <button id="card-button" ><a href="${project.liveDemoLink}" target="_blank">Live Demo</a></button>
            <button id="card-button"><a href="${project.sourceLink}" target="_blank">Source</a></button>
          </div>
        </div>
      </div>
    `;
  }
  const projectsContainer = document.querySelector('.cards');

  projects.forEach(project => {
    const projectCardHTML = generateProjectCard(project);
    projectsContainer.innerHTML += projectCardHTML;
  });
    