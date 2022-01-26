import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import "antd/dist/antd.css";
import { ButtonTracker } from "./pageNav";

//Variable Declarations and Initializations
var userInput = null,
  listLength = 5,
  storeNames = [],
  selectedRows = [];
var rowArray = [];

ReactDOM.render(
  <div id="parentContainer">
    <h1 className="title">Top Shopify Stores</h1>
    <input type="search" id="searchField" />
    <button id="searchButton">Search</button>
    <div id="sideMenu">
      <Menu className="beamInfo" mode="inline" theme="dark">
        <MenuItem key="firstItem">
          <a href="https://apps.shopify.com/partners/aftersell">Our Products</a>
        </MenuItem>
        <MenuItem key="secondItem">
          <a href="https://aftersell.com/about">About Us</a>
        </MenuItem>
        <MenuItem key="thirdItem">
          <a href="https://aftersell.com/demo_page">Contact Us</a>
        </MenuItem>
      </Menu>
    </div>
    <div id="tableContainer">
      <ButtonTracker />
    </div>
  </div>,
  document.getElementById("root")
);

for (var i = 0; i < listLength; i++) {
  storeNames.push(document.getElementsByClassName("Store")[i].innerText);
  rowArray.push(document.getElementsByClassName("dataRow")[i]);
}
//Button Activations
document
  .getElementById("searchButton")
  .addEventListener("click", buttonClicked);

//Button response method
function buttonClicked() {
  userInput = document.getElementById("searchField").value;
  for (var i = 0; i < listLength; i++) {
    if (contains(userInput, storeNames[i]) === true) {
      selectedRows.push(i);
    }
  }

  document.getElementById("shopifyData").setInnerHTML =
    rowArray[selectedRows[0]];
}

function contains(s1, s2) {
  var contains = false;
  for (var i = 0; i < s2.length - 1; i++) {
    for (var j = i + 1; j < s2.length; j++) {
      if (s1 === s2.slice(i, j)) {
        contains = true;
      }
    }
  }
  return contains;
}
