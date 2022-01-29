import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import "antd/dist/antd.css";
import { ButtonTracker } from "./pageNav";
import { Table1 } from "./Table";

//Variable Declarations and Initializations
var userInput = null,
  listLength = 10,
  storeNames = [],
  selectedRows = [],
  rowArray = [],
  locationData = [];

ReactDOM.render(
  <div id="parentContainer">
    <h1 className="title">Top Shopify Stores</h1>
    <input type="search" id="searchField" />

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
    <Table1 />

    <div id="tableContainer">
      <ButtonTracker />
    </div>
  </div>,
  document.getElementById("root")
);

for (var i = 0; i < listLength; i++) {
  storeNames.push(document.getElementsByClassName("Store")[i].innerText);
  rowArray.push(document.getElementsByClassName("dataRow")[i]);
  locationData.push(document.getElementsByClassName("location")[i].innerText);
}

//Button response methods
function searchButtonClicked() {
  selectedRows = [];
  userInput = document.getElementById("searchField").value;
  for (var i = 0; i < listLength; i++) {
    if (contains(userInput, storeNames[i]) === true) {
      selectedRows.push(i);
    }
  }

  var searchResults = [];
  for (var k = 0; k < selectedRows.length; k++) {
    searchResults.push(rowArray[selectedRows[k]]);
  }
  return searchResults;
}

function contains(s1, s2) {
  var contains = false;
  for (var i = 0; i < s2.length; i++) {
    for (var j = i + 1; j < s2.length + 1; j++) {
      if (s1.toLowerCase() === s2.slice(i, j).toLowerCase()) {
        contains = true;
      }
    }
  }
  return contains;
}
function filter() {
  selectedRows = [];
  var m = document.getElementById("filterMenu").selectedKeys;
  var l = m.length;
  for (var i = 0; i < l; i++) {
    for (var j = 0; j < listLength; j++) {
      if (m[i] === locationData[j]) {
        selectedRows.push(j);
      }
    }
  }
  var filterResults = [];
  for (var k = 0; k < selectedRows.length; k++) {
    filterResults.push(rowArray[selectedRows[k]]);
  }
  return filterResults;
}
function getDataBase() {
  return rowArray;
}
export { searchButtonClicked, getDataBase, filter };
