import React from "react";
import { searchButtonClicked, getDataBase, filter } from "./index";
import { Dropdown, Menu } from "antd";
import "antd/dist/antd.css";
import MenuItem from "antd/lib/menu/MenuItem";
var t = (
  <table cellPadding="30px" id="shopifyData">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Store</th>
        <th>Yearly Revenue</th>
        <th>Country/Region</th>
        <th>Monthly Traffic</th>
      </tr>
    </thead>
    <tbody>
      <tr
        className="dataRow"
        height="31"
        role="button"
        title="Check the BBC Shop US store"
      >
        <td>1</td>
        <td className="Store">
          <a href="https://shop.bbc.com/">BBC Shop US</a>
        </td>
        <td>-</td>
        <td className="location">United States</td>
        <td>416,700,000</td>
      </tr>
      <tr
        className="dataRow"
        height="31"
        role="button"
        title="Check the Gymshark ROW store"
      >
        <td>2</td>
        <td className="Store">
          <a href="https://row.gymshark.com/">Gymshark ROW</a>
        </td>
        <td className="xl87" width="232">
          -
        </td>
        <td className="location" width="64">
          United Kingdom
        </td>
        <td className="xl88" width="64">
          22,800,000
        </td>
      </tr>
      <tr
        className="dataRow"
        height="31"
        role="button"
        title="Check the Gymshark UK store"
      >
        <td>3</td>
        <td className="Store">
          <a href="https://uk.gymshark.com/">Gymshark UK</a>
        </td>
        <td className="xl87" width="232">
          -
        </td>
        <td className="location" width="64">
          United Kingdom
        </td>
        <td className="xl88" width="64">
          22,800,000
        </td>
      </tr>
      <tr
        className="dataRow"
        height="31"
        role="button"
        title="Check the Gymshark US store"
      >
        <td>4</td>
        <td className="Store">
          <a href="https://row.gymshark.com/">Gymshark US</a>
        </td>
        <td className="xl87" width="232">
          -
        </td>
        <td className="location" width="64">
          United States
        </td>
        <td className="xl88" width="64">
          22,800,000
        </td>
      </tr>
      <tr
        className="dataRow"
        height="20"
        role="button"
        title="Check the JB Hi-Fi store"
      >
        <td height="20" className="xl84" width="64">
          5
        </td>
        <td className="Store">
          <a href="https://www.jbhifi.com.au/">JB Hi-Fi</a>
        </td>
        <td className="xl87" width="232">
          -
        </td>
        <td className="location" width="64">
          Australia
        </td>
        <td className="xl88" width="64">
          13,500,000
        </td>
      </tr>
    </tbody>
  </table>
);
var rowsPerPage = 5;

class ButtonTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnNum: 1 };
  }
  one = () => {
    var a = getDataBase(),
      c = document.getElementById("shopifyData");
    var d = c.rows.length;
    //Clear Previous Rows
    for (var j = 0; j < d - 1; j++) {
      c.deleteRow(-1);
    }
    //Repopulate Table
    for (var k = 0; k < rowsPerPage; k++) {
      c.insertRow(k + 1).innerHTML = a[k].innerHTML;
    }
    this.setState({ btnNum: 1 });
  };
  two = () => {
    var a = getDataBase(),
      c = document.getElementById("shopifyData");
    var d = c.rows.length;
    //Clear Previous Rows
    for (var j = 0; j < d - 1; j++) {
      c.deleteRow(-1);
    }
    //Repopulate Table
    for (var k = 0; k < rowsPerPage; k++) {
      c.insertRow(k + 1).innerHTML = a[k + 5].innerHTML;
    }

    this.setState({ btnNum: 2 });
  };
  search = () => {
    var a = searchButtonClicked();
    var c = document.getElementById("shopifyData");
    var h = c.rows.length;
    //c.innerHTML = "";
    for (var d = 0; d < h - 1; d++) {
      c.deleteRow(-1);
    }
    for (var b = 0; b < a.length; b++) {
      c.insertRow(b + 1).innerHTML = a[b].innerHTML;
    }
    this.setState({ btnNum: 0 });
    console.log(a);
  };
  select = () => {
    var b = document.getElementById("applyFilters");
    b.style.visibility = "visible";
    console.log(document.getElementById("filterMenu").selectedKeys);
    this.setState({ btnNum: 3 });
  };
  applyFilters = () => {
    var a = filter(),
      c = document.getElementById("shopifyData");
    var d = c.rows.length;
    //Clear Previous Rows
    for (var j = 0; j < d - 1; j++) {
      c.deleteRow(-1);
    }
    //Repopulate Table
    for (var k = 0; k < a.length; k++) {
      c.insertRow(k + 1).innerHTML = a[k].innerHTML;
    }
    this.setState({ btnNum: 4 });
  };
  item1Chosen = () => {
    document.getElementById("filterMenu").selectedKeys = ["United States"];
  };
  item2Chosen = () => {
    document.getElementById("filterMenu").selectedKeys = ["United Kingdom"];
  };
  item3Chosen = () => {
    document.getElementById("filterMenu").selectedKeys = ["Canada"];
  };
  item4Chosen = () => {
    document.getElementById("filterMenu").selectedKeys = ["Australia"];
  };
  render() {
    return (
      <div>
        <button onClick={this.search} id="searchButton">
          Search
        </button>
        {t}
        <Dropdown
          overlay={
            <Menu onSelect={this.select} selectable id="filterMenu">
              <MenuItem
                onClick={this.item1Chosen}
                className="choice"
                key="United States"
              >
                United States
              </MenuItem>
              <MenuItem
                onClick={this.item2Chosen}
                className="choice"
                key="United Kingdom"
              >
                United Kingdom
              </MenuItem>
              <MenuItem
                onClick={this.item3Chosen}
                className="choice"
                key="Canada"
              >
                Canada
              </MenuItem>
              <MenuItem
                onClick={this.item4Chosen}
                className="choice"
                key="Australia"
              >
                Australia
              </MenuItem>
            </Menu>
          }
        >
          <button id="filter">Filter By Region</button>
        </Dropdown>
        <button
          onClick={this.applyFilters}
          className="applyFilters"
          id="applyFilters"
        >
          Apply Filter
        </button>
        <div id="pageNav">
          <button id="Button1" onClick={this.one}>
            1
          </button>
          <button id="Button2" onClick={this.two}>
            2
          </button>
        </div>
      </div>
    );
  }
}

export { ButtonTracker };
