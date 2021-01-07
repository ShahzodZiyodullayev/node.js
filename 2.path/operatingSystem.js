const os = require("os")

// ----------------------------------------------------------
// Quyida os moduli va uning metodlari uchun yaratilgan class
// ----------------------------------------------------------


class operatingSys{
   constructor(one){
      this.one = one
   }
   osArch(){
      console.log(os.arch())
   }
   osFreemem(){
      console.log(Math.floor(os.freemem()/1024/1024))
   }
   osCpus(){
      console.log(os.cpus())
   }
   osNetworkInterfaces(){
      console.log(os.networkInterfaces())
   }
   osType(){
      console.log(os.type())
   }
   osVersion(){
      console.log(os.version())
   }
}

const opSys = new operatingSys()

module.exports = opSys