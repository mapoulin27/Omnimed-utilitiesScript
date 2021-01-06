// ==UserScript==
// @name         Jenkins Integration Test List Pimper
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Jenkins Integration Test List Pimper
// @author       mcormier
// @match        https://jenkins.omnimed.com/*/job/*/job/*/*/
// @grant        none
// ==/UserScript==
function openAllFailedTest() {
    if (document.getElementById('showLink') != null){
    document.getElementById('showLink').click();
    }
}

function getElementByXpath(path) {
          return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


function parseAndCleanList(tableId){
    var list = getElementByXpath("/html/body[@id='jenkins']/div[@id='page-body']/div[@id='main-panel']/table/tbody/tr[" + tableId + "]/td[2]/ul")
    try {
        for (var i = 0; i < list.children.length; i++) {
        var currentChildNode = list.childNodes[i]
        var currentChildNodeText = currentChildNode.textContent
        if((currentChildNodeText.includes("Integration Test / healthrecord") & currentChildNodeText.includes("---")) || (currentChildNodeText.includes("Integration Test / frontend-healthrecord") & currentChildNodeText.includes("---"))) {
            deleteCukeFromList(currentChildNode)
        } else{
            buildNewElementList(currentChildNode);
            reduceSizeOfElement(currentChildNode);
               }
        }
    } catch (error) {
    }
}

function deleteCukeFromList(element) {
    element.innerHTML = '';
    }

function buildNewElementList(element) {
    element.innerHTML = '- ' + element.innerHTML.replace(element.textContent, element.textContent.match("[^\/]*$"));
}

function reduceSizeOfElement(element) {
    element.style.fontSize = "normal";
}

openAllFailedTest();
parseAndCleanList(0);
parseAndCleanList(1);
parseAndCleanList(2);
parseAndCleanList(3);
parseAndCleanList(4);
parseAndCleanList(5);
