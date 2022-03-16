// ==UserScript==
// @name         Cucumber pimper
// @namespace    http://tampermonkey.net/
// @version      6
// @description  Pimp cucumber reports
// @author       mquiron, mcormier, nguillet, shenault, marobert
// @match        https://jenkins.omnimed.com/*job/*/cucumber-html-reports/*overview-tags.html
// @grant        none
// ==/UserScript==
$(document).ready(function() {
	$("<style type='text/css'> .cukeGab { background-color: black !important; color: white !important; } </style>").appendTo("head");
	$("<style type='text/css'> .cukeValF { background-color: red !important; color: white !important; } </style>").appendTo("head");
	$("<style type='text/css'> .cukeVal { background-color: blue !important; color: white !important; } </style>").appendTo("head");
	$("<style type='text/css'> .cukeRob { background-color: green !important; color: white !important; } </style>").appendTo("head");
	$("<style type='text/css'> .cukeAll { background-color: grey !important; color: white !important; } </style>").appendTo("head");
});

function colorCucumberTagForQA(tag, qa) {
	if ($('.tagname > a:contains(' + tag + ')').length !== 0) {
		$('.tagname > a:contains(' + tag + ')').removeClass('cukeVal', 'cukeMad', 'cukeNic', 'cukeMoc');
		$('.tagname > a:contains(' + tag + ')').addClass('cuke' + qa);
	} else {
		console.warn('Cucumber tag ' + tag + ' does not exists');
	}
}

function colorCucumberTags() {
	var qa = '';

	//Val
	qa = 'Val';
	//----global---- //doit etre avant tous les tags specifiques des autres QA
	colorCucumberTagForQA('Dossier', qa);
	//----global---- //
    colorCucumberTagForQA('ActionLog', qa);
	colorCucumberTagForQA('Antecedent', qa);
	colorCucumberTagForQA('AviseurHpn', qa);
	colorCucumberTagForQA('Cnesst', qa);
	colorCucumberTagForQA('Contexte', qa);
	colorCucumberTagForQA('@DsqSh', qa);
	colorCucumberTagForQA('acturation', qa);
	colorCucumberTagForQA('MaladieChronique', qa);
	colorCucumberTagForQA('Note', qa);
	colorCucumberTagForQA('@Notification', qa);
	colorCucumberTagForQA('OCAngular', qa);
	colorCucumberTagForQA('Outil', qa);
	colorCucumberTagForQA('Probleme', qa);
	colorCucumberTagForQA('Dictionnaire', qa);
	colorCucumberTagForQA('Programme', qa);
	//----Securite----
	colorCucumberTagForQA('@Droit', qa);
	colorCucumberTagForQA('Consentement', qa);
	colorCucumberTagForQA('Mandat', qa);
	//----Securite----
	colorCucumberTagForQA('Vitaux', qa);

	//Nic
	qa = 'ValF';
	colorCucumberTagForQA('@Aide', qa);
	colorCucumberTagForQA('Contact', qa);
	colorCucumberTagForQA('Document', qa);
	colorCucumberTagForQA('@DsqAcces', qa);
	colorCucumberTagForQA('@DsqSqii', qa);
	colorCucumberTagForQA('@DsqSqil', qa);
	//----Introduction----
	colorCucumberTagForQA('@Nouvelle', qa);
	colorCucumberTagForQA('@MenuOmnimed', qa);
	colorCucumberTagForQA('Profil', qa);
	//----Introduction----
	colorCucumberTagForQA('Requete', qa);
	//----Resultat----
	colorCucumberTagForQA('@DossierResultat', qa);
	colorCucumberTagForQA('@DossierActionLogResultat', qa);
	colorCucumberTagForQA('@DroitResultat', qa);
	colorCucumberTagForQA('RevisionResultat', qa);
	//----Resultat----
	//----Tache----
	colorCucumberTagForQA('Tache', qa);
	colorCucumberTagForQA('Umf', qa);
	//----Tache----
	//----SessionOnimed----
	colorCucumberTagForQA('@Authentification', qa);
	colorCucumberTagForQA('@ExpirationSession', qa);
	//----SessionOnimed----

	//Louis
	qa = 'Gab';
	colorCucumberTagForQA('@DossierAllergie', qa);
	colorCucumberTagForQA('@DossierActionLogAllergie', qa);
	colorCucumberTagForQA('@DossierImmunisation', qa);
	colorCucumberTagForQA('@Immunisation', qa);
	colorCucumberTagForQA('@DsqSqim', qa);
	colorCucumberTagForQA('ActionLogImmunisation', qa);
	colorCucumberTagForQA('Medication', qa);
    colorCucumberTagForQA('Courriel', qa);

    //Rob
	qa = 'Rob';
    colorCucumberTagForQA('AdministrationActivite', qa);
	colorCucumberTagForQA('AdministrationStatut', qa);
	colorCucumberTagForQA('AdministrationVisio', qa);
	colorCucumberTagForQA('@CentreAdmin', qa);
    colorCucumberTagForQA('CentreTransmission', qa);
    colorCucumberTagForQA('CommunicationPatient', qa);
	colorCucumberTagForQA('@RecherchePatient', qa);
	colorCucumberTagForQA('RendezVous', qa);
	colorCucumberTagForQA('SalleAttente', qa);
    colorCucumberTagForQA('Omnidesk', qa);

	//All
	qa = 'All'
	colorCucumberTagForQA('@CreationDonnee', qa);
	colorCucumberTagForQA('@Exemple', qa);
}

colorCucumberTags();
