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


 
}


export default projectStatus;