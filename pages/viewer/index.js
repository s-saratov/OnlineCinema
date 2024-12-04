// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const film = urlParams.get("film");

// Определяем видео и заголовок в зависимости от параметра
let videoSrc = "";
let filmInfo = "";

switch (film) {
  case "operation-y":
    videoSrc = "https://www.youtube.com/embed/m3n4LptYWNo";
    filmInfo =
      "The film consists of three short stories, united by the figure of the main character Shurik - a rustic, but resilient and resourceful student. Shurik is distinguished by the fact that he constantly gets into some unusual stories, but thanks to his easy attitude to life, he turns any situation into a fun adventure.";
    break;
  case "alexander-nevsky":
    videoSrc = "https://www.youtube.com/embed/Gq4PaJfod4w";
    filmInfo =
      "A historical and biographical drama about an outstanding Russian commander who defeated the knights of the Teutonic Order. The ingenious plan of Prince Alexander Nevsky and the courage of the combatants brought victory to the army in the battle of 1242 on Lake Peipus.";
    break;
  case "the-twelve-chairs":
    videoSrc = "https://www.youtube.com/embed/d5GSQY4Lt-E";
    filmInfo =
      'Ostap Bender, shortly after arriving in Stargorod, meets Ippolit "Pussy" Vorobyaninov, a Marshal of Nobility who\'s looking for a set of 12 chairs that belonged to his mother-in-law, who on her deathbed confesses of hiding diamonds in one of them. However, the confession is overheard by Father Fyodor, who is also looking for them. Ostap and Ippolit decide to go on the search together, traveling all around Russia and having a series of misadventures.';
    break;
  case "stalker":
    videoSrc = "https://www.youtube.com/embed/Q3hBLv-HLEc";
    filmInfo =
      'Based on the novel "Roadside Picnic" by Arkady and Boris Strugatsky. The Zone that arose on Earth for unknown reasons attracts attention with inexplicable phenomena that occur there. A rumor has spread that in the center of the Zone there is something that gives a person everything he wants. But staying in the Zone is deadly, and therefore it is strictly guarded. There, each for their own reasons, the Writer and the Professor go, the Stalker leads them to the mysterious center, feeling and understanding the Zone...';
    break;
  case "war-and-peace_1":
    videoSrc = "https://www.youtube.com/embed/bIij-KQ0jYU";
    filmInfo =
      '"All thoughts that have huge consequences are always simple. My whole idea is that if vicious people are interconnected and make up strength, then honest people need to do the same," - with these words of Leo Tolstoy epic picture "War and Peace" begins. Film tells about the life of Russian society at the beginning of the 19th century. Against the backdrop of the tragic and dramatic events associated with the war with Napoleon, the psychological searches of Andrei Bolkonsky, Natasha Rostova, Pierre Bezukhov and other heroes of the famous novel are vividly presented.';
    break;
  case "war-and-peace_2":
    videoSrc = "https://www.youtube.com/embed/uJjqSfdFuUI";
    filmInfo =
      '"All thoughts that have huge consequences are always simple. My whole idea is that if vicious people are interconnected and make up strength, then honest people need to do the same," - with these words of Leo Tolstoy epic picture "War and Peace" begins. Film tells about the life of Russian society at the beginning of the 19th century. Against the backdrop of the tragic and dramatic events associated with the war with Napoleon, the psychological searches of Andrei Bolkonsky, Natasha Rostova, Pierre Bezukhov and other heroes of the famous novel are vividly presented.';
    break;
  case "war-and-peace_3":
    videoSrc = "https://www.youtube.com/embed/wpKA1meiJzs";
    filmInfo =
      '"All thoughts that have huge consequences are always simple. My whole idea is that if vicious people are interconnected and make up strength, then honest people need to do the same," - with these words of Leo Tolstoy epic picture "War and Peace" begins. Film tells about the life of Russian society at the beginning of the 19th century. Against the backdrop of the tragic and dramatic events associated with the war with Napoleon, the psychological searches of Andrei Bolkonsky, Natasha Rostova, Pierre Bezukhov and other heroes of the famous novel are vividly presented.';
    break;
  case "war-and-peace_4":
    videoSrc = "https://www.youtube.com/embed/nvDMu5e4xzw";
    filmInfo =
      '"All thoughts that have huge consequences are always simple. My whole idea is that if vicious people are interconnected and make up strength, then honest people need to do the same," - with these words of Leo Tolstoy epic picture "War and Peace" begins. Film tells about the life of Russian society at the beginning of the 19th century. Against the backdrop of the tragic and dramatic events associated with the war with Napoleon, the psychological searches of Andrei Bolkonsky, Natasha Rostova, Pierre Bezukhov and other heroes of the famous novel are vividly presented.';
    break;
  default:
    videoSrc = "https://www.youtube.com/embed/m3n4LptYWNo"; // По умолчанию
    filmInfo =
      "The film consists of three short stories, united by the figure of the main character Shurik - a rustic, but resilient and resourceful student. Shurik is distinguished by the fact that he constantly gets into some unusual stories, but thanks to his easy attitude to life, he turns any situation into a fun adventure.";
}

// Устанавливаем источник видео и заголовок
document.getElementById("video-frame").src = videoSrc;
document.getElementById("film-info").innerText = filmInfo;
