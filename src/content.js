var element = document.getElementById('hdtbMenus');
element.setAttribute('class', 'hdtb-td-o');

var style = document.createElement('style');
style.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(style);
var stylesheet = document.styleSheets[0];

stylesheet.addRule('#hdtb_tls', 'display: none');
stylesheet.addRule('#hdtbMenus', 'position: static !important');
