//SEARCH
$(".page-search").on("keyup", function() {
  var v = $(this).val();                     // Nome dado ao valor desse filtro
  $(".imovitem").each(function() {
    if (v == ""){                            // 'Se' o valor for nulo removerá suas classes
      $(this).removeClass("noresultsSrch");  
      $(this).removeClass("resultsSrch");}
    if (v != "" && $(this).text().search(new RegExp(v, 'gi')) != -1) {  // 'Se'o valor der "match"
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
       if ($(this).hasClass("noresultsSlc") || $(this).hasClass("noresultsSlc2") || $(this).hasClass("noresultsQuartos") || $(this).hasClass("noresultsSuites") || $(this).hasClass("noresultsVagas") ) {} else { // E 'se' não houver outra classe atribuída  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
          $(this).addClass("resultsSrch"); // Então adicionará sua classe, permitindo a visibilidade
          $(this).removeClass("noresultsSrch"); }   // E removerá sua classe de invisibilidade
  } else if (v != "" && $(this).text().search(v) != 1) {  //Caso o valor não dê "match"
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSlc") || $(this).hasClass("resultsSlc2") || $(this).hasClass("resultsQuartos") || $(this).hasClass("resultsSuites") || $(this).hasClass("resultsVagas") ) {  // E se houverem outras classes atribuídas
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(this).addClass("noresultsSrch");    // E adicionará sua própria classe de invisibilidade
    } else {
        $(this).addClass("noresultsSrch");    // Caso contrário apenas adicionará sua classe de invisbilidade
        $(this).removeClass("resultsSrch"); } // E apagará sua classe de visibilidade
    }
  });
});

//STATUS (SLC1)
 $("#statusSlc").on("change", function() {
  var slc1 = $(this).val();
  $(".imovitem").each(function() {
    if (slc1 == ""){
      $(this).removeClass("noresultsSlc");
      $(this).removeClass("resultsSlc");}
    if (slc1 != "" && $(this).text().search(new RegExp(slc1, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") || $(this).hasClass("noresultsSlc2") || $(this).hasClass("noresultsQuartos") || $(this).hasClass("noresultsSuites") || $(this).hasClass("noresultsVagas") ) {} else {   
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSlc");
        $(this).removeClass("noresultsSlc");}
  } else if (slc1 != "" && $(this).text().search(slc1) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") || $(this).hasClass("resultsSlc2") || $(this).hasClass("resultsQuartos") || $(this).hasClass("resultsSuites") || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(this).addClass("noresultsSlc");
    } else {
        $(this).addClass("noresultsSlc");
        $(this).removeClass("resultsSlc"); }
    } 
  });
});

//NEGÓCIO (SLC2)
$("#negocioSlc").on("change", function() {
  var slc2 = $(this).val();
  $(".imovitem").each(function() {
    if (slc2 == ""){
      $(this).removeClass("noresultsSlc2");
      $(this).removeClass("resultsSlc2");}
    if (slc2 != "" && $(this).text().search(new RegExp(slc2, 'gi')) != -1) {
      // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") || $(this).hasClass("noresultsSlc") || $(this).hasClass("noresultsQuartos") || $(this).hasClass("noresultsSuites") || $(this).hasClass("noresultsVagas") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSlc2");
        $(this).removeClass("noresultsSlc2");}
  } else if (slc2 != "" && $(this).text().search(slc2) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") || $(this).hasClass("resultsSlc") || $(this).hasClass("resultsQuartos") || $(this).hasClass("resultsSuites") || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(this).addClass("noresultsSlc2");
    } else {
        $(this).addClass("noresultsSlc2");
        $(this).removeClass("resultsSlc2"); }
    }
  });
});

//QUARTOS
$(".quartosNum").on("change", function() {  
  var qpreNum = $(this).val();
  if (qpreNum == 1) { 
    var qName = " quarto"}
  else {
    var qName = " quartos"}
  var qNum = qpreNum.toString() + qName;
  $(".imovitem").each(function() {
    if (qNum == qName){
      $(this).removeClass("noresultsQuartos");
      $(this).removeClass("resultsQuartos");}
    if (qNum != qName && $(this).text().search(new RegExp(qNum, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/ 
      if ($(this).hasClass("noresultsSrch") || $(this).hasClass("noresultsSlc") || $(this).hasClass("noresultsSlc2") || $(this).hasClass("noresultsSuites") || $(this).hasClass("noresultsVagas") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsQuartos");
        $(this).removeClass("noresultsQuartos");}
  } else if (qNum != qName && $(this).text().search(qNum) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") || $(this).hasClass("resultsSlc") || $(this).hasClass("resultsSlc2") || $(this).hasClass("resultsSuites") || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(this).addClass("noresultsQuartos");
    } else {
        $(this).addClass("noresultsQuartos");
        $(this).removeClass("resultsQuartos"); }
    }
  });
});

//SUÍTES
$(".suitesNum").on("change", function() {  
  var spreNum = $(this).val();
  if (spreNum == 1) { 
    var sName = " suíte"}
  else {
    var sName = " suítes"}
  var sNum = spreNum.toString() + sName;
  $(".imovitem").each(function() {
    if (sNum == sName){
      $(this).removeClass("noresultsSuites");
      $(this).removeClass("resultsSuites");}
    if (sNum != sName && $(this).text().search(new RegExp(sNum, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") || $(this).hasClass("noresultsSlc") || $(this).hasClass("noresultsSlc2") || $(this).hasClass("noresultsQuartos")  || $(this).hasClass("noresultsVagas")) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSuites");
        $(this).removeClass("noresultsSuites");}
  } else if (sNum != sName && $(this).text().search(sNum) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") || $(this).hasClass("resultsSlc") || $(this).hasClass("resultsSlc2") || $(this).hasClass("resultsQuartos") || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(this).addClass("noresultsSuites");
    } else {
        $(this).addClass("noresultsSuites");
        $(this).removeClass("resultsSuites"); }
    }
  });
});

// VAGAS
$(".vagasNum").on("change", function() {
  var vpreNum = $(this).val();
  if (vpreNum == 1) { 
    var vName = " vaga"}
  else {
    var vName = " vagas"}
  var vNum = vpreNum.toString() + vName;
  $(".imovitem").each(function() {
    if (vNum == vName){
      $(this).removeClass("noresultsVagas");
      $(this).removeClass("resultsVagas");}
    if (vNum != vName && $(this).text().search(new RegExp(vNum, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") || $(this).hasClass("noresultsSlc") || $(this).hasClass("noresultsSlc2") || $(this).hasClass("noresultsQuartos") || $(this).hasClass("noresultsSuites") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsVagas");
        $(this).removeClass("noresultsVagas");}
  } else if (vNum != vName && $(this).text().search(vNum) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") || $(this).hasClass("resultsSlc") || $(this).hasClass("resultsSlc2")  || $(this).hasClass("resultsQuartos")  || $(this).hasClass("resultsSuites") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(this).addClass("noresultsVagas");
    } else {
        $(this).addClass("noresultsVagas");
        $(this).removeClass("resultsVagas"); }
    }
  });
});

//
/* RANGE SLIDER
$(".slider").on("change", function() {
  var minValue = Number($("#minRange").val());
  var maxValue = Number($("#maxRange").val());
  document.getElementById("maxvalueShow").innerHTML = maxValue;
  document.getElementById("minvalueShow").innerHTML = minValue;
  console.log(minValue + " " + maxValue);
  $(".imovitem").each(function() {
    var priceImov = Number($(".divpriceH").text());
    if (priceImov > minValue && priceImov < maxValue) {
      if ($(this).hasClass("noresultsSrch") || $(this).hasClass("noresultsSlc") || $(this).hasClass("noresultsSlc2") || $(this).hasClass("noresultsQuartos")) {} else {  
        $(this).addClass("resultsSldr");
        $(this).removeClass("noresultsSldr");}
  } else if (priceImov < minValue || priceImov > maxValue) {
      if ($(this).hasClass("resultsSrch") || $(this).hasClass("resultsSlc") || $(this).hasClass("resultsSlc2") || $(this).hasClass("resultsQuartos")) {
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsQuartos");
        $(this).addClass("noresultsSldr");
    } else {
        // $(this).addClass("noresultsSldr");
        // $(this).removeClass("resultsSldr"); }
    }
  });
});
        */
//
