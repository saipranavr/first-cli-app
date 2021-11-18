let flat = require("../poc/flat");

function view(dirName,mode)
{
    if(mode=="tree")
    {
        flat.fnTree(dirName,"");
    }
    else if(mode=="flat")
    {
        flat.fn(dirName);
    }
    else
    {
        console.log("wrong mode or filename. Type --help for all commands")
    }
}
module.exports={
    fn:view
}