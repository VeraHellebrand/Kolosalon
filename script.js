// vypocet celkove ceny
document.querySelector(".main-btn").addEventListener("click", function(event) {
   event.preventDefault(); // Zabrání výchozímu chování tlačítka

   // checkbox cena
   let celkCena = 0;
   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
   checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
         const pocetChb = document.getElementById(checkbox.id + "C");
         if (pocetChb.value !== "") {
            const cena = parseInt(checkbox.value);
            const pocet = parseInt(pocetChb.value);
            celkCena += cena * pocet;
         }
      }
   });

   // ziskani poctu dnu
   const pocetDnuSelect = document.getElementById("pocetDnu");
   const selectedOption = pocetDnuSelect.options[pocetDnuSelect.selectedIndex].value;
   let pocetDnu = 1; // Vychozi hodnota je 1 den
   if (selectedOption === "den3") {
      pocetDnu = 3;
   } else if (selectedOption === "den7") {
      pocetDnu = 7;
   } else if (selectedOption === "den14") {
      pocetDnu = 14;
   }
   // celkova cena * pocet dnu
   celkCena = celkCena * pocetDnu; 

   // ziskani hodnoty z radia
   const radioButtons = document.querySelectorAll('input[type="radio"]');
   let navyseni = 0;
   radioButtons.forEach(radio => {
      if (radio.checked) {
         if (radio.id === "stresni") {
            navyseni = celkCena * 0.05; 
         } else if (radio.id === "tazny") {
            navyseni = celkCena * 0.1; 
         }
      }
   });
   // konecna cena vcetne navyseni
   celkCena += navyseni; 
   document.getElementById("celkCena").textContent = celkCena + " Kč";
   
   const maxCena = document.getElementById("maxDam");
      if (celkCena > parseInt(maxCena.value)) {
         alert("Cena překračuje maximální cenu, kterou jste zadali.");
         
      }
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