

function CreateSkillCard(props){
  const skills= props.skills;
return(
  <>
  {skills.map((skill)=>(
       
       <div className="card" key={skill.id}>
         <img src={skill.url} className="card-img-top" alt="..." />
         <div className="card-body">
           <p className="card-text">
             {skill.name}
           </p>
         </div>
       </div>
    
     ))}
  </>
  
)


}

export default CreateSkillCard;