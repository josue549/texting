$(window).ready(function() {accueil();
                           //var param = 'l=5';
          /*$('#r').load('req_news.php',param);*/});
$('#mAccueil').click(function() {accueil();});
$('#mQuestions').click(function() {questions()});
$('#mProb').click(function() {problemes();});
$('#enregistrer').click(function() {
    enregistrer();
    
});
//effet est l'un des effets suivants : blind, clip, drop, explode, fold, puff, slide, scale, size et pulsate.
$('#onglets').tabs();

setInterval(reg_txt(), 5000);

function accueil()
{
  $('#sectionQuestions').hide();
$('#sectionProbleme').hide();
  $('#sectionAccueil').fadeIn();    
    
}
function questions()
{
    $('#sectionAccueil').hide();
    $('#sectionProbleme').hide();
  $('#sectionQuestions').show('clip');
    
    
}
function problemes()
{
  $('#sectionQuestions').hide();
  $('#sectionAccueil').hide(); 
    $('#sectionProbleme').show('clip');
    
}

function enregistrer()
{
    var nom=$('#iNom').val();
    var prenom=$('#iPrenom').val();
    var age=$('#iAge').val();
    if(age=='' || nom=='' || prenom=='')
    {   
        alert('Veuillez remplir tous les champs svp');
    }
    else{
    $.post('requete.php?'+'nom='+nom+'&prenom='+prenom+'&age='+age, function() {
  // Une ou plusieurs instructions
    $('#r').html('Clients enregistré');
});
    }
}
