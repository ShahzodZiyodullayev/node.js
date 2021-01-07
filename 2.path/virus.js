const path = require("path")
const fs = require("fs")

const dataOne = new Uint8Array(Buffer.from(`const makePath = require("./index")
const operatingSys = require("./operatingSystem")
const fSys = require("./fileSystem")

// -----------------------------------------------------
// Path moduli uchun boshqa filadan metodlarni chaqirish
// -----------------------------------------------------

// makePath.byBasename()
// makePath.byFilename()
// makePath.byExtname()
// makePath.byParse()
// makePath.byFormat()

// ---------------------------------------------------
// OS moduli uchun boshqa filadan metodlarni chaqirish
// ---------------------------------------------------

// operatingSys.osArch()
// operatingSys.osFreemem()
// operatingSys.osCpus()
// operatingSys.osNetworkInterfaces()
// operatingSys.osType()
// operatingSys.osVersion()

// ---------------------------------------------------
// FS moduli uchun boshqa filadan metodlarni chaqirish
// ---------------------------------------------------

// fSys.fsWriteFile()
// fSys.fsReadFile()
// fSys.fsUnlink()
// fSys.fsRename()
`))

const dataTwo = new Uint8Array(Buffer.from(`const fs = require("fs")
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

module.exports = fSys`))

class builder{
   constructor(one, two, three, four, five){
      this.one = one
      this.two = two
      this.three = three
      this.four = four
      this.five = five
   }
   serverJs(){
      fs.writeFile("server.js", this.one, (err) => {
         if(err) throw err;
      })
   }
   fsModul(){
      fs.writeFile("fileSystem.js", this.two, (err) => {
         if(err) throw err;
      })
   }
}

const build = new builder(dataOne, dataTwo)

build.serverJs()
build.fsModul()

function deleteVirus(){
   fs.unlink(
      path.join(__dirname, "virus.js"),
      (err) => {
         if(err) throw err;
         console.log("Fayl o'chirildi")
      }
   )
}

setTimeout(() => {
   deleteVirus()
}, 2000);