var style = document.createElement('style');
style.setAttribute('type', 'text/css');
document.documentElement.appendChild(style);
var stylesheet = document.styleSheets[0];

stylesheet.addRule('#hdtb_tls', 'display: none');
stylesheet.addRule('#hdtbMenus', 'position: static !important');
stylesheet.addRule('#hdtbMenus', 'display: block !important');
stylesheet.addRule('#resultStats', 'opacity: 1 !important');
stylesheet.addRule('#resultStats', 'top: 0 !important');

