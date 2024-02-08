import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import dashBoardImg from "../../assets/Circled Menu.svg";
import supportImg from "../../assets/Support.svg";
import PluginsImg from "../../assets/Puzzle.svg";
import helpImg from "../../assets/Help.svg";
import logoutImg from "../../assets/Shutdown.svg";
import logoImg from "../../assets/Briefcase.svg";
import greetingImg from "../../assets/Sun With Face.svg";
import userImg from "../../assets/Rectangle 10.svg";
import profileImg from "../../assets/cover.svg";
import facebookImg from "../../assets/facebook.svg";
import instagramImg from "../../assets/instagram.svg";
import twitterImg from "../../assets/twitter.svg";
import logoTextImg from "../../assets/StatBoard.png";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { getAllSales } from "../../api/sales";

const DashPanel = () => {
  const [sales, setSales] = useState([]);
  const [tablePage, setTablePage] = useState({
    page: 1,
    limit: 5,
  });
  const [salesPageData, setSalesPageData] = useState([]);

  const COLORS = [
    "#a05841",
    "#0098db",
    "#b3d79d",
    "#18e2c5",
    "#40ba9b",
    "#0098db",
    "#f7cc01",
    "#f7f400",
    "#ee3547",
    "#f844f1",
    "#746b5c",
    "#ff3131",
  ];
  const loadSales = useCallback(async () => {
    const data = await getAllSales();
    setSales(data);
    const startIndex = (tablePage.page - 1) * tablePage.limit;
    const endIndex = Math.min(startIndex + tablePage.limit, data.length);
    setSalesPageData(data.slice(startIndex, endIndex));
  }, []);

  const PieData = sales.map((sale) => {
    return {
      name: sale.month,
      value: sale.price * sale.quantity,
    };
  });

  const loadSalesPageData = useCallback(() => {
    const startIndex = (tablePage.page - 1) * tablePage.limit;
    const endIndex = Math.min(startIndex + tablePage.limit, sales.length);
    setSalesPageData(sales.slice(startIndex, endIndex));
  }, [sales, tablePage]);

  useEffect(() => {
    loadSales();
  }, [loadSales]);

  useEffect(() => {
    loadSalesPageData();
  }, [loadSalesPageData]);

  return (
    <section className="dashPanel-section">
      <div className="dashPanel-left">
        <div className="dashPanel-logo-sec">
          <img src={logoImg} alt="" className="dashPanel-logo-img" />
          <img src={logoTextImg} alt="" />
        </div>
        <ul className="dashPanel-left-ul">
          <li className="dashPanel-left-li">
            <Link to={`/dashpanel/dashboard`} className="dashPanel-left-link">
              <div className="dashPanel-left-tag">
                <img src={dashBoardImg} alt="" className="dashPanel-left-img" />
                Dashboard
              </div>
            </Link>
          </li>
          <li className="dashPanel-left-li">
            <Link to={`/dashpanel/dashboard`} className="dashPanel-left-link">
              <div className="dashPanel-left-tag">
                <img src={supportImg} alt="" className="dashPanel-left-img" />
                Support
              </div>
            </Link>
          </li>
          <li className="dashPanel-left-li">
            <Link to={`/dashpanel/dashboard`} className="dashPanel-left-link">
              <div className="dashPanel-left-tag">
                <img src={PluginsImg} alt="" className="dashPanel-left-img" />
                Plugins
              </div>
            </Link>
          </li>
          <li className="dashPanel-left-li">
            <Link to={`/dashpanel/dashboard`} className="dashPanel-left-link">
              <div className="dashPanel-left-tag">
                <img src={helpImg} alt="" className="dashPanel-left-img" />
                Help
              </div>
            </Link>
          </li>
        </ul>
        <div className="dashPanel-left-btn">
          Logout
          <img src={logoutImg} alt="" className="dashPanel-left-btn-img" />
        </div>
      </div>
      <div className="dashPanel-right">
        <div className="dashPanel-right-header">
          <div className="dashPanel-right-greeting-sec">
            <h2 className="dashPanel-right-greeting">Good Morning !</h2>
            <img
              src={greetingImg}
              className="dashPanel-right-greeting-img"
              alt=""
            />
          </div>
          <div className="dashPanel-right-userInfo-sec">
            <div className="dashPanel-right-userInfo">
              <h3 className="dashPanel-right-userInfo-name">John Doe</h3>
              <p className="dashPanel-right-userInfo-email">john@doe.com</p>
            </div>
            <img
              src={userImg}
              alt=""
              className="dashPanel-right-userInfo-img"
            />
          </div>
        </div>
        <div className="dashPanel-right-body">
          <div className="dashPanel-right-firstRow">
            <LineChart
              width={700}
              height={386}
              data={sales.map((sale) => {
                return {
                  month: sale.month,
                  amount: sale.price * sale.quantity,
                };
              })}
              className="dashPanel-right-lineChart"
            >
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
            <div className="dashPanel-right-pieChart-sec">
              <PieChart
                width={300}
                height={300}
                className="dashPanel-right-pieChart"
              >
                <Pie
                  data={PieData}
                  cx={150}
                  cy={150}
                  outerRadius={110}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {PieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
              <div className="dashPanel-right-pieChart-colors-sec">
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color "
                    style={{ backgroundColor: "#a05841" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">JAN</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#0098db" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">FEB</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#b3d79d" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">MAR</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#18e2c5" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">APR</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#40ba9b" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">MAY</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#0098db" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">JUN</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#f7cc01" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">JUL</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#f7f400" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">AUG</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "ee3547" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">SEP</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#f844f1" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">OCT</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#746b5c" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">NOV</p>
                </div>
                <div className="dashPanel-right-pieChart-color-sec">
                  <div
                    className="dashPanel-right-pieChart-color"
                    style={{ backgroundColor: "#ff3131" }}
                  ></div>
                  <p className="dashPanel-right-pieChart-color-text">DEC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dashPanel-right-secondRow">
            <div className="dashPanel-right-table-sec">
              <Table striped bordered hover className="dashPanel-right-table">
                <thead>
                  <tr className="dashPanel-right-table-thead-tr">
                    <th className="dashPanel-right-table-th">Id</th>
                    <th className="dashPanel-right-table-th">Month</th>
                    <th className="dashPanel-right-table-th">Quantity</th>
                    <th className="dashPanel-right-table-th">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {salesPageData &&
                    salesPageData.map((sale, index) => {
                      return (
                        <tr key={index}>
                          <td className="dashPanel-right-table-td">
                            {sale.id}
                          </td>
                          <td className="dashPanel-right-table-td">
                            {sale.month}
                          </td>
                          <td className="dashPanel-right-table-td">
                            {sale.quantity}
                          </td>
                          <td className="dashPanel-right-table-td">
                            {sale.price}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
              <div className="dashPanel-right-table-pagination">
                <button
                  className="dashPanel-right-table-page-btn"
                  onClick={() => setTablePage({ page: 1, limit: 5 })}
                >
                  1
                </button>
                <button
                  className="dashPanel-right-table-page-btn"
                  onClick={() => setTablePage({ page: 2, limit: 5 })}
                >
                  2
                </button>
                <button
                  className="dashPanel-right-table-page-btn"
                  onClick={() => setTablePage({ page: 3, limit: 5 })}
                >
                  3
                </button>
              </div>
            </div>
            <div className="dashPanel-right-profile-sec">
              <img
                src={profileImg}
                alt=""
                className="dashPanel-right-profile-img"
              />
              <h2 className="dashPanel-right-profile-name">John Doe</h2>
              <p className="dashPanel-right-profile-position">CEO</p>
              <div className="dashPanel-right-profile-social-sec">
                <img
                  src={facebookImg}
                  alt=""
                  className="dashPanel-right-profile-social-img"
                />
                <img
                  src={instagramImg}
                  alt=""
                  className="dashPanel-right-profile-social-img"
                />
                <img
                  src={twitterImg}
                  alt=""
                  className="dashPanel-right-profile-social-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashPanel;
