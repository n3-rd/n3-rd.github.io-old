﻿!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.nativeToast=e()}(this,function(){"use strict";var t=function(t){for(var e=arguments,o=1;o<arguments.length;o++)for(var i in arguments[o])t[i]=e[o][i];return t},e=null,o={warning:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg>',success:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',info:'<svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%"><path d="M16 14 L16 23 M16 8 L16 10" /><circle cx="16" cy="16" r="14" /></svg>',error:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line></svg>'},i=function(t){var i=this;void 0===t&&(t={});var s=t.message;void 0===s&&(s="");var n=t.position;void 0===n&&(n="south-east");var r=t.timeout;void 0===r&&(r=3e3);var a=t.el;void 0===a&&(a=document.body);var c=t.rounded;void 0===c&&(c=!1);var l=t.type;void 0===l&&(l="");var h=t.debug;void 0===h&&(h=!1);var d=t.edge;void 0===d&&(d=!1);var v=t.icon;void 0===v&&(v=!0);var u=t.closeOnClick;void 0===u&&(u=!1);var f=t.elements;void 0===f&&(f=[]),e&&e.destroy(),this.message=s,this.position=n,this.el=a,this.timeout=r,this.closeOnClick=u,this.toast=document.createElement("div"),this.toast.className="native-toast native-toast-"+this.position,l&&(this.toast.className+=" native-toast-"+l,v&&(this.message='<span class="native-toast-icon-'+l+'">'+(o[l]||"")+"</span>"+this.message));var p=document.createElement("div");p.className="native-toast-message",p.innerHTML=this.message,[p].concat(f).forEach(function(t){i.toast.appendChild(t)});var m=document.body.clientWidth<768;d||m?this.toast.className+=" native-toast-edge":c&&(this.toast.style.borderRadius="33px"),this.el.appendChild(this.toast),e=this,this.show(),!h&&r&&this.hide(),this.closeOnClick&&this.toast.addEventListener("click",function(){i.destroy()})};function s(t){return new i(t)}i.prototype.show=function(){var t=this;setTimeout(function(){t.toast.classList.add("native-toast-shown")},300)},i.prototype.hide=function(){var t=this;setTimeout(function(){t.destroy()},this.timeout)},i.prototype.destroy=function(){var t=this;this.toast&&(this.toast.classList.remove("native-toast-shown"),setTimeout(function(){t.toast&&(t.el.removeChild(t.toast),t.toast=null)},300))};for(var n of["success","info","warning","error"])s[n]=function(e){return s(t({type:n},e))};return s}); //# sourceMappingURL=native-toast.min.js.map