// vypocet celkove ceny
document.querySelector(".main-btn").addEventListener("click", function (event) {
   event.preventDefault(); // Zabrání výchozímu chování tlačítka

   let celkovaCena = 0;

   // checkbox cena
   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
         const pocetChb = document.getElementById(`${checkbox.id}C`);
         const pocetValue = pocetChb?.value ?? "";

         const cena = parseInt(checkbox.value, 10);
         const pocet = parseInt(pocetValue, 10);

         if (pocetValue !== "" && !isNaN(cena) && !isNaN(pocet)) {
            celkovaCena += cena * pocet;
         }
      }
   });
   //console.log(`celkova cena za kola ${celkovaCena}`); //KONTROLA

   // Ziskani poctu dnu
   const pocetDnuSelect = document.getElementById("pocetDnu");
   const selectedOption =
      pocetDnuSelect.options[pocetDnuSelect.selectedIndex].value;

   let pocetDnu;

   switch (selectedOption) {
      case "den1":
         pocetDnu = 1;
         break;
      case "den3":
         pocetDnu = 3;
         break;
      case "den7":
         pocetDnu = 7;
         break;
      case "den14":
         pocetDnu = 14;
         break;
      default:
         pocetDnu = 1; // Výchozí hodnota, pokud by nastala neočekávaná situace
         break;
   }
   celkovaCena = celkovaCena * pocetDnu;
   // console.log(`pocet dnu ${pocetDnu}`); //KONTROLA
   // console.log(`celkova cena kola plus pocet dnu ${celkovaCena}`); //KONTROLA

   // ziskani hodnoty z radia
   const radioButtons = document.querySelectorAll('input[type="radio"]');
   let navyseni = 0;

   radioButtons.forEach((radio) => {
      if (radio.checked) {
         switch (radio.id) {
            case "stresni":
               navyseni = celkovaCena * 0.05;
               break;
            case "tazny":
               navyseni = celkovaCena * 0.1;
               break;
            default:
               navyseni = 0;
               break;
         }
      }
   });
   // console.log(`navyseni ${navyseni}`); //KONTROLA

   // konecna cena vcetne navyseni
   celkovaCena += navyseni;
   //console.log(`celkova cena ${celkovaCena}`); //KONTROLA

   const maxCenaInput = document.getElementById("maxDam");
   const maxCena = parseInt(maxCenaInput.value);
   if (maxCena) {
      const message =
         celkovaCena > maxCena
            ? "Cena překračuje maximální cenu, kterou jste zadali."
            : "Cena je v pořádku.";
   }

   alert(message);
});

// email

const kontrola = (email) => {
   if (!email) {
      alert("Prosím, vyplňte pole pro email.");
   } else if (email.indexOf("@") < 1 || email.indexOf(".") < 3) {
      alert("Nesprávná emailová adresa");
   } else {
      confirm("Jestli souhlasíš s odesláním údajů klikni OK");
   }
};
document.querySelector(".submit-btn").addEventListener("click", () => {
   let email = document.querySelector(".email").value;
   kontrola(email);
});
