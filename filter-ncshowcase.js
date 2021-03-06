//SEARCH
$(".page-search").on("keyup", function() {
  var v = $(this).val();                     // Nome dado ao valor desse filtro
  $(".filter-item").each(function() {
    if (v == ""){                            // 'Se' o valor for nulo removerá suas classes
      $(this).removeClass("noresultsSrch");
      $(this).removeClass("resultsSrch");}
    if (v != "" && $(this).text().search(new RegExp(v, 'gi')) != -1) {  // 'Se'o valor der "match"
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
       if ($(this).hasClass("noresultsLetter")
       || $(this).hasClass("noresultsSymbol")
       || $(this).hasClass("noresultsSldr")
       || $(this).hasClass("noresultsNumber") ) {} else { // E 'se' não houver outra classe atribuída
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
          $(this).addClass("resultsSrch"); // Então adicionará sua classe, permitindo a visibilidade
          $(this).removeClass("noresultsSrch");    // E removerá sua classe de invisibilidade
}
  } else if (v != "" && $(this).text().search(v) != 1) {  //Caso o valor não dê "match"
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsLetter") 
      || $(this).hasClass("resultsSymbol")
      || $(this).hasClass("resultsSldr")  
      || $(this).hasClass("resultsNumber")  ) {  // E se houverem outras classes atribuídas
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsLetter");
        $(this).removeClass("resultsSymbol");
        $(this).removeClass("resultsNumber");
        $(this).addClass("noresultsSrch");    // E adicionará sua própria classe de invisibilidade
    } else {
        $(this).addClass("noresultsSrch");    // Caso contrário apenas adicionará sua classe de invisbilidade
        $(this).removeClass("resultsSrch");  // E apagará sua classe de visibilidade
     }
    }
  });
  
});

//Letras (SLC1)
 $("#letraSlc").on("change", function() {
  
  var slc1 = $(this).val();
  $(".item-letter").each(function() {
    if (slc1 == ""){
      $(this).parent().removeClass("noresultsLetter");
      $(this).parent().removeClass("resultsLetter");}
    if (slc1 != "" && $(this).text().search(new RegExp(slc1, 'gi')) != -1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).parent().hasClass("noresultsSrch") 
      || $(this).parent().hasClass("noresultsSymbol") 
      || $(this).parent().hasClass("noresultsSldr")
      || $(this).parent().hasClass("noresultsNumber") ) {} else {   
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).parent().addClass("resultsLetter");
        $(this).parent().removeClass("noresultsLetter");}
  } else if (slc1 != "" && $(this).text().search(slc1) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).parent().hasClass("resultsSrch") 
      || $(this).parent().hasClass("resultsSymbol")
      || $(this).parent().hasClass("resultsSldr") 
      || $(this).parent().hasClass("resultsNumber")  ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).parent().removeClass("resultsSrch");
        $(this).parent().removeClass("resultsSldr");
        $(this).parent().removeClass("resultsLetter");
        $(this).parent().removeClass("resultsSymbol");
        $(this).parent().removeClass("resultsNumber");
        $(this).parent().addClass("noresultsLetter");
    } else {
        $(this).parent().addClass("noresultsLetter");
        $(this).parent().removeClass("resultsLetter"); }
    } 
  });
  
});

//Símbolo (SLC2)
$("#symbolSlc").on("change", function() {
  
  var slc2 = $(this).val();
  $(".filter-item").each(function() {
    if (slc2 == ""){
      $(this).removeClass("noresultsSymbol");
      $(this).removeClass("resultsSymbol");}
    if (slc2 != "" && $(this).text().search(new RegExp(slc2, 'gi')) != -1) {
      // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsLetter") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsNumber")  ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).addClass("resultsSymbol");
        $(this).removeClass("noresultsSymbol");}
  } else if (slc2 != "" && $(this).text().search(slc2) != 1) {
        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch") 
      || $(this).hasClass("resultsLetter")
      || $(this).hasClass("resultsSldr") 
      
      || $(this).hasClass("resultsNumber") 
       
       ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\
        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsLetter");
        $(this).removeClass("resultsSymbol");
        
        $(this).removeClass("resultsNumber");
        
        
        $(this).addClass("noresultsSymbol");
    } else {
        $(this).addClass("noresultsSymbol");
        $(this).removeClass("resultsSymbol"); }
    }
  });
  
});

//Números
$(".num").on("keyup", function() { 
   
  var qpreNum = $(this).val();
  if (qpreNum == 1) { 
    var qName = "";}
  else {
    var qName = "";}
  var qNum = qpreNum.toString() + qName;
  $(".filter-item").each(function() {
    if (qNum == qName){
      $(this).removeClass("noresultsNumber");
      $(this).removeClass("resultsNumber");}
    if (qNum != qName && $(this).text().search(new RegExp(qNum, 'gi')) != -1) {
      
        // \/ \/ \/ \/ \/ \/ \/ \/ \/ 
      if ($(this).hasClass("noresultsSrch") 
      || $(this).hasClass("noresultsLetter") 
      || $(this).hasClass("noresultsSldr")
      || $(this).hasClass("noresultsSymbol")  ) {} else {  
        // /\ /\ /\ /\ /\ /\ /\ /\ /\

        $(this).addClass("resultsNumber");
        $(this).removeClass("noresultsNumber");}
  } else if (qNum != qName && $(this).text().search(qNum) != 1) {

        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).hasClass("resultsSrch")
      || $(this).hasClass("resultsSldr") 
      || $(this).hasClass("resultsLetter") 
      || $(this).hasClass("resultsSymbol") 
      
       
       ) {
        // /\ /\ /\ /\ /\ /\ /\ /\ /\

        $(this).removeClass("resultsSrch");
        $(this).removeClass("resultsSldr");
        $(this).removeClass("resultsLetter");
        $(this).removeClass("resultsSldr")
        $(this).removeClass("resultsSymbol");
        
        $(this).removeClass("resultsNumber");
        
        
        $(this).addClass("noresultsNumber");
    } else {
        $(this).addClass("noresultsNumber");
        $(this).removeClass("resultsNumber"); }
    }
  });
  
});

// RANGE SLIDER
$(".slider").on("change", function() {
  
  var minValue = Number($("#minRange").val());
  var maxValue = Number($("#maxRange").val());
  document.getElementById("maxvalueshow").innerHTML = "Número Máximo: " + maxValue;
  document.getElementById("minvalueshow").innerHTML = "Número Mínimo: " + minValue;

  var numMin = Number($("#minvalueShow").text()); 
  var numMax = Number($("#maxvalueShow").text()); 
  console.log(minValue + " | " + maxValue);
  $(".item-number").each(function() {
    var priceImov = Number($(this).text());
    if (priceImov >= minValue && priceImov <= maxValue) {

        // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ( $(this).parent().hasClass("noresultsSrch") 
        || $(this).parent().hasClass("noresultsLetter") 
        || $(this).parent().hasClass("noresultsSymbol")
        || $(this).parent().hasClass("noresultsNumber") ) {

      } else { 
        // /\ /\ /\ /\ /\ /\ /\ /\ /\ 

        $(this).parent().addClass("resultsSldr");
        $(this).parent().removeClass("noresultsSldr");}
  } else if (priceImov < minValue || priceImov > maxValue) {

            // \/ \/ \/ \/ \/ \/ \/ \/ \/
      if ($(this).parent().hasClass("resultsSrch") 
        || $(this).parent().hasClass("resultsLetter") 
        || $(this).parent().hasClass("resultsSymbol") 
        || $(this).parent().hasClass("resultsNumber") ) {
            // /\ /\ /\ /\ /\ /\ /\ /\ /\

        $(this).parent().removeClass("resultsSrch");
        $(this).parent().removeClass("resultsLetter");
        $(this).parent().removeClass("resultsSymbol");
        $(this).parent().removeClass("resultsSldr");
        $(this).parent().removeClass("resultsNumber");
        $(this).parent().addClass("noresultsSldr");
    } else {
        $(this).parent().addClass("noresultsSldr");
        $(this).parent().removeClass("resultsSldr");
     }
    }
  });
  
});
/////////////////////////////////////////////


//CLEAR FILTER
$("#clearButton").on("click", function() {
  $(".filter-item").each(function() {
    $(this).removeClass("resultsSrch");
    $(this).removeClass("resultsLetter");
    $(this).removeClass("resultsSymbol");
    $(this).removeClass("resultsNumber");
    $(this).removeClass("resultsSldr");
    $(this).removeClass("noresultsSrch");
    $(this).removeClass("noresultsLetter");
    $(this).removeClass("noresultsSymbol");
    $(this).removeClass("noresultsNumber");
    $(this).removeClass("noresultsSldr");
  });
  $(".page-search").val("")
  $("#statusSlc").val("")
  $("#negocioSlc").val("")
  $("#tipoSlc").val("")
  $(".quartosNum").val("")
  $(".suitesNum").val("")
  $(".vagasNum").val("")
  $("#minRange").val("1")
  $("#maxRange").val("9")
  document.getElementById("maxvalueShow").innerHTML = "9";
  document.getElementById("minvalueShow").innerHTML = "1";
  
});


/////////////////////////////////////////////

$(document).ready( function() {
  
  $(".item-number").each( function() {
    var priceImovTxt = Number($(this).text());
    $(this).parent().parent().parent().parent().parent().attr("data-price", priceImovTxt);
  });
});

$("#descSort").on("click", function() { 
  $(this).addClass("active");
  $("#ascSort").removeClass("active");
  var imovs = $('.filter-item');
  imovs.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});
  $(".filter-container").html(imovs);
});

$("#ascSort").on("click", function() {
  $(this).addClass("active"); 
  $("#descSort").removeClass("active");
  var imovs = $('.filter-item');
  imovs.sort(function(a, b){ return $(a).data("price") - $(b).data("price")});
  $(".filter-container").html(imovs);
});
