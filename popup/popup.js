var Page = function(){
};

Page.prototype.load = function(){
  var context = this;
  var tabId   = 0;
  chrome.tabs.query({"active": true}, function(tab){
    tabId = tab[0].id;
  });
  
  var image = $(".image");
  var loading = $(".loading");
  var earl_med_img = "../images/earl_medium.jpg"
  var earl_big_img = "http://i.imgur.com/s1IsA0g.jpg"
  
  loading.show();
  setTimeout(function(){
    image.attr("src", earl_med_img);
    image.show()
    loading.hide()
  }, 500);
  image.unbind().click(function(){
    chrome.tabs.sendMessage(tabId, {image: "![Earl's LGTM](" + earl_big_img + ")"}, function(response){});
    $(".message").show(500);
    setTimeout(function() { $(".message").hide(500) }, 1000);
  });
};

$(document).ready(function(){
  var page = new Page();
  $("#reload").click(function(){
    page.load();
  });
  page.load();
});
