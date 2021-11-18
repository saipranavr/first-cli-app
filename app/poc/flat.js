let fs = require("fs");
let path = require("path");

//checks if src is file or not
function isFileOrNot(src)
{
    return fs.lstatSync(src).isFile();
}

//returns an array of all the children files/folders
function readContent(src)
{
    return fs.readdirSync(src);
}

//If it is a file print otherwise use recursion to loop all the children
function viewFlat(src)
{
    let isFile = isFileOrNot(src);
    if(isFile==true)
    {
        console.log(src,"*");
    }
    else{
        console.log(src);

        let names = readContent(src);

        for(let i=0;i<names.length;i++)
        {
            let child = names[i];
            // let childPath = src+"\\"+child; -> not good practice
            let childPath = path.join(src,child);
            viewFlat(childPath);
        }
    }
    
}

function viewTree(src,indent)
{
    let isFile = isFileOrNot(src);
    if(isFile==true)
    {
        console.log(indent,path.basename(src),"*");

    }
    else{
        console.log(indent,path.basename(src));

        let names = readContent(src);

        for(let i=0;i<names.length;i++)
        {
            let child = names[i];
            // let childPath = src+"\\"+child; -> not good practice
            let childPath = path.join(src,child);
            viewTree(childPath,indent+"\t");
        }
    }
    
}
// viewTree(process.argv[2]," ");-> local testing input
//process.argv.slice(2)[0]; -> same thing

module.exports={
    fn:viewFlat,
    fnTree:viewTree
}
