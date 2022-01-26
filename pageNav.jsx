import React from "react";
var s = { btnNum: 2 },
  t = (
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
          <td>United States</td>
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
          <td className="xl86" width="64">
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
          <td className="xl86" width="64">
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
          <td className="xl86" width="64">
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
          <td className="xl86" width="64">
            Australia
          </td>
          <td className="xl88" width="64">
            13,500,000
          </td>
        </tr>
      </tbody>
    </table>
  );

class ButtonTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnNum: 2 };
  }
  one = () => {
    this.setState({ btnNum: 1 });
    s = this.state;
    t = (
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
            <td>United States</td>
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
            <td className="xl86" width="64">
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
            <td className="xl86" width="64">
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
            <td className="xl86" width="64">
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
            <td className="xl86" width="64">
              Australia
            </td>
            <td className="xl88" width="64">
              13,500,000
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  two = () => {
    this.setState({ btnNum: 2 });
    s = this.state;
    t = (
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
            title="Check the Cettire store"
          >
            <td>6</td>
            <td className="Store">
              <a href="https://www.cettire.com/">Cettire</a>
            </td>
            <td>-</td>
            <td>United States</td>
            <td>24,400,000</td>
          </tr>
          <tr
            className="dataRow"
            height="31"
            role="button"
            title="Check the ColourPop store"
          >
            <td>7</td>
            <td className="Store">
              <a href="https://colourpop.com/">ColourPop</a>
            </td>
            <td className="xl87" width="232">
              -
            </td>
            <td className="xl86" width="64">
              United States
            </td>
            <td className="xl88" width="64">
              4,280,000
            </td>
          </tr>
          <tr
            className="dataRow"
            height="31"
            role="button"
            title="Check the Puravida store"
          >
            <td>8</td>
            <td className="Store">
              <a href="https://www.puravidabracelets.com/">
                Pura Vida Bracelets
              </a>
            </td>
            <td className="xl87" width="232">
              -
            </td>
            <td className="xl86" width="64">
              United States
            </td>
            <td className="xl88" width="64">
              17,600,000
            </td>
          </tr>
          <tr
            className="dataRow"
            height="31"
            role="button"
            title="Check the Beeinspired store"
          >
            <td>9</td>
            <td className="Store">
              <a href="https://www.beeinspiredclothing.com/">
                Bee Inspired Clothing
              </a>
            </td>
            <td className="xl87" width="232">
              -
            </td>
            <td className="xl86" width="64">
              United Kingdom
            </td>
            <td className="xl88" width="64">
              14,500,000
            </td>
          </tr>
          <tr
            className="dataRow"
            height="20"
            role="button"
            title="Check the Staples store"
          >
            <td height="20" className="xl84" width="64">
              10
            </td>
            <td className="Store">
              <a href="https://www.staples.ca/">Staples</a>
            </td>
            <td className="xl87" width="232">
              -
            </td>
            <td className="xl86" width="64">
              Canada
            </td>
            <td className="xl88" width="64">
              7,460,000
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        {t}
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
function getState() {
  return s;
}
export { ButtonTracker, getState };
