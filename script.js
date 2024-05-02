const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

function addRecommendation() {
    // Récupérer les valeurs du formulaire
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Créer un nouvel élément de paragraphe
    var recommendationContent = document.createElement("p");
    recommendationContent.classList.add("recommendation-content");
    
    // Ajouter le message du formulaire en tant que contenu du paragraphe
    recommendationContent.textContent = message;

    // Créer un nouvel élément de section
    var recommendationSection = document.createElement("section");
    recommendationSection.classList.add("recommendation");
    
    // Ajouter le paragraphe à la section des recommandations
    recommendationSection.appendChild(recommendationContent);

    // Ajouter la section des recommandations à la fin de la section de contenu
    var container = document.querySelector(".container");
    container.appendChild(recommendationSection);
}



document.getElementById("myForm").addEventListener("submit", function(event){
	event.preventDefault(); // Empêche la soumission du formulaire par défaut
	
	if (confirm(" Thank you for submitting a recommendation Are you sure you want to submit this form?")) {
	  this.submit(); // Soumet le formulaire si l'utilisateur confirme
	} else {
	  // Action à prendre si l'utilisateur annule la soumission
	}
  });
  
  
