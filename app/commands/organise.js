let fs = require('fs');
let path = require('path');

let types={
        media:[".mp4",".mkv",".mp3"],
        archives:[".zip",".7z",".rar",".tar",".gz",".ar",".iso",".xz"],
        documents:[".docx",".doc",".pdf",".xls",".xlsx",".txt"],
        app:[".exe",".pkg"],
        others:[]
}

function isFileOrNot(src)
{
    return fs.lstatSync(src).isFile();
}

function readContent(src)
{
    return fs.readdirSync(src);
}

function organise(dirName)
{
    if(dirName==undefined)
    {
        dirName = process.cwd();
    }
    let folderName = path.join(dirName,"organise");
    if(fs.existsSync(folderName)==false)
    {
        fs.mkdirSync(folderName);
        for(let type in types)
        {
            let newFolder = path.join(dirName,"organise",type);
            fs.mkdirSync(newFolder);
        }
    }
    organiseFile(dirName,folderName);

}

function organiseFile(dirName,folderName)
{
    let isFile = isFileOrNot(dirName);
    if(isFile==true)
    {
        let extension  = path.extname(dirName);
        let extName = extensionMatch(extension);
        
        let destPath = path.join(folderName,extName,path.basename(dirName));
        fs.copyFileSync(dirName,destPath);
    }
    else
    {
        let names = readContent(dirName);

        for(let i=0;i<names.length;i++)
        {
            let child = names[i];
            // let childPath = src+"\\"+child; -> not good practice
            let childPath = path.join(dirName,child);
            organiseFile(childPath,folderName);
        }
    } 
}

function extensionMatch(extension)
{
    let extName = "others";
    for(let type in types)
        {
            for(let i=0;i<types[type].length;i++)
            {
                if(extension==types[type][i])
                {
                    extName = type;
                    break;
                }
            }
        }
        return extName;
}

module.exports={
    fn:organise
}