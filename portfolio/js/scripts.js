let yearWeb = document.getElementById("year");
let yearXp = document.getElementById("xp-years");

currentYear = new Date().getFullYear();
yearWeb.innerHTML = currentYear;
yearXp.innerHTML = currentYear - 2014;

/*
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es',  includedLanguages : 'en,es'}, 'google_translate_element');
  }
*/

