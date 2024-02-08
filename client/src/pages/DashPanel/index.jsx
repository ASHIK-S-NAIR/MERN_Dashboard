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
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  PieChart,
  Pie,
} from "recharts";
import { getAllSales } from "../../api/sales";

const DashPanel = () => {
  const [sales, setSales] = useState([]);

  const loadSales = useCallback(async () => {
    const data = await getAllSales();
    setSales(data);
  }, []);

  useEffect(() => {
    loadSales();
  }, [loadSales]);

  console.log("sales", sales);
  return (
    <section className="dashPanel-section">
      <div className="dashPanel-left">
        <div className="dashPanel-logo-sec">
          <img src={logoImg} alt="" className="dashPanel-logo-img" />
          <h2 className="dashPanel-logo-text">STATBOARD</h2>
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
              width={600}
              height={250}
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
            <PieChart width={730} height={250}>
              <Pie
                data={sales.map((sale) => {
                  return {
                    month: sale.month,
                    amount: sale.price * sale.quantity,
                  };
                })}
                dataKey="amount"
                nameKey="amount"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
            </PieChart>
          </div>
          <div className="dashPanel-right-secondRow">
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
                {sales &&
                  sales.map((sale, index) => {
                    return (
                      <tr key={index}>
                        <td>{sale.id}</td>
                        <td>{sale.month}</td>
                        <td>{sale.quantity}</td>
                        <td>{sale.price}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashPanel;
