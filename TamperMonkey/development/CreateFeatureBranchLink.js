// ==UserScript==
// @name         CreateFeatureBranch Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes your life easier, one wumpa fruit at a time!
// @author       You
// @match        https://jenkins.omnimed.com/job/CreateFeatureBranch/
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

(function() {
    var checkStageViewAppearing = setInterval(function() {
        if ($("#main-panel") !== null) {
            clearInterval(checkStageViewAppearing);
            modifyTab();
        }
    }, 1000);
})();

function modifyTab() {
    $("tr.header").ready(function(){
        var newTitle = document.createElement('th');
        newTitle.classList.add("stage-header-name-1");
        newTitle.innerText = 'Branch URL';
        $("tr.header").append(newTitle);

        $("tr.job").each(function() {
            var link = "https://github.com/Omnimed/Omnimed-solutions/tree/";
            var branchName = $(this).find("span.badge").text().split(" #");

            var newCell = document.createElement('td');
            newCell.classList.add("stage-cell");
            newCell.classList.add("stage-cell-1");
            newCell.classList.add("SUCCESS");

            var newDiv = document.createElement('div');
            newDiv.style.textAlign = "center";
            newDiv.style.width = "100%";

            var newLink = document.createElement('a');
            newLink.innerText = "Link";
            newLink.href = link + branchName[0];
            newLink.target = "_blank";
            newLink.classList.add("permalink-link");
            newLink.classList.add("model-link");
            newLink.style.fontWeight = "normal";

            if (!this.classList.contains("SUCCESS")) {
                newLink.style.color = "red";
                newLink.disabled = true;
            }

            newDiv.appendChild(newLink);
            newCell.appendChild(newDiv);

            $(this).append(newCell);
        });
    });
};
