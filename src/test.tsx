const projects = [
  { "id": 1, "name": "Hemsida", "status": "active" },
  { "id": 2, "name": "Webbshop", "status": "done" },
  { "id": 3, "name": "Kampanjsida", "status": "active" }
]



export  function projectStatus(){
 const status = projects.map((projects => (projects.id + projects.name + projects.status)));
 const activeProjects = projects.filter((projects => projects.status === "active"))
 console.log(status)
 console.log('Active projects:', activeProjects );


 

 const sortedProjects = projects.sort((a, b) => b.id - a.id)

 console.log(sortedProjects);
}


export default projectStatus;