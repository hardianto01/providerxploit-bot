const moment = require("moment-timezone")
const time2 = moment().tz('Asia/Jakarta').format('HH:MM:SS')
  
   if(time2 < "23:59:00")
    {
    var selamat = 'Malam🌚'
    }
    if(time2 < "18:00:00")
    {
    var selamat = 'petang🌥️'
    }
    if(time2 < "17:00:00") 
    {
    var selamat = 'Sore🌤️'
    }
    if(time2 < "15:00:00")
    {
    var selamat = 'Siang🌞'
    }
    if(time2 < "11:00:00")
    {
    var selamat = 'Pagi🌝'
    }
    if(time2 < "05:00:00")
    {
    var selamat = 'Tengah Malam🌠'
    }
    
    var date = new Date();
    var tahun = date.getFullYear();
    var bulan = date.getMonth();
    var tanggal = date.getDate();
    var hari = date.getDay();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();
    switch(hari) 
    {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
    }
    switch(bulan) 
    {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
    }
            var tampilTanggal = tanggal + " " + bulan + " " + tahun;
            var tampilWaktu = jam + ":" + menit + ":" + detik;
    exports.dateNameDay = () => {
    return `${hari}`
    }
    exports.dateNameMonth = () => {
        return `${bulan}`
    }
    exports.ucapan = () => {
        return `${selamat}`
    }
    exports.timewib = () => {
        return `${tampilWaktu}`
    }
    exports.fullDate = () => {
        return `${tampilTanggal}`
    }