//
var containerH = $(".imov-list").height();
var divH = $("#ImovDiv").height();
var div = document.getElementById("ImovDiv");
console.log(containerH);
console.log(divH);
var i = 1;
function resetPag(){	
}
function testSize() {
  var divH = $("#ImovDiv").height();
  console.log("divH: " + divH);
  var x = Math.ceil(divH / containerH);
  console.log(x);
  $(".divpagnumber").remove();
  div.style.top = 0;
  while(i <= x){
  	var btn = document.createElement("div");
    btn.innerHTML = i;
    btn.className = "divpagnumber";
    document.getElementById("DivPagControl").appendChild(btn);
  	i++;
  }
  i = 1;
	$(".divpagnumber").each(function() {
		var indice = $(this).text();
		$(this).on("click", function(){
			var size = (indice - 1) * (0 - containerH) + "px";
			div.style.top = size;
			$(this).addClass("active");
			$(this).siblings(".divpagnumber").removeClass("active");
  		console.log("size:" + size);
		});
	});
}

//
function errorText() {
  if (!$(".imovitem").hasClass("resultsSrch")  ||
    !$(".imovitem").hasClass("resultsSldr")    ||
    !$(".imovitem").hasClass("resultsSlc")     ||
    !$(".imovitem").hasClass("resultsSlc2")    ||
    !$(".imovitem").hasClass("resultsSlc3")    ||
    !$(".imovitem").hasClass("resultsQuartos") ||
    !$(".imovitem").hasClass("resultsVagas")   ||
    !$(".imovitem").hasClass("resultsSuites")) 
  {
    document.getElementById("errorText").style.display = "none";
  }
  else {
    document.getElementById("errorText").style.display = "block"; }
  }

//SEARCH
$(".page-search").on("keyup", function() {
  errorText();
  var v = $(this).val();                     // Nome dado ao valor desse filtro
  $(".imovitem").each(function() {
    if (v == ""){                            // 'Se' o valor for nulo removerá suas classes
      $(this).removeClass("noresultsSrch");  
      $(this).removeClass("resultsSrch");}
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
}
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
        $(this).addClass("noresultsSrch");    // E adicionará sua própria classe de invisibilidade
    } else {
        $(this).addClass("noresultsSrch");    // Caso contrário apenas adicionará sua classe de invisbilidade
        $(this).removeClass("resultsSrch");  // E apagará sua classe de visibilidade
     }
    }
  });
  testSize();
});

//STATUS (SLC1)
 $("#statusSlc").on("change", function() {
  errorText();
  var slc1 = $(this).val();
  $(".imovitem").each(function() {
    if (slc1 == ""){
      $(this).removeClass("noresultsSlc");
      $(this).removeClass("resultsSlc");}
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
        $(this).removeClass("noresultsSlc");}
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
        $(this).addClass("noresultsSlc");
    } else {
        $(this).addClass("noresultsSlc");
        $(this).removeClass("resultsSlc"); }
    } 
  });
  testSize();
});

//NEGÓCIO (SLC2)
$("#negocioSlc").on("change", function() {
  errorText();
  var slc2 = $(this).val();
  $(".imovitem").each(function() {
    if (slc2 == ""){
      $(this).removeClass("noresultsSlc2");
      $(this).removeClass("resultsSlc2");}
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
        $(this).removeClass("noresultsSlc2");}
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
        $(this).addClass("noresultsSlc2");
    } else {
        $(this).addClass("noresultsSlc2");
        $(this).removeClass("resultsSlc2"); }
    }
  });
  testSize();
});

//TIPO (SLC3)
$("#tipoSlc").on("change", function() {
  errorText();
  var slc3 = $(this).val();
  $(".imovitem").each(function() {
    if (slc3 == ""){
      $(this).removeClass("noresultsSlc3");
      $(this).removeClass("resultsSlc3");}
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
        $(this).removeClass("noresultsSlc3");}
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
        $(this).addClass("noresultsSlc3");
    } else {
        $(this).addClass("noresultsSlc3");
        $(this).removeClass("resultsSlc3"); }
    }
  });
  testSize();
});

//QUARTOS
$(".quartosNum").on("keyup", function() { 
  errorText(); 
  var qpreNum = $(this).val();
  if (qpreNum == 1) { 
    var qName = " quarto";}
  else {
    var qName = " quartos";}
  var qNum = qpreNum.toString() + qName;
  $(".imovitem").each(function() {
    if (qNum == qName){
      $(this).removeClass("noresultsQuartos");
      $(this).removeClass("resultsQuartos");}
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
        $(this).removeClass("noresultsQuartos");}
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
        $(this).addClass("noresultsQuartos");
    } else {
        $(this).addClass("noresultsQuartos");
        $(this).removeClass("resultsQuartos"); }
    }
  });
  testSize();
});

//SUÍTES
$(".suitesNum").on("keyup", function() { 
  errorText(); 
  var spreNum = $(this).val();
  if (spreNum == 1) { 
    var sName = " suíte";}
  else {
    var sName = " suítes";}
  var sNum = spreNum.toString() + sName;
  $(".imovitem").each(function() {
    if (sNum == sName){
      $(this).removeClass("noresultsSuites");
      $(this).removeClass("resultsSuites");}
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
        $(this).removeClass("noresultsSuites");}
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
        $(this).addClass("noresultsSuites");
    } else {
        $(this).addClass("noresultsSuites");
        $(this).removeClass("resultsSuites"); }
    }
  });
  testSize();
});

// VAGAS
$(".vagasNum").on("keyup", function() {
  errorText();
  var vpreNum = $(this).val();
  if (vpreNum == 1) { 
    var vName = " vaga";}
  else {
    var vName = " vagas";}
  var vNum = vpreNum.toString() + vName;
  $(".imovitem").each(function() {
    if (vNum == vName){
      $(this).removeClass("noresultsVagas");
      $(this).removeClass("resultsVagas");}
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
        $(this).removeClass("noresultsVagas");}
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
        $(this).removeClass("resultsVagas");;
        $(this).addClass("noresultsVagas");
    } else {
        $(this).addClass("noresultsVagas");
        $(this).removeClass("resultsVagas"); }
    }
  });
  testSize();
});

// RANGE SLIDER
$(".slider").on("change", function() {
  errorText();
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
        $(this).parent().parent().parent().parent().parent().removeClass("noresultsSldr");}
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
        $(this).parent().parent().parent().parent().parent().addClass("noresultsSldr");
    } else {
        $(this).parent().parent().parent().parent().parent().addClass("noresultsSldr");
        $(this).parent().parent().parent().parent().parent().removeClass("resultsSldr");
     }
    }
  });
  testSize();
});
/////////////////////////////////////////////


//CLEAR FILTER
$("#clearButton").on("click", function() {
  $(".imovitem").each(function() {
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
  $("#tipoSlc").val("")
  $(".quartosNum").val("")
  $(".suitesNum").val("")
  $(".vagasNum").val("")
  $("#minRange").val("0")
  $("#maxRange").val("50000000")
  document.getElementById("maxvalueShow").innerHTML = "R$ 5.000.000,00";
  document.getElementById("minvalueShow").innerHTML = "R$ 0,00";
  testSize();
});


/////////////////////////////////////////////

$(document).ready( function() {
  testSize();
  $(".divpriceH").each( function() {
    var priceImovTxt = Number($(this).text());
    $(this).parent().parent().parent().parent().parent().attr("data-price", priceImovTxt);
  });
});

$("#descSort").on("click", function() { 
  $(this).addClass("active");
  $("#ascSort").removeClass("active");
  var imovs = $('.imovitem');
  imovs.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});
  $(".imovcontainer").html(imovs);
});

$("#ascSort").on("click", function() {
  $(this).addClass("active"); 
  $("#descSort").removeClass("active");
  var imovs = $('.imovitem');
  imovs.sort(function(a, b){ return $(a).data("price") - $(b).data("price")});
  $(".imovcontainer").html(imovs);
});
