const fs = require('fs');
function readFileAsync(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                reject("File not found");
            } else {
                resolve(data);
            }
        });
    });
}
module.exports = readFileAsync; 

//Le code fourni utilise le module fs pour lire un fichier de manière asynchrone.
// Il exporte une fonction readFileAsync qui prend le chemin d'accès au fichier en paramètre et renvoie une prome
const fs = require('fs');
function readFileAsync(filePath){
    return new Promise((resolve, reject) =>{
        fs.readFile(filePath,(err,data){
            if (err){
                reject("file not found");
            }else(data) {
                resolve(data);
            }
        })
    })
}
