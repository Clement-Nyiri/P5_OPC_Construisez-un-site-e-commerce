let produitsDejaPresents=JSON.parse(localStorage.getItem("panier"));const panierProduit=document.getElementById("panier_produit");if(null===produitsDejaPresents){const e='<h2 class="text-center font-weight-bold" id="paniervide">Le panier est vide!</h2>';panierProduit.innerHTML=e}else{let e=[],t=0;for(k=0;k<produitsDejaPresents.length;k++){e+=`<li class="pt-2 pb-2 border-bottom border-danger" id="produit_achete">\n        <a href="produit.html?${produitsDejaPresents[k].id}"><img class="ml-lg-auto mr-lg-n1 ml-md-n2" id="image_panier" src="${produitsDejaPresents[k].image}" width="70" height="60" alt="image_article" /></a>\n        <a href="produit.html?${produitsDejaPresents[k].id}"><h5 id="nom_panier" class="font-weight-bold ml-lg-2 ml-md-1 text-decoration-none">${produitsDejaPresents[k].name}</h5></a> \n        <p class="mt-lg-2 ml-lg-2" id="description_panier">${produitsDejaPresents[k].description}</p>\n        <p class="mt-lg-2 mr-lg-1 font-weight-bold">Qté:${produitsDejaPresents[k].quantity}</p>\n        <button class="btn btn-dark h-100 mr-1" id="btn-supprimer" data-num="${k}">Supprimer</button>\n        <p class="font-weight-bold mt-2 mr-lg-2 mr-md-n2" id="prix_panier">${new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(produitsDejaPresents[k].price/100)}</p>\n        </li>`;var totalProduit=parseFloat(produitsDejaPresents[k].price);t+=totalProduit*produitsDejaPresents[k].quantity}var sousTotal='<h5 class="text-right mt-2 mb-n2 font-weight-bold" id="total_prix">Total: '+new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(t/100)+"</h5>";panierProduit.innerHTML=e+sousTotal;const r=document.querySelectorAll("#btn-supprimer");for(m=0;m<r.length;m++)r[m].addEventListener("click",function(e){var t=parseInt(e.currentTarget.getAttribute("data-num"));produitsDejaPresents.splice(t,1),0==produitsDejaPresents.length?localStorage.removeItem("panier"):localStorage.setItem("panier",JSON.stringify(produitsDejaPresents)),document.location.reload()})}if(null!=produitsDejaPresents){var form=document.getElementById("formulaire"),formCommande=document.createElement("div");formCommande.classList.add("col-lg-6","col-sm-8","col-11","mx-auto","mt-sm-5","mt-lg-3","border","border-danger","bg-light"),formCommande.innerHTML='<div>    <h3 class="text-center mt-3 mb-3 font-weight-bold">Formulaire de commande</h3>    <form>        <div class="form-group mt-3">            <label for="firstName" class="w-25 font-weight-bold">Prénom : </label><span id="firstNameErreur" class="text-dark"></span>            <input type="text" class="form-control w-75 w-md-50" id="firstName" required>        </div>        <div class="form-group mt-3">            <label for="lastName" class="w-25 font-weight-bold">Nom :</label><span id="lastNameErreur" class="text-dark"></span>            <input type="text" class="form-control w-75" id="lastName" required>        </div>        <div class="form-group mt-3">            <label for="adress" class="w-25 font-weight-bold">Adresse :</label><span id="adressErreur" class="text-dark"></span>            <input type="text" class="form-control w-75" id="adress" required>        </div>        <div class="form-group mt-3">            <label for="city" class="w-25 font-weight-bold">Ville :</label><span id="cityErreur" class="text-dark"></span>            <input type="text" class="form-control w-75" id="city" required>        </div>        <div class="form-group mt-3">            <label for="email" class="w-25 font-weight-bold">Adresse e-mail :</label><span id="emailErreur" class="text-dark"></span>            <input type="email" class="form-control w-75" id="email" required>        </div>        <div class="text-center mb-3 mt-4">        <button id="commander" type="submit" class="btn btn-secondary"><strong>Commander</strong></button>        </div>    </form>    </div>',form.appendChild(formCommande)}var commande=document.getElementById("commander");commande.addEventListener("click",e=>{e.preventDefault();const t={firstName:document.getElementById("firstName").value,lastName:document.getElementById("lastName").value,address:document.getElementById("adress").value,city:document.getElementById("city").value,email:document.getElementById("email").value},r=e=>/^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(e);(function(){const e=t.firstName;return r(e)?(document.getElementById("firstNameErreur").textContent="",!0):(document.getElementById("firstNameErreur").textContent="Veuillez remplir correctement ce champ",!1)})()&&function(){const e=t.lastName;return r(e)?(document.getElementById("lastNameErreur").textContent="",!0):(document.getElementById("lastNameErreur").textContent="Veuillez remplir correctement ce champ",!1)}()&&function(){const e=t.adress;return/^[A-Za-z0-9\s]{6,60}$/.test(e)?(document.getElementById("adressErreur").textContent="",!0):(document.getElementById("adressErreur").textContent="Veuillez remplir correctement ce champ",!1)}&&function(){const e=t.city;return r(e)?(document.getElementById("cityErreur").textContent="",!0):(document.getElementById("cityErreur").textContent="Veuillez remplir correctement ce champ",!1)}()&&function(){const e=t.email;return/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e)?(document.getElementById("emailErreur").textContent="",!0):(document.getElementById("emailErreur").textContent="Veuillez remplir correctement ce champ",!1)}()?(localStorage.setItem("contact",JSON.stringify(t)),window.location.replace("commande_thx.html")):alert("Veuillez remplir correctement le formulaire")});