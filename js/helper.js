var HTMLarticleBase = '<div id="article%num%" class="news-article" style="position: relative"></div>';
var HTMLlistButton = '<a href="#" class="list-button" style="background-color: %color%"><p class="list-button-text": >My List</p></a>';
var HTMLlistHeader = '<div id="list-header%id%" class="col-md-12"><span id="list-header-text%textid%" class="list-header fromLeft">%name%</span></div>';
var HTMLlistItem = '<span id="list-item%num%" class="list-header list-item fromLeft col-md-12">%text%</span>';
var kToF = function(kelvin) {
  fahrenheit = (kelvin * (9/5)) - 459.67;
  return fahrenheit;
};
