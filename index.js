import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import "antd/dist/antd.css";
ReactDOM.render(
  <div id="parentContainer">
    <h1 className="title">Top 100 Shopify Stores</h1>
    <div id="sideMenu">
      <Menu className="beamInfo" mode="inline" theme="dark">
        <MenuItem key="firstItem">Our Products</MenuItem>
        <MenuItem key="secondItem">About Us</MenuItem>
        <MenuItem key="thirdItem">Contact Us</MenuItem>
      </Menu>
    </div>
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
        <tr height="31" role="button" title="Check the BBC Shop US store">
          <td>1</td>
          <td>BBC Shop US</td>
          <td>-</td>
          <td>United States</td>
          <td>416,700,000</td>
        </tr>
        <tr height="31" role="button" title="Check the Gymshark ROW store">
          <td>2</td>
          <td>Gymshark ROW</td>
          <td className="xl87" width="232">
            -
          </td>
          <td className="xl86" width="64">
            United Kingdom
          </td>
          <td className="xl88" width="64">
            22,800,000
          </td>
        </tr>
        <tr height="31" role="button" title="Check the Gymshark UK store">
          <td>3</td>
          <td>Gymshark UK</td>
          <td className="xl87" width="232">
            -
          </td>
          <td className="xl86" width="64">
            United Kingdom
          </td>
          <td className="xl88" width="64">
            22,800,000
          </td>
        </tr>
        <tr height="31" role="button" title="Check the Gymshark US store">
          <td>4</td>
          <td>Gymshark US</td>
          <td className="xl87" width="232">
            -
          </td>
          <td className="xl86" width="64">
            United States
          </td>
          <td className="xl88" width="64">
            22,800,000
          </td>
        </tr>
        <tr height="20" role="button" title="Check the JB Hi-Fi store">
          <td height="20" className="xl84" width="64">
            5
          </td>
          <td>JB Hi-Fi</td>
          <td className="xl87" width="232">
            -
          </td>
          <td className="xl86" width="64">
            Australia
          </td>
          <td className="xl88" width="64">
            13,500,000
          </td>
        </tr>
      </tbody>
    </table>
  </div>,
  document.getElementById("root")
);
