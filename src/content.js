var menus = document.getElementById('hdtbMenus');
menus.setAttribute('class', 'hdtb-td-o');

var style = document.createElement('style');
style.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(style);
var stylesheet = document.styleSheets[0];

stylesheet.addRule('#hdtb_tls', 'display: none');
stylesheet.addRule('#hdtbMenus', 'position: static !important');

Array.prototype.forEach.call(menus.querySelectorAll('.mn-hd-txt, .mn-dwn-arw'), function(t) { 
  t.addEventListener('mouseover', function(e) {
    var target = t.parentNode;
    var element;
    for (element = e.target; element; element = element.parentNode) {
      if (element == menus) {
        if (/hdtb-mn-c/.test(target.nextSibling.className)) {
          t.click();
        }
        return;
      }
    }
  }, false);

  t.addEventListener('mouseout', function(e) {
    var target = t.parentNode.nextSibling;
    var element;
    for (element = e.relatedTarget; element; element = element.parentNode) {
      if (element == target) {
        return;
      }
    }
    t.click();
  });
});

Array.prototype.forEach.call(document.querySelectorAll('.hdtbU'), function(t) {
  t.addEventListener('mouseout', function(e) {
    var element;
    for (element = e.relatedTarget; element; element = element.parentNode) {
      if (element == t) {
        return;
      }
    }
    t.previousSibling.firstChild.click();
  }, false);
});
