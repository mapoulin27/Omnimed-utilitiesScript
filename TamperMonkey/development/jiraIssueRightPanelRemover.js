// ==UserScript==
// @name         JIRA Right Panel Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide the right panel when viewing an issue in JIRA.
// @author       acloutier
// @match        https://omnimedjira.atlassian.net/browse/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $(function() {
        $("[data-test-id='issue.views.issue-details.issue-layout.right-most-column']").parent().remove();
    });
})();
