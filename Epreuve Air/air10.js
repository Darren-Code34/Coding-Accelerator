const fs = require("fs")

function openFile(filePath){
    fs.readFile(filePath, 'utf-8', (err, text)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(text);
    })
}


openFile("C:\\Users\\HP\\Documents\\programation\\Coding_Accelerator\\Epreuves Coding Accelerator\\Epreuve Air\\a.txt")

module.exports = function(){openFile}
