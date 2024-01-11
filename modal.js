//                           RESPONSIVE                //
// la class responsive est rajouté à la class initiale
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += "responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  // DOM Elements//////
  //(page du formulaire)
  const modalbg = document.querySelector(".bground");
  const formData = document.querySelectorAll(".formData");
  
  // constante spanClose (représente .close) pour fermer la modale (X)
  const closeModalBtn = document.querySelectorAll(".close");
  const form = document.getElementById("formulaire");
  const end = document.querySelector(".btn-end");
  const modalBody = document.querySelector(".modal-body");
  const fermer = document.getElementById("end");
  
  //(btn je m'inscris) + click
  const modalBtn = document.querySelectorAll(".modal-btn");
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  // et je ferme la modal avec (x)
  closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal));
  
  //recupération des données du formulaire

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const condition = document.getElementById("checkbox1");
  
  //display des modals
  function closeModal() {
    modalbg.style.display = "none";
  }
  
  function launchModal() {
    modalbg.style.display = "block";
  }
  
  // modal formulaire  1) si le formulaire est bien écrit il peut etre envoyé
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
    if (
      validEmail() == true &&
      validPassword() == true &&
      validCondition() == true
    ) {
      sendForm();
      sendModalMessage();
    }
  });
  
  // 2) pour que le false passe en true il faut indiquer l'ensemble des inputs de la fonction validate form
  function validate() {
    validEmail();
    validPassword();    
    validCondition();
  }

  

  
  function validEmail() {
    let mailCaractere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex email
    if (!mailCaractere.test(email.value)) {
      setErreur(email, "Veuillez saisir une adresse email valide.", "emailError");
      return false;
    } else {
      setValid(email, "emailError");
      return true;
    }
  }

  function validPassword() {
    let mailCaractere = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex email
    if (!mailCaractere.test(password.value)) {
      setErreur(password, "Veuillez saisir un mot de passe valide.", "passwordError");
      return false;
    } else {
      setValid(password, "passwordError");
      return true;
    }
  }
 
  
 
  
 
  
  // pour les CGVs il faut indiquer une valeur inverse (car "checked")//
  
  function validCondition() {
    if (condition.checked) {
      setValidCheckbox(condition, "conditionError");
      return true;
    } else {
      setErreurCheckbox(
        condition,
        "Veuillez vérifier que vous avez accepté les termes et conditions",
        "conditionError"
      );
      return false;
    }
  }
  
  // pour email, password
  
  function setErreur(input, message, idError) {
    //input est déclaré mais il n'a pas de valeur
    const error = document.getElementById(idError);
    console.log(error);
    error.innerText = message;
    input.className = "text-control input-error";
  }
  
  function setValid(input, idError) {
    const error = document.getElementById(idError);
    error.innerText = "";
    input.className = "text-control input-valid";
  }
  
  // pour location et cgv
  function setErreurCheckbox(input, message, idError) {
    const error = document.getElementById(idError);
    error.innerText = message;
    input.className = "checkbox-input input-error";
  }
  
  function setValidCheckbox(input, idError) {
    const error = document.getElementById(idError);
    error.innerText = "";
    input.className = "checkbox-input input-valid";
  }
  
  //valiDer le champs des saisies avec confirmation de saisie "message"
  function sendForm() {
    modalBody.classList.add("not-active");
  }
  
  function sendModalMessage() {
    modalBody.innerHTML = " Merci ! Votre réservation a bien été enregistrée.";
    modalBody.style.height = "600px";
    modalBody.style.fontSize = "30px";
    modalBody.style.textAlign = "center";
    modalBody.style.paddingTop = "250px";
    modalBody.style.paddingLeft = "100px";
    modalBody.style.paddingRight = "100px";
    fermer.style.display = "block";
    fermer.addEventListener("click", closeModal);
  }