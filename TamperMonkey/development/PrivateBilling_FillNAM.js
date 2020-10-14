// ==UserScript==
// @name         Private Billing: Fill NAM
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://cloud.dev.omnimed.com/frontend-private-billing/privee
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

var nams = ['SOLA37572014', 'CHUW87102403'];

for(var i = 0; i < nams.length; i++) {
    var navbarRefEl = document.getElementsByClassName('nav-item-right')[0];
    var navbar = navbarRefEl.parentElement;

    var newEl = document.createElement('a');
    newEl.className = 'nav-item';
    newEl.setAttribute('id', nams[i]);
    newEl.append(nams[i]);
    navbar.insertBefore(newEl, navbarRefEl);

    $('#' + nams[i]).click(function(){
        var nam = this.id;
        $('#form_nam').val(nam);
        $('#form_nam').focus();
    });
}