const projects = [
  { name: "Webbshop", year: 2024 },
  { name: "Portfolio", year: 2026 },
  { name: "Kampanjsida", year: 2025 }
];


function sort(){
    const ProjectYears = projects.map((projects => (projects.year)));


    ProjectYears.sort((a, b) => b - a );

    console.log("Sorted Projects:",ProjectYears);
    console.log("Projects:", projects)
}



export default sort();


