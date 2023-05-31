let userInput = document.getElementById("date");                                     //userInput değişkeni, HTML de yazdığımız "date" İD'li öğre olsun (çağırıyoruz)
userInput.max = new Date().toISOString().split("T")[0];                              //Date methodu ile o anki tarih ve saati alırız, toISOString methodu bir dizeye bir Date nesnesi dönüştürür, split methodu elimizde bulunan metini istediğimiz şekilde parçalara bölerek ondan bir array oluşturur 
let result = document.getElementById("result");


function calculateAge(){                                                             // yaşı hesapla fonksiyonu
    let birthDate = new Date(userInput.value);                                       //birthDate değişkeni o anki tarih bilgisini versin ve gelen value verilerini, birthDate adlı değişkene  aldık. (Doğum günü bilgisi)
    
    let d1 = birthDate.getDate();                                                    // Seçilen tarihteki ayın gün değerini döndürür
    let m1 = birthDate.getMonth() + 1;                                               // Seçilen tarihteki ayın değerini döndürür  (+1, çünkü seçeceğimiz ayın değer 0'dan başlar)
    let y1 = birthDate.getFullYear();                                                // Seçilen tarihteki yılın değerini döndürür

    let today = new Date();                                                          // Today değişkeni, mevcut tarihi ve saati döndürsün

    let d2 = today.getDate();                                                        // Mevcut gün bilgisini verir
    let m2 = today.getMonth() + 1;                                                   // Mevcut ay bilgisini verir (+1, çünkü seçeceğimiz ayın değer 0'dan başlar)
    let y2 = today.getFullYear();                                                    // Mevcut yıl bilgisini verir

    let d3, m3, y3;                                                                  // d3,m3,y3 değişkenini yarattık, yaşımızı, günümüzü, ayımızı hesaplayack

    y3 = y2 - y1;                                                                    // Toplam yıl (yaş) = mevcut yıl - doğum tarihi

    if(m2 >= m1){                                                                    // eğer mevcut ay doğum ayından daha büyük yada eşitse eğer
        m3 = m2 - m1;                                                                // o zaman, toplam ay = mevcut ay - doğum ayı
    }else{                                                                           // eşit yada daha büyük değilse eğer, o zaman...
        y3--;                                                                        // toplam yılı al ve 1 çıkart
        m3 = 12 + m2 - m1;                                                           // toplam ay = 12 + mecvut ay - doğum ayı
    }

    if(d2 >= d1){                                                                    // eğer mevcut gün doğum gününde ndaha büyük yada eşitse,
        d3 = d2 - d1;                                                                // toplam gün = mevcut gün - doğum günü
    }else{                                                                           // daha büyük yada eşit değilse eğer, o zaman...
        m3--;                                                                        // toplam ayı al ve 1 çıkart
        d3 = getDaysInMonth(y1, m1) + d2 - d1;                                       // toplam gün sayısı = mevcut ayın gün sayısı + mevcut gün - doğum günü
    }

    if(m3 < 0){                                                                      // eğer toplam ay sayısı 0'dan küçükse eğer, o zaman ...
        m3 = 11;                                                                     // toplam ayların sayısı 11 olsun
        y3--;                                                                        // ve toplam yıldan -1 çıkart
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old!`
}

function getDaysInMonth(year, month){                                                // ayın içerisindeki günleri al foksiyonu
    return new Date(year, month, 0).getDate();                                       // Mevcut ayın içerdiği gün sayılarını döndür (mayıs ayının gün sayısı 30 mu 31 mi )
}

