//SEARCH
$(".page-search").on("keyup", function() {
  classTest();
  var v = $(this).val();                     // Nome dado ao valor desse filtro
  $(".imovitem").each(function() {
    if (v == ""){                            // 'Se' o valor for nulo removerá suas classes
      $(this).removeClass("noresultsSrch");  
      $(this).removeClass("resultsSrch");
      $(".testeDivImov").removeClass("testeSrch");}
    if (v != "" && $(this).text().search(new RegExp(v, 'gi')) != -1) {  // 'Se'o valor der "match"
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
       if ($(this).hasClass("noresultsSlc") 
       || $(this).hasClass("noresultsSlc2")
       || $(this).hasClass("noresultsSldr") 
       || $(this).hasClass("noresultsSlc3") 
       || $(this).hasClass("noresultsQuartos") 
       || $(this).hasClass("noresultsSuites") 
       || $(this).hasClass("noresultsVagas") ) {} else { // E 'se' não houver outra classe atribuída  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
          $(this).addClass("resultsSrch"); // Então adicionará sua classe, permitindo a visibilidade
          $(this).removeClass("noresultsSrch");    // E removerá sua classe de invisibilidade
          $(".testeDivImov").addClass("testeSrch");}
  } else if (v != "" && $(this).text().search(v) != 1) {  //Caso o valor não dê "match"
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSlc") 
      || $(this).hasClass("resultsSlc2")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc3") 
      || $(this).hasClass("resultsQuartos") 
      || $(this).hasClass("resultsSuites") 
      || $(this).hasClass("resultsVagas") ) {  // E se houverem outras classes atribuídas
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeSrch");
        $(this).addClass("noresultsSrch");    // E adicionará sua própria classe de invisibilidade
    } else {
        $(this).addClass("noresultsSrch");    // Caso contrário apenas adicionará sua classe de invisbilidade
        $(this).removeClass("resultsSrch");  // E apagará sua classe de visibilidade
        $(".testeDivImov").removeClass("testeSrch"); }
    }
  });
});

//STATUS (SLC1)
 $("#statusSlc").on("change", function() {
  classTest();
  var slc1 = $(this).val();
  $(".imovitem").each(function() {
    if (slc1 == ""){
      $(this).removeClass("noresultsSlc");
      $(this).removeClass("resultsSlc");
      $(".testeDivImov").removeClass("testeSlc"); }
    if (slc1 != "" && $(this).text().search(new RegExp(slc1, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsSlc2") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsSlc3") 
      || $(this).hasClass("noresultsQuartos") 
      || $(this).hasClass("noresultsSuites") 
      || $(this).hasClass("noresultsVagas") ) {} else {   
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSlc");
        $(this).removeClass("noresultsSlc");
        $(".testeDivImov").addClass("testeSlc");}
  } else if (slc1 != "" && $(this).text().search(slc1) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") 
      || $(this).hasClass("resultsSlc2")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc3") 
      || $(this).hasClass("resultsQuartos") 
      || $(this).hasClass("resultsSuites") 
      || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeSlc");
        $(this).addClass("noresultsSlc");
    } else {
        $(this).addClass("noresultsSlc");
        $(this).removeClass("resultsSlc");
        $(".testeDivImov").removeClass("testeSlc"); }
    } 
  });
});

//NEGÓCIO (SLC2)
$("#negocioSlc").on("change", function() {
  classTest();
  var slc2 = $(this).val();
  $(".imovitem").each(function() {
    if (slc2 == ""){
      $(this).removeClass("noresultsSlc2");
      $(this).removeClass("resultsSlc2");
      $(".testeDivImov").removeClass("testeSlc2");}
    if (slc2 != "" && $(this).text().search(new RegExp(slc2, 'gi')) != -1) {
      // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsSlc") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsSlc3") 
      || $(this).hasClass("noresultsQuartos") 
      || $(this).hasClass("noresultsSuites") 
      || $(this).hasClass("noresultsVagas") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSlc2");
        $(this).removeClass("noresultsSlc2");
        $(".testeDivImov").addClass("testeSlc2");}
  } else if (slc2 != "" && $(this).text().search(slc2) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") 
      || $(this).hasClass("resultsSlc")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc3") 
      || $(this).hasClass("resultsQuartos") 
      || $(this).hasClass("resultsSuites") 
      || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeSlc2");
        $(this).addClass("noresultsSlc2");
    } else {
        $(this).addClass("noresultsSlc2");
        $(this).removeClass("resultsSlc2");
        $(".testeDivImov").removeClass("testeSlc2"); }
    }
  });
});

//TIPO (SLC3)
$("#tipoSlc").on("change", function() {
  classTest();
  var slc3 = $(this).val();
  $(".imovitem").each(function() {
    if (slc3 == ""){
      $(this).removeClass("noresultsSlc3");
      $(this).removeClass("resultsSlc3");
      $(".testeDivImov").removeClass("testeSlc3");}
    if (slc3 != "" && $(this).text().search(new RegExp(slc3, 'gi')) != -1) {
      // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsSlc") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsSlc2") 
      || $(this).hasClass("noresultsQuartos") 
      || $(this).hasClass("noresultsSuites") 
      || $(this).hasClass("noresultsVagas") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSlc3");
        $(this).removeClass("noresultsSlc3");
        $(".testeDivImov").addClass("testeSlc3");}
  } else if (slc3 != "" && $(this).text().search(slc3) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") 
      || $(this).hasClass("resultsSlc")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc2") 
      || $(this).hasClass("resultsQuartos") 
      || $(this).hasClass("resultsSuites") 
      || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeSlc3");
        $(this).addClass("noresultsSlc3");
    } else {
        $(this).addClass("noresultsSlc3");
        $(this).removeClass("resultsSlc3");
        $(".testeDivImov").removeClass("testeSlc3"); }
    }
  });
});

//QUARTOS
$(".quartosNum").on("keyup", function() { 
classTest(); 
  var qpreNum = $(this).val();
  if (qpreNum == 1) { 
    var qName = " quarto";}
  else {
    var qName = " quartos";}
  var qNum = qpreNum.toString() + qName;
  $(".imovitem").each(function() {
    if (qNum == qName){
      $(this).removeClass("noresultsQuartos");
      $(this).removeClass("resultsQuartos");
      $(".testeDivImov").removeClass("testeQ");}
    if (qNum != qName && $(this).text().search(new RegExp(qNum, 'gi')) != -1) {
      
        // \/ \/ \/ \/ \/ \/ \/ \/ \/ 
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsSlc") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsSlc2") 
      || $(this).hasClass("noresultsSlc3") 
      || $(this).hasClass("noresultsSuites") 
      || $(this).hasClass("noresultsVagas") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\

        $(this).addClass("resultsQuartos");
        $(this).removeClass("noresultsQuartos");
        $(".testeDivImov").addClass("testeQ");}
  } else if (qNum != qName && $(this).text().search(qNum) != 1) {

        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc") 
      || $(this).hasClass("resultsSlc2") 
      || $(this).hasClass("resultsSlc3") 
      || $(this).hasClass("resultsSuites") 
      || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\

        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSldr")
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeQ");
        $(this).addClass("noresultsQuartos");
    } else {
        $(this).addClass("noresultsQuartos");
        $(this).removeClass("resultsQuartos");
        $(".testeDivImov").removeClass("testeQ"); }
    }
  });
});

//SUÍTES
$(".suitesNum").on("keyup", function() { 
classTest(); 
  var spreNum = $(this).val();
  if (spreNum == 1) { 
    var sName = " suíte";}
  else {
    var sName = " suítes";}
  var sNum = spreNum.toString() + sName;
  $(".imovitem").each(function() {
    if (sNum == sName){
      $(this).removeClass("noresultsSuites");
      $(this).removeClass("resultsSuites");
      $(".testeDivImov").removeClass("testeS");}
    if (sNum != sName && $(this).text().search(new RegExp(sNum, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsSlc") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsSlc2") 
      || $(this).hasClass("noresultsSlc3") 
      || $(this).hasClass("noresultsQuartos") 
      || $(this).hasClass("noresultsVagas") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSuites");
        $(this).removeClass("noresultsSuites");
        $(".testeDivImov").addClass("testeS");}
  } else if (sNum != sName && $(this).text().search(sNum) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc") 
      || $(this).hasClass("resultsSlc2") 
      || $(this).hasClass("resultsSlc3") 
      || $(this).hasClass("resultsQuartos") 
      || $(this).hasClass("resultsVagas") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeS");
        $(this).addClass("noresultsSuites");
    } else {
        $(this).addClass("noresultsSuites");
        $(this).removeClass("resultsSuites"); 
        $(".testeDivImov").removeClass("testeS");}
    }
  });
});

// VAGAS
$(".vagasNum").on("keyup", function() {
  classTest();
  var vpreNum = $(this).val();
  if (vpreNum == 1) { 
    var vName = " vaga";}
  else {
    var vName = " vagas";}
  var vNum = vpreNum.toString() + vName;
  $(".imovitem").each(function() {
    if (vNum == vName){
      $(this).removeClass("noresultsVagas");
      $(this).removeClass("resultsVagas");
      $(".testeDivImov").removeClass("testeV");}
    if (vNum != vName && $(this).text().search(new RegExp(vNum, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsSlc")
      || $(this).hasClass("noresultsSldr") 
      || $(this).hasClass("noresultsSlc2") 
      || $(this).hasClass("noresultsSlc3") 
      || $(this).hasClass("noresultsQuartos") 
      || $(this).hasClass("noresultsSuites") ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsVagas");
        $(this).removeClass("noresultsVagas");
        $(".testeDivImov").addClass("testeV");}
  } else if (vNum != vName && $(this).text().search(vNum) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsSlc") 
      || $(this).hasClass("resultsSlc2") 
      || $(this).hasClass("resultsSlc3") 
      || $(this).hasClass("resultsQuartos") 
      || $(this).hasClass("resultsSuites") ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsSlc");
        $(this).removeClass("resultsSlc2");
        $(this).removeClass("resultsSlc3");
        $(this).removeClass("resultsQuartos");
        $(this).removeClass("resultsSuites");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeV");
        $(this).addClass("noresultsVagas");
    } else {
        $(this).addClass("noresultsVagas");
        $(this).removeClass("resultsVagas");
        $(".testeDivImov").removeClass("testeV"); }
    }
  });
});

// RANGE SLIDER
$(".slider").on("change", function() {
  classTest();
  var minValue = Number($("#minRange").val());
  var maxValue = Number($("#maxRange").val());
  document.getElementById("maxvalueShow").innerHTML = maxValue;
  document.getElementById("minvalueShow").innerHTML = minValue;
  var numMin = Number($("#minvalueShow").text()); 
  var minprice = Intl.NumberFormat(`pt-BR`, {
                                  style : 'currency',
                                  currency: 'BRL',
                                  currencyDisplay: `symbol`,
                                  minimumFractionDigits: 2 });     
  $("#minvalueShow").text(minprice.format(numMin));
  
  var numMax = Number($("#maxvalueShow").text()); 
  var maxprice = Intl.NumberFormat(`pt-BR`, {
                                  style : 'currency',
                                  currency: 'BRL',
                                  currencyDisplay: `symbol`,
                                  minimumFractionDigits: 2 });     
  $("#maxvalueShow").text(maxprice.format(numMax));

  console.log(minValue + " | " + maxValue);
  $(".divpriceH").each(function() {
    var priceImov = Number($(this).text());
    if (priceImov >= minValue && priceImov <= maxValue) {

        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ( $(this).parent().parent().parent().parent().parent().hasClass("noresultsSrch") 
        || $(this).parent().parent().parent().parent().parent().hasClass("noresultsSlc") 
        || $(this).parent().parent().parent().parent().parent().hasClass("noresultsSlc2") 
        || $(this).parent().parent().parent().parent().parent().hasClass("noresultsSlc3") 
        || $(this).parent().parent().parent().parent().parent().hasClass("noresultsVagas")
        || $(this).parent().parent().parent().parent().parent().hasClass("noresultsSuites")
        || $(this).parent().parent().parent().parent().parent().hasClass("noresultsQuartos") ) {

      } else { 
        // /\ /\ /\ /\ /\ /\ /\ /\ /\ 

        $(this).parent().parent().parent().parent().parent().addClass("resultsSldr");
        $(this).parent().parent().parent().parent().parent().removeClass("noresultsSldr");
        $(".testeDivImov").addClass("testeSldr");}
  } else if (priceImov < minValue || priceImov > maxValue) {

            // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).parent().parent().parent().parent().parent().hasClass("resultsSrch") 
        || $(this).parent().parent().parent().parent().parent().hasClass("resultsSlc") 
        || $(this).parent().parent().parent().parent().parent().hasClass("resultsSlc2") 
        || $(this).parent().parent().parent().parent().parent().hasClass("resultsSlc3")
        || $(this).parent().parent().parent().parent().parent().hasClass("resultsVagas")
        || $(this).parent().parent().parent().parent().parent().hasClass("resultsSuites")
        || $(this).parent().parent().parent().parent().parent().hasClass("resultsQuartos") ) {
            // /\ /\ /\ /\ /\ /\ /\ /\ /\

        $(this).parent().parent().parent().parent().parent().removeClass("resultsSrch");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSlc");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSlc2");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSlc3");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSldr");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsQuartos");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsVagas");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSuites");
        $(".testeDivImov").removeClass("testeSldr");
        $(this).parent().parent().parent().parent().parent().addClass("noresultsSldr");
    } else {
        $(this).parent().parent().parent().parent().parent().addClass("noresultsSldr");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSldr");
        $(".testeDivImov").removeClass("testeSldr"); }
    }
  });
});
/////////////////////////////////////////////


//CLEAR FILTER
$("#clearButton").on("click", function() {
  $(".imovitem").each(function() {
    classTest();
    $(this).removeClass("resultsSrch");
    $(this).removeClass("resultsSlc");
    $(this).removeClass("resultsSlc2");
    $(this).removeClass("resultsSlc3");
    $(this).removeClass("resultsQuartos");
    $(this).removeClass("resultsSuites");
    $(this).removeClass("resultsVagas");
    $(this).removeClass("resultsSldr");
    $(this).removeClass("noresultsSrch");
    $(this).removeClass("noresultsSlc");
    $(this).removeClass("noresultsSlc2");
    $(this).removeClass("noresultsSlc3");
    $(this).removeClass("noresultsQuartos");
    $(this).removeClass("noresultsSuites");
    $(this).removeClass("noresultsVagas");
    $(this).removeClass("noresultsSldr");
  });
  $(".page-search").val("")
  $("#statusSlc").val("")
  $("#negocioSlc").val("")
  $("#negocioSlc").val("")
  $(".quartosNum").val("")
  $(".suitesNum").val("")
  $(".vagasNum").val("")
  $("#minRange").val("0")
  $("#maxRange").val("10000000")
  document.getElementById("maxvalueShow").innerHTML = "10000000";
  document.getElementById("minvalueShow").innerHTML = "0";
});

//NADA ENCONTRADO
function classTest(){
  if ( $(".testeDivImov").hasClass("testeSrch") 
    || $(".testeDivImov").hasClass("testeSlc") 
    || $(".testeDivImov").hasClass("testeSlc2") 
    || $(".testeDivImov").hasClass("testeSlc3") 
    || $(".testeDivImov").hasClass("testeSldr") 
    || $(".testeDivImov").hasClass("testeQ") 
    || $(".testeDivImov").hasClass("testeV") 
    || $(".testeDivImov").hasClass("testeS")) {
    $(".errorText").css("display", "none");
  }
  else {
    $(".errorText").css("display", "block");
  }
}
while (1 > 0) {
  classTest();
  console.log("oooi");
}
/////////////////////////////////////////////
