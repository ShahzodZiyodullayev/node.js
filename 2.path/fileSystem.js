const fs = require("fs")
const path = require("path")

// ----------------------------------------------------------------------
// Quyida, yaratiladigan matnli fayl uchun ma'lumot saqlangan o'zgaruvchi
// ----------------------------------------------------------------------

const dataString = new Uint8Array(Buffer.from("To'g'ri yo'lni topish uchun avvalo adashib qolish kerak"))

// ----------------------------------------------------------
// Quyida fs moduli va uning metodlari uchun yaratilgan class
// ----------------------------------------------------------

class fileSystem{
   constructor(data){
      this.data = data
   }
   fsWriteFile(){
      fs.writeFile('message.txt', this.data, (err) => {
         if (err) throw err;
         console.log('File saqlandi!');
      });
   }
   fsRename(){
      fs.rename('message.txt', 'hello.doc', (err) => {
         if(err) throw err;
         console.log("Nom almashtirildi")
      })
   }
   fsReadFile(){
      fs.readFile(
         path.join(__dirname, 'message.txt'),
         (err, data) => {
            if(err) throw err;
            console.log(Buffer.from(data).toString())
         }
      )
   }
   fsUnlink(){
      fs.unlink(
         path.join(__dirname, "message.txt"),
         (err) => {
            if(err) throw err;
            console.log("O'chirish amalga oshirildi!")
         }
      )
   }
}

const fSys = new fileSystem(dataString)

module.exports = fSys