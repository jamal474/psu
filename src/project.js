import website from './images/Website.svg'
import github from './images/Github.svg'
import img from './images/img_no.jpg'

function Project(props) {
//     let imgg;
//    switch(props.id)
//    {
//     case "1" :
//         {
//             imgg = `${img1}`;
//             break;
//         }
//     case "2" :
//         {
//             imgg = `${img2}`;
//             break;
//         }
//     case "3" :
//         {
//             imgg = `${img3}`;
//             break;
//         }
//     case "4" :
//         {
//             imgg = `${img4}`;
//             break;
//         }
//     case "5" : 
//         {
//             imgg = `${img5}`;
//             break;
//         }     
//   }
    return (
        
        <div className="project">
            <div className="rbg">
                <img src= {img} alt="project profile"className="project--phts"/>
            </div>
            <div className="detail">
                <h4>{props.title}</h4>
                <div className="loc">
                    <a href={props.github} target="_blank"><img src = {github} className = "github"/></a>
                    <a href={props.website} target="_blank"><img src = {website} className = "website"/></a>
                </div>
                <h6>{props.description}</h6>
                <a href = "" className = "more">more</a>
            </div>
        </div>
    )
}

export default Project;