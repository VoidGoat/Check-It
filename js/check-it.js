var lastBox;

var lists = {
  "lists" : [{
    "name": "My list",
    "children": [{
      "text":"feed",
      "completed": false
    }, {
      "text":"water plant",
      "completed": false
    }]
  }
],
  "display": function(){
    for (var listCounter = 0; listCounter < lists.lists.length; listCounter++) {
      var list = HTMLlistHeader.replace("%id%", listCounter).replace("%name%", lists.lists[listCounter].name).replace("%textid%", listCounter);
      $("#lists").append(list);
      for ( var itemCounter = 0; itemCounter < lists.lists[listCounter].children.length; itemCounter++ ) {
        var item = HTMLlistItem.replace("%num%", itemCounter).replace("%text%", lists.lists[listCounter].children[itemCounter].text);
        $("#list-header" + listCounter).append(item);
      }
      lastBox = HTMLlistItem.replace("%num%", itemCounter).replace("%text%", "");
      $("#list-header" + listCounter).append(lastBox);
      lastList = HTMLlistHeader.replace("%id%", listCounter).replace("%name%", "").replace("%textid%", listCounter);
      $("#lists").append(lastList);
    }
  }
};
lists.display();

$("body").on('keypress', 'span', function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      $(this).attr('contentEditable',false);
      if ($(this).html() === "") {
        $(this).remove();
      }
      $( this ).blur();
    }
});

$( "body" ).on('focusout', 'span', function() {
  $(this).attr('contentEditable',false);
  if ($(this).html() === "") {
    $(this).remove();
  }
});

$("body").on('click', '.list-item', function(){
  $(this).attr('contentEditable',true);
  document.getElementById(this.id).focus();
  console.log(lists.lists[0].children.length );
  if (this.id[this.id.length - 1] == lists.lists[0].children.length) {
    newItem = HTMLlistItem.replace("%num%", lists.lists[0].children.length + 1).replace("%text%", "");
    $("#list-header" + 0).append(newItem);
    lists.lists[0].children.push({"text":"","completed":false });
  }
});
$("body").on('click', '.list-header', function(){
  $(this).attr('contentEditable',true);
  console.log($(this).find('span').context);
  document.getElementById($(this).find('span').context.id).focus();
  if (this.id[this.id.length - 1] == lists.lists.length -1) {
    newList = HTMLlistHeader.replace("%id%", lists.lists.length).replace("%name%", "");
    $("#lists").append(newList);
    lists.lists.push({"name": ""});
  }
});
