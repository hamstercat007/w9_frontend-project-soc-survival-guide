/*
1. create our array of objects, that we will map over.
category compenent - list component
function that gives us a button that we can reuse
return into a div container
*/

const categoryArray = [{
    title:"Resources",
    description:"Find videos and technical guidance on SoC topics, bookmark and add your own",
    buttonText:"Resources",
},
{
   title:"Mindest" ,
   description:"Keep your goals in mind, creating a positive mindset and belief in yourself",
   buttonText:"Mindset",
},{
    title:"Self Care",
    description:"Advice and guidance into looking after your mental and physcial health",
    buttonText:"Self Care",
}
]

function CategoryList () {
    return (
        <div>
        {categoryArray.map(function (item, index){
            console.log(item);
        })}
    )
    </div>
    )}

    export default CategoryList    