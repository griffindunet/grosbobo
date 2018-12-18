 function affiche_epaules() {
  
      var cible = document.getElementById('cible');
      if(cible.style.display != '') {
        cible.style.display = '';
      } else {
        cible.style.display = 'none';
      }
    } 
    function affiche_poignets() {
      var poignets = document.getElementById('poignets');
      if(poignets.style.display != '') {
        poignets.style.display = '';
      } else {
        poignets.style.display = 'none';
      }
    }
     function hanche1() {
      var hanche1 = document.getElementById('hanche1');
      if(hanche1.style.display != '') {
        hanche1.style.display = '';
      } else {
        hanche1.style.display = 'none';
      }
    } 
       function genou() {
      var ge = document.getElementById('ge');
      if(ge.style.display != '') {
        ge.style.display = '';
      } else {
        ge.style.display = 'none';
      }
    } 

      function cheville() {
      var cheville = document.getElementById('che');
      if(cheville.style.display != '') {
        cheville.style.display = '';
      } else {
        cheville.style.display = 'none';
      }
    } 
    function couleur() {
  document.getElementById('cible').style.backgroundColor='#dc1818bf';
}
