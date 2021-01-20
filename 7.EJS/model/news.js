const news = [
   {id: 1,  name: "Belgiya futbolining 125 yillik tarixidagi eng mashhur shaxs aniqlandi", description: "Mamlakat futbolining 125 yilligiga bag‘ishlab, muxlislar o‘rtasida so‘rovnoma o‘tkazildi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/ErpOAsRXYAwvJVA.jpg"},
   {id: 2,  name: "Navalniy Rossiyada 29-dekabrdan buyon qidiruvda ekanligi ma’lum qilindi", description: "Siyosatchi 17-yanvarda Rossiyaga qaytmoqchi ekanligini aytgandi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/Navalniy-A-1.jpg"},
   {id: 3,  name: "Gitler va Stalinga bo‘ysunmagan lider: Iosip Broz Tito hayoti haqida", description: "“Daryo” sobiq Yugoslaviya marshali Iosip Broz Titoning Yugoslaviya siyosatida tutgan o‘rni haqida hikoya qiladi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/photo_2021-01-12_23-47-46.jpg"},
   {id: 4,  name: "Qishda Dubayga borish uchun 4 sabab", description: "Bir olam emotsiya va yoqimli xotiralarni o‘zida mujassam etadigan fotolar bilan uyga qaytishingiz mumkin", image: "https://s.daryo.uz/wp-content/uploads/2021/01/dubay.jpg"},
   {id: 5,  name: "Organizmning suvsizlanishiga olib keladigan 8 mahsulot", description: "Tongni qahva bilan qarshi olishdan avval bir stakan suv ichish kerak", image: "https://s.daryo.uz/wp-content/uploads/2021/01/suv.jpg"},
   {id: 6,  name: "Olimlar koronavirusning ikkita yangi mutatsiyasini aniqladi", description: "Ulardan biri “britancha” shtammga o‘xshash, ikkinchisi virusning yanada yuqumli bo‘lishiga xizmat qiladi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/olimlar-is.jpg"},
   {id: 7,  name: "“Jenoa” A Seriyada xavfli zonadan chiqib oldi. Jamoa muvaffaqiyatlari siri nimada?", description: "Barchasi “Jenoa” haqida", image: "http://s.daryo.uz/wp-content/uploads/2021/01/eldor-shomurodov-1-680x411.jpg"},
   {id: 8,  name: "2021-yilda kutilayotgan ilmiy voqealar: iqlim o‘zgarishi, vaksinalar, Mars nihoyat zabt etiladimi?", description: "Xo‘sh, ushbu yildan qanday ilmiy natijalar kutilyapti, nima voqealar sodir bo‘ladi?", image: "https://s.daryo.uz/wp-content/uploads/2021/01/d41586-020-03651-0_18696420.jpg"},
   {id: 9,  name: "Foto: Toshkentning “Xalqlar do‘stligi” maydonidagi harbiy texnika va qurol-aslaha ko‘rgazmasi", description: "14-yanvar — O‘zbekiston Qurolli Kuchlari tashkil etilgan sana, Vatan himoyachilari kuni", image: "https://s.daryo.uz/wp-content/uploads/2021/01/9B9A9099.jpg"},
   {id: 10, name: "O‘zbekistonda 15-yanvar kuni havo harorati 20 darajagacha ko‘tariladi", description: "“O‘zgidromet” juma kuni kutilayotgan ob-havo ma’lumotini e’lon qildi", image: "https://s.daryo.uz/wp-content/uploads/2020/10/ob-havo-Buxoro.jpg"},
   {id: 11, name: "Gal Gadot “Mo‘jizakor ayol: 1984” filmini tomosha qilish vaqtida yig‘laganini tan oldi", description: "Gal Gadot butun dunyodagi ko‘plab insonlarni ilhomlantirgan qahramonidan faxrlanishini ta’kidlagan", image: "https://s.daryo.uz/wp-content/uploads/2021/01/wonder-woman-1984_1-680x383.jpg"},
   {id: 12, name: "Video: O‘zbekiston qiruvchi samolyotlari", description: "Alter Ego loyihasi O‘zbekiston Harbiy havo kuchlarining asosiy aerodromi bo‘lgan Xonobod bazasidan lavha tayyorladi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/BB_A1118-680x381.jpg"},
   {id: 13, name: "Qishda sharfni qanday taqish bo‘yicha yo‘riqnoma (foto)", description: "Sovuq haroratda isinish va chiroyli ko‘rinish uchun esa sharf eng yaxshi aksessuar hisoblanadi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/1-63.jpg"},
   {id: 14, name: "Xitoyda 8 oy ichida birinchi bor koronavirusga chalingan bemor vafot etdi", description: "O‘tgan bir sutka ichida yana 138 kishida koronavirus tasdiqlangan", image: "https://s.daryo.uz/wp-content/uploads/2021/01/Navalniy-A-1.jpg"},
   {id: 15, name: "Rasman: “Real” hujumchisi Luka Yovich “Ayntraxt”ga qaytdi", description: "Madridda omadi yurishmayotgan serbiyalik futbolchi Bundesligaga qaytdi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/123214.jpg"},
   {id: 16, name: "Simptomsiz o‘tkazilgan koronavirusdan darak beruvchi belgilar ma’lum qilindi", description: "COVID-19 odamga yuqqanidan keyin o‘zining hech qanday belgilarini namoyon qilmasa ham, u ko‘pincha organizmda uzoq muddatli oqibatlarni keltirib chiqaradi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/1570199203_013831511910_1600x0_8-680x383.jpg"},
   {id: 17, name: "Nurafshon hokimi lavozimidan ozod etildi", description: "U 2019-yil avgust oyidan beri ushbu lavozimda ishlab kelayotgan edi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/1-73-680x453.jpg"},
   {id: 18, name: "Kanadalik erkak itiga muzlatkich ichidan pivo olib kelish va uning eshigini yopishni o‘rgatdi (video)", description: "Itni bunga o‘rgatish uch oy vaqt talab qilgan", image: "https://s.daryo.uz/wp-content/uploads/2021/01/37903122-9137691-After_delivering_the_beer_Warwick_knows_he_must_close_the_door_o-a-3_1610448456916-680x444.jpg"},
   {id: 19, name: "Durov qaysi prezidentlar Telegram’dan foydalanishini sanab o‘tdi. Ular orasida Mirziyoyev bor, Putin va Tramp yo‘q", description: "Yaqinda Telegram messenjerida Braziliya va Turkiya prezidentlari o‘z kanallarini ochdi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/1-72-387x323.jpg"},
   {id: 20, name: "“Ayrim avtomobil ishlab chiqaruvchilarga berilgan imtiyozlar va eksklyuziv huquqlarni qisqartirishimiz kerak” — MQKQ rahbari", description: "Ma’lum qilinishicha, Prezident tomonidan qo‘yilgan vazifalarni bajarishda Monopoliyaga qarshi kurashish qo‘mitasi birinchi navbatda, iste’molchilar manfaatidan kelib chiqadi", image: "https://s.daryo.uz/wp-content/uploads/2021/01/G5n3GT16106109389683_b-680x453.jpg"}
]

module.exports = news