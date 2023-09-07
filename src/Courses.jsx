import React from'react'

function Courses(){
    var [courses,setCourses]=React.useState([
        "js",
        "jsx",
        "html",
        "Css",
        "Angular",
    ])
    return(
        <div>
        <h1>COURSES</h1>
        <ul>{
            courses.map((a)=>
            {
                return( <li>{a}</li>)
            }
            )
            }

        </ul>
        </div>
    )
}
export default Courses